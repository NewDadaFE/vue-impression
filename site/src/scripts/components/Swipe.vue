<template>
    <div class="swipe" ref="swipe">
        <div class="swipe-items">
            <slot></slot>
        </div>
        <div class="swipe-indicators" v-if="showIndicator">
            <div class="swipe-indicator" :class="{active: n - 1 === activeIndex}" v-for="n in length"></div>
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
                default: 300,
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
                negative: false,
                activeIndex: this.defaultIndex,
            };
        },
        methods: {
            init() {
                this.length = this.$children.length;
            },
            // 获取前一个索引
            getPrevIndex(val) {
                let prevIndex = (val !== undefined ? val : this.activeIndex) - 1;

                return prevIndex < 0 ? this.length + prevIndex : prevIndex;
            },
            // 获取后一个索引
            getNextIndex() {
                let nextIndex = this.activeIndex + 1;

                return nextIndex > this.length - 1 ? nextIndex % this.length : nextIndex;
            },
            // 初始化拖拽
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
                            let nextIndex = this.getNextIndex();

                            this.$children[this.activeIndex].swipeToLeft(translateX);
                            this.$children[nextIndex].swipeToLeft(translateX);

                            this.negative = false;
                            newIndex = nextIndex;
                        } else {
                            // 往右
                            let prevIndex = this.getPrevIndex();

                            this.$children[this.activeIndex].swipeToRight(translateX);
                            this.$children[prevIndex].swipeToRight(translateX);

                            this.negative = true;
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

                    this.activeIndex = this.getNextIndex();
                }, this.interval);
            },
        },
        watch: {
            activeIndex(val) {
                this.transitioning = true;

                let nextItem = this.$children[val],
                    currentIndex = this.negative ? this.getNextIndex(val) : this.getPrevIndex(val),
                    currentItem = this.$children[currentIndex];

                // 重置
                this.$children.forEach((child, activeIndex) => {
                    if(activeIndex !== currentIndex) {
                        child.reset(this.negative);
                    }
                });

                if(!this.negative) {
                    currentItem.swipeToLeft();
                    nextItem.swipeToLeft();
                } else {
                    currentItem.swipeToRight();
                    nextItem.swipeToRight();
                    this.negative = false;
                }
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
