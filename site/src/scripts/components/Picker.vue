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

                let { pickerList } = this.$refs,
                    items = pickerList.children;

                if(items.length) {
                    this.itemHeight = items[0].offsetHeight;
                }

                return 36;
            },
            // 初始化
            init() {
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
            initEvents() {
                let { picker, pickerList } = this.$refs,
                    dragState = {};

                let velocityTranslate,
                    prevTranslateY;

                draggable(picker, {
                    onDragStart: event => {
                        dragState = {
                            start: new Date(),
                            pageX: event.pageX,
                            pageY: event.pageY,
                            translateY: getTranslate(pickerList).y,
                        };
                    },
                    onDrag: event => {
                        this.dragging = true;

                        let deltaY = event.pageY - dragState.pageY;

                        let translateY = dragState.translateY + deltaY;

                        setTranslate(pickerList, null, translateY);

                        velocityTranslate = translateY - prevTranslateY || translateY;
                        prevTranslateY = translateY;
                    },
                    onDragEnd: () => {
                        this.dragging = false;
                        let momentumRatio = 10,
                            itemHeight = this.getOptionHeight(),
                            translateY = getTranslate(pickerList).y,
                            duration = new Date() - dragState.start;

                        let momentumTranslate;
                        if(duration < 300) {
                            momentumTranslate = translateY + (velocityTranslate * momentumRatio);
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

                        dragState = {};
                    },
                });
            },
        },
        watch: {
            pickedIndex(val) {
                this.currentValue = this.$children[val].value;
            },
        },
        mounted() {
            this.init();
            this.initEvents();
        },
    };
</script>
