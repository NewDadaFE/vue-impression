<template>
    <div
        class="back-to-top"
        :class="{'active': active}"
        @click="scrollToTopHandle">
        <icon class="back-to-top-icon" name="arrow-up" />
    </div>
</template>

<script>
    import { easeInOutCubic } from '../utils/easing';

    export default {
        name: 'back-to-top',
        props: {
            scope: {
                type: String,
                default: 'window',
                validator(value) {
                    return ['window', 'component', 'element'].indexOf(value) > -1;
                },
            },
        },
        data() {
            return {
                active: false,
            };
        },
        methods: {
            /* global window:true document:true requestAnimationFrame:true */
            scrollToTopHandle() {
                let scrollTop = this.getScrollTop(),
                    startTime = Date.now();

                let frameFunc = () => {
                    let timestamp = Date.now(),
                        time = timestamp - startTime;

                    this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                    if(time < 450) {
                        requestAnimationFrame(frameFunc);
                    }
                };

                requestAnimationFrame(frameFunc);
            },
            getScrollTop() {
                switch(this.scope) {
                    case 'component':
                        return this.$parent ? this.$parent.$el.scrollTop : 0;
                    case 'element':
                        return this.$el.parentNode ? this.$el.parentNode.scrollTop : 0;
                    default:
                        return window.pageYOffset;
                }
            },
            setScrollTop(val) {
                switch(this.scope) {
                    case 'component':
                        this.$parent && (this.$parent.$el.scrollTop = val);
                        break;
                    case 'element':
                        this.$el.parentNode && (this.$el.parentNode.scrollTop = val);
                        break;
                    default:
                        document.body.scrollTop = val;
                        document.documentElement.scrollTop = val;
                }
            },
            touchStartHandle() {
                switch(this.scope) {
                    case 'component':
                        this._offsetY = this.$parent.$el.scrollTop;
                        break;
                    case 'element':
                        this._offsetY = this.$el.parentNode.scrollTop;
                        break;
                    default:
                        this._offsetY = window.pageYOffset;
                }
            },
            touchEndHandle() {
                let scrollTop;

                switch(this.scope) {
                    case 'component':
                        scrollTop = this.$parent.$el.scrollTop;
                        break;
                    case 'element':
                        scrollTop = this.$el.parentNode.scrollTop;
                        break;
                    default:
                        scrollTop = window.pageYOffset;
                }

                // 显示
                if(scrollTop < this._offsetY && scrollTop > 60) {
                    this.active = true;
                } else {
                    // 隐藏
                    this.active = false;
                }

                this._offsetY = scrollTop;
            },
        },
        mounted() {
            switch(this.scope) {
                case 'component':
                case 'element':
                default:
                    document.addEventListener('touchstart', this.touchStartHandle);
                    document.addEventListener('touchend', this.touchEndHandle);
            }
        },
    };
</script>
