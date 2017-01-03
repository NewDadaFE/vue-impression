<template>
    <div
        class="back-to-top"
        :class="{'active': active}"
        @click.prevent.stop="scrollToTopHandle">
        <icon class="back-to-top-icon" name="arrow-up" />
    </div>
</template>

<script>
    import { easeInOutCubic } from '../utils/easing';
    import { getScrollContainer } from '../utils/dom';

    export default {
        name: 'back-to-top',
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
                this.active = false;
            },
            getScrollTop() {
                return this.scrollTargetEl === document
                ? window.pageYOffset : this.scrollTargetEl.scrollTop;
            },
            setScrollTop(val) {
                if(this.scrollTargetEl === document) {
                    document.body.scrollTop = val;
                    document.documentElement.scrollTop = val;

                    return;
                }

                this.scrollTargetEl.scrollTop = val;
            },
            touchStartHandle() {
                this._offsetY = this.scrollTargetEl === document
                ? window.pageYOffset : this.scrollTargetEl.scrollTop;
            },
            touchEndHandle() {
                let scrollTop = this.scrollTargetEl === document
                ? window.pageYOffset : this.scrollTargetEl.scrollTop;

                // 显示
                if(scrollTop < this._offsetY && (this._offsetY - scrollTop > 60)) {
                    this.active = true;
                } else if(Math.abs(this._offsetY - scrollTop) > 60) {
                    // 隐藏
                    this.active = false;
                }

                this._offsetY = scrollTop;
            },
        },
        mounted() {
            this.scrollTargetEl = getScrollContainer(this.$el);

            this.scrollTargetEl.addEventListener('touchstart', this.touchStartHandle);
            this.scrollTargetEl.addEventListener('touchend', this.touchEndHandle);
        },
    };
</script>
