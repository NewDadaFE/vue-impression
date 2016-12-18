<template>
    <div class="swipe" ref="swipe">
        <div class="swipe-items">
            <slot></slot>
        </div>
        <div class="swipe-indicators" v-if="showIndicator">
            <div class="swipe-indicator" :class="{active: n -1 === activeIndex}" v-for="n in length"></div>
        </div>
    </div>
</template>

<script>
    import draggable from '../utils/draggable';

    export default {
        name: 'swipe',
        props: {
            vertical: Boolean,
            autoplay: {
                type: Boolean,
                default: true,
            },
            defaultIndex: {
                type: Number,
                default: 0,
            },
            showIndicator: {
                type: Boolean,
                default: true,
            },
            interval: {
                type: Number,
                default: 3000,
            },
            speed: {
                type: Number,
                default: 1000,
            },
            transitionFuntion: {
                type: String,
                default: 'ease-in-out',
            },
        },
        data() {
            return {
                length: 0,
                dragging: false,
                transitioning: false,
                activeIndex: this.defaultIndex,
            };
        },
        methods: {
            init() {
                this.length = this.$children.length;
            },
            initDrag() {
                let { swipe } = this.$refs,
                    newIndex;

                draggable(swipe, {
                    onDragStart: () => {
                        if(this.transitioning) return;

                        this.dragging = true;
                        clearInterval(this.swipeInterval);
                    },
                    onDrag: ({ translateX }) => {
                        if(this.transitioning) return;

                        // 往左
                        if(translateX <= 0) {
                            let nextIndex = this.activeIndex + 1;
                            nextIndex > this.length - 1 && (nextIndex %= this.length);

                            this.$children[this.activeIndex].swipeToLeft(translateX);
                            this.$children[nextIndex].swipeToLeft(translateX);

                            newIndex = nextIndex;
                        } else {
                            return;
                            // 往右
                            let prevIndex = this.activeIndex - 1;
                            prevIndex < 0 && (prevIndex += this.length);

                            this.$children[this.activeIndex].swipeToLeft(translateX);
                            this.$children[prevIndex].swipeToLeft(translateX);

                            newIndex = prevIndex;
                        }
                    },
                    onDragEnd: () => {
                        if(this.transitioning) return;

                        this.dragging = false;

                        this.activeIndex = newIndex;
                        setTimeout(() => {
                            this.play();
                        }, this.interval);
                    },
                });
            },
            // 自动播放
            play() {
                clearInterval(this.swipeInterval);
                this.swipeInterval = setInterval(() => {
                    if(this.dragging) {
                        return;
                    }

                    let activeIndex = this.activeIndex + 1;

                    this.activeIndex = activeIndex > this.length - 1 ? activeIndex % this.length : activeIndex;
                }, this.interval);
            },
        },
        watch: {
            activeIndex(val) {
                this.transitioning = true;
                let currentIndex = val - 1;

                currentIndex = currentIndex < 0 ? this.length + currentIndex : currentIndex;

                let currentItem = this.$children[currentIndex],
                    nextItem = this.$children[val];

                // 重置
                this.$children.forEach((child, activeIndex) => {
                    if(activeIndex !== currentIndex) {
                        child.reset();
                    }
                });

                currentItem.swipeToLeft();
                nextItem.swipeToLeft();
            },
        },
        mounted() {
            this.init();
            this.initDrag();
            this.autoplay && this.play();
        },
        updated() {
            setTimeout(() => {
                this.transitioning = false;
            }, this.speed);
        },
    };
</script>
