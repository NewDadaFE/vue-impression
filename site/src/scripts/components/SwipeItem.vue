<template>
    <div class="swipe-item"
        @webkitTransitionEnd="$el.style.transition = ''">
        <slot></slot>
    </div>
</template>

<script>
    import { setTranslate } from '../utils/translate';

    export default {
        name: 'swipe-item',
        data() {
            return {
                width: 0,
                translate: 0,
            };
        },
        methods: {
            // 重置
            reset(negative) {
                this.$el.style.transition = '';
                if(this.index !== this.$parent.activeIndex) {
                    setTranslate(this.$el, negative ? -this.width : this.width, 0);
                }
            },
            // 初始化
            init() {
                this.width = this.$el.offsetWidth;
                this.index = this.$parent.$children.indexOf(this);
                let translate = this.width;

                if(this.$parent.defaultIndex === this.index) {
                    translate = 0;
                }

                setTranslate(this.$el, translate, 0);
            },
            // 是否在可编译范围内
            isInTheLimitRange(translate, negative = false) {
                let min,
                    max;

                // 正序
                if(!negative) {
                    min = 0;
                    max = this.width;

                    if(this.index === this.$parent.activeIndex) {
                        min = -this.width;
                        max = 0;
                    }
                } else {
                    min = -this.width;
                    max = 0;

                    if(this.index === this.$parent.activeIndex) {
                        min = 0;
                        max = this.width;
                    }
                }

                return translate >= min && translate <= max;
            },
            // 向左滑动
            swipeToLeft(translateX) {
                // 轮播
                if(!translateX) {
                    this.$el.style.transition = `transform ${this.$parent.speed}ms ${this.$parent.transitionFuntion}`;

                    let translate = -this.width;

                    if(this.index === this.$parent.activeIndex) {
                        translate = 0;
                    }

                    setTranslate(this.$el, translate, 0);

                    return;
                }

                // 滑动
                let initTranslate = this.width;

                if(this.index === this.$parent.activeIndex) {
                    initTranslate = 0;
                }

                let finalTranslateX = initTranslate + translateX;

                if(this.isInTheLimitRange(finalTranslateX)) {
                    setTranslate(this.$el, finalTranslateX, 0);
                }
            },
            // 向右滑动
            swipeToRight(translateX) {
                // 轮播
                if(!translateX) {
                    this.$el.style.transition = `transform ${this.$parent.speed}ms ${this.$parent.transitionFuntion}`;

                    let translate = this.width;

                    if(this.index === this.$parent.activeIndex) {
                        translate = 0;
                    }

                    setTranslate(this.$el, translate, 0);

                    return;
                }

                // 滑动
                let initTranslate = -this.width;

                if(this.index === this.$parent.activeIndex) {
                    initTranslate = 0;
                }

                let finalTranslateX = initTranslate + translateX;

                if(this.isInTheLimitRange(finalTranslateX, true)) {
                    setTranslate(this.$el, finalTranslateX, 0);
                }
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
