<template>
    <div class="swipe-item" @webkitTransitionEnd="reset">
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
            // 复位
            reset() {
                this.$el.style.transition = '';
                if(this.translate < 0) {
                    this.translate = this.width;
                }

                setTranslate(this.$el, this.translate, 0);
            },
            // 初始化
            init() {
                this.width = this.$el.offsetWidth;
                this.index = this.$parent.$children.indexOf(this);

                if(this.$parent.defaultIndex === this.index) {
                    this.translate = 0;
                } else {
                    this.translate = this.width;
                }

                setTranslate(this.$el, this.translate, 0);
            },
            // 向左滑动
            swipeToLeft() {
                this.$el.style.transition = `transform ${this.$parent.speed}ms ${this.$parent.transitionFuntion}`;
                this.translate = this.translate - this.width;
                setTranslate(this.$el, this.translate, 0);
            },
            // 向右滑动
            swipeToRight() {
                setTranslate(this.$el, this.translate + this.width, 0);
            },
        },
        mounted() {
            this.init();
        },
    };
</script>
