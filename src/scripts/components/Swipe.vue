<template>
    <div class="swipe" ref="swipe">
        <div class="swipe-items">
            <slot></slot>
        </div>
        <div class="swipe-indicators" v-show="dots">
            <div class="swipe-indicator" :class="{active: index - 1 === activeIndex}" v-for="index in length"></div>
        </div>
    </div>
</template>

<script>
    import draggable from '../utils/draggable';

    export default {
        name: 'swipe',
        props: {
            // 自动播放
            autoplay: {
                type: Boolean,
                default: true,
            },
            // 默认起始项
            defaultIndex: {
                type: Number,
                default: 0,
            },
            // 是否显示指示器
            dots: {
                type: Boolean,
                default: true,
            },
            // 轮播间隔时间
            interval: {
                type: Number,
                default: 3000,
            },
            // 轮播速度
            speed: {
                type: Number,
                default: 300,
            },
            dragThreshold: {
                type: Number,
                default: 1 / 2,
            },
            dragRate: {
                type: Number,
                default: 0.2,
            },
            onDragStart: Function,
            onDrag: Function,
            onDragEnd: Function,
            // 过渡效果
            easing: {
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
            getPrevIndex() {
                let prevIndex = this.activeIndex - 1;

                return prevIndex < 0 ? this.length + prevIndex : prevIndex;
            },
            // 获取后一个索引
            getNextIndex() {
                let nextIndex = this.activeIndex + 1;

                return nextIndex > this.length - 1 ? nextIndex % this.length : nextIndex;
            },
            // 初始化拖拽
            initDrag() {
                if(this.length <= 1) {
                    return;
                }

                let { swipe } = this.$refs,
                    translateX,
                    newIndex,
                    dragStartTime;

                draggable(swipe, {
                    onDragStart: () => {
                        this.onDragStart && this.onDragStart(this.activeIndex);

                        if(this.transitioning) return;

                        dragStartTime = new Date();
                        this.dragging = true;
                        clearInterval(this.swipeInterval);
                    },
                    onDrag: option => {
                        if(this.transitioning) return;

                        translateX = option.translateX;
                        this.onDrag && this.onDrag(this.activeIndex, translateX);

                        if(translateX === 0) return;
                        // 往左
                        if(translateX < 0) {
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

                        let threshold = this.$children[this.activeIndex].width * this.dragThreshold,
                            rate = Math.abs(translateX) / (new Date() - dragStartTime);

                        if(Math.abs(translateX) >= threshold || rate > this.dragRate) {
                            this.activeIndex = newIndex;

                            this.onDragEnd && this.onDragEnd(newIndex);
                        } else if(this.negative) {
                            let prevIndex = this.getPrevIndex();

                            this.$children[this.activeIndex].swipeToLeft(0);
                            this.$children[prevIndex].swipeToLeft(0);

                            this.onDragEnd && this.onDragEnd(prevIndex);
                        } else {
                            // 往左
                            let nextIndex = this.getNextIndex();

                            this.$children[this.activeIndex].swipeToRight(0);
                            this.$children[nextIndex].swipeToRight(0);

                            this.onDragEnd && this.onDragEnd(nextIndex);
                        }

                        setTimeout(() => {
                            this.play();
                        }, this.interval);
                    },
                });
            },
            // 自动播放
            play() {
                if(!this.autoplay) return;

                clearInterval(this.swipeInterval);
                this.swipeInterval = setInterval(() => {
                    if(this.dragging) return;

                    this.activeIndex = this.getNextIndex();
                }, this.interval);
            },
        },
        watch: {
            activeIndex() {
                this.transitioning = true;

                let nextItem = this.$children[this.activeIndex],
                    currentIndex = this.negative ? this.getNextIndex() : this.getPrevIndex(),
                    currentItem = this.$children[currentIndex];

                // 重置()
                // this.$children.forEach((child, activeIndex) => {
                //     if(activeIndex !== currentIndex) {
                //         child.reset(this.negative);
                //     }
                // });

                if(!this.negative) {
                    currentItem.swipeToLeft();
                    nextItem.swipeToLeft();
                } else {
                    currentItem.swipeToRight();
                    nextItem.swipeToRight();
                    this.negative = false;
                }
            },
            // 异步swipeItem
            length() {
                if(this.length) {
                    this.initDrag();
                    this.play();
                }
            },
        },
        mounted() {
            this.init();
        },
        updated() {
            this.$nextTick(() => {
                this.init();
            });
            setTimeout(() => {
                this.transitioning = false;
            }, this.speed);
        },
        beforeDestroy() {
            clearInterval(this.swipeInterval);
        },
    };
</script>
