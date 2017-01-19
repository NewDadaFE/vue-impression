<template>
    <div
        class="picker"
        :class="{
            [`picker-${size}`]: size,
        }"
        ref="picker">
        <div class="picker-mask"></div>
        <div class="picker-indicator"></div>
        <div class="picker-list" :class="{active: dragging}" ref="pickerList">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';
    import draggable from '../utils/draggable';
    import { getTranslate, setTranslate } from '../utils/translate';

    export default {
        name: 'picker',
        mixins: [Sync],
        props: {
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                },
            },
        },
        data() {
            return {
                dragging: false,
                itemHeight: 0,
                pickedIndex: -1,
            };
        },
        methods: {
            // 计算拖拽区间
            getDragRange() {
                let { pickerList } = this.$refs;

                return {
                    min: -1 * this.getOptionHeight() * (pickerList.children.length - 1),
                    max: 0,
                };
            },
            // 获取每个Option高度
            getOptionHeight() {
                if(this.itemHeight) return this.itemHeight;

                let style = document.body.currentStyle ||
                document.defaultView.getComputedStyle(document.body, '');

                this.itemHeight = 3 * parseInt(style.fontSize, 10);

                return this.itemHeight;
            },
            // 选择Option
            pickOption() {
                let pickIndex = 0;

                this.$children.forEach((option, index) => {
                    if(option.value === this.currentValue) {
                        pickIndex = index;
                    }
                });

                let itemHeight = this.getOptionHeight(),
                    translate = itemHeight * pickIndex * -1;

                setTranslate(this.$refs.pickerList, null, translate);
                this.pickedIndex = Math.abs(pickIndex);
            },
            // 事件初始化
            initDrag() {
                let { picker, pickerList } = this.$refs,
                    prevTranslateY;

                draggable(picker, {
                    effectEl: pickerList,
                    onDragStart: ({ translateY }, event) => {
                        event.preventDefault();
                        prevTranslateY = translateY;
                    },
                    onDrag: ({ dragging, effectEl, translateY }, event) => {
                        event.preventDefault();
                        this.dragging = dragging;

                        let maxTranslateY = this.getOptionHeight() * 3;
                        let currentTranslateY = translateY;
                        let pickerHeight = this.$children.length * this.getOptionHeight();

                        if(translateY > 0) {
                            let rate = (maxTranslateY - translateY) / maxTranslateY;

                            rate = rate >= 0 ? rate : 0.1;

                            currentTranslateY = prevTranslateY + rate * (translateY - prevTranslateY);
                        } else if(translateY < -pickerHeight) {
                            let rate = ((translateY - pickerHeight) - maxTranslateY) / maxTranslateY;

                            rate = rate >= 0 ? rate : 0.1;

                            currentTranslateY = prevTranslateY + rate * (translateY - prevTranslateY);
                        }

                        prevTranslateY = currentTranslateY;
                        setTranslate(effectEl, null, currentTranslateY);
                    },
                    onDragEnd: ({ dragging, startTimestamp, velocityTranslateY }, event) => {
                        event.preventDefault();

                        this.dragging = dragging;
                        let momentumRatio = 10,
                            itemHeight = this.getOptionHeight(),
                            translateY = getTranslate(pickerList).y,
                            duration = new Date() - startTimestamp;

                        let momentumTranslate;

                        if(duration < 300) {
                            momentumTranslate = translateY + (velocityTranslateY * momentumRatio);
                        }

                        this.$nextTick(() => {
                            let translate;
                            let dragRange = this.getDragRange();

                            if(momentumTranslate) {
                                translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
                            } else {
                                translate = Math.round(translateY / itemHeight) * itemHeight;
                            }

                            translate = Math.max(Math.min(translate, dragRange.max), dragRange.min);
                            setTranslate(pickerList, null, translate);

                            this.pickedIndex = Math.abs(translate / itemHeight);
                        });
                    },
                });
            },
        },
        watch: {
            pickedIndex(val) {
                this.currentValue = this.$children[val].value;
            },
            value() {
                this.pickOption();
            },
        },
        mounted() {
            this.pickOption();
            this.initDrag();
        },
    };
</script>
