<template>
    <div class="swipe">
        <div class="swipe-items">
            <slot></slot>
        </div>
        <div class="swipe-indicators" v-if="showIndicator">
            <div class="swipe-indicator" :class="{active: n -1 === index}" v-for="n in length"></div>
        </div>
    </div>
</template>

<script>
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
                isDragging: false,
                index: this.defaultIndex,
            };
        },
        methods: {
            init() {
                this.length = this.$children.length;
            },
            // 自动播放
            play() {
                setInterval(() => {
                    if(this.isDragging) {
                        return;
                    }

                    let index = this.index + 1;

                    this.index = index > this.length - 1 ? index % this.length : index;
                }, this.interval);
            },
        },
        watch: {
            index(val) {
                let currentIndex = val - 1;

                currentIndex = currentIndex < 0 ? this.length + currentIndex : currentIndex;

                let currentItem = this.$children[currentIndex],
                    nextItem = this.$children[val];

                // 重置
                this.$children.forEach((child, index) => {
                    if(index !== currentIndex) {
                        child.reset();
                    }
                });

                currentItem.swipeToLeft();
                nextItem.swipeToLeft();
            },
        },
        mounted() {
            this.init();
            this.autoplay && this.play();
        },
    };
</script>
