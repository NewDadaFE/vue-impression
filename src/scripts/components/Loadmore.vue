<template>
    <div class="loadmore">
        <div
            class="loadmore-content"
            :class="{ dropped: topDropped || bottomDropped }"
            :style="{ transform: `translate3d(0, ${translate}px, 0)` }">
            <slot name="top">
                <div class="loadmore-hint loadmore-hint-top" v-if="topMethod">
                    <loading v-if="showLoading && topStatus === 'loading'"></loading>
                    <span class="loadmore-text">{{ topText }}</span>
                </div>
            </slot>
            <slot></slot>
            <slot name="bottom">
                <div class="loadmore-hint loadmore-hint-bottom" v-if="bottomMethod">
                    <loading v-if="showLoading && bottomStatus === 'loading'" ></loading>
                    <span class="loadmore-text">{{ bottomText }}</span>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loadmore',
        props: {
            topPullText: {
                type: String,
                default: 'pull down to refresh',
            },
            topDropText: {
                type: String,
                default: 'release to load more',
            },
            topLoadingText: {
                type: String,
                default: 'loading...',
            },
            topDistance: {
                type: Number,
                default: 70,
            },
            topMethod: {
                type: Function,
            },
            topAllLoaded: {
                type: Boolean,
                default: false,
            },
            bottomPullText: {
                type: String,
                default: 'pull up to refresh',
            },
            bottomDropText: {
                type: String,
                default: 'release to load more',
            },
            bottomLoadingText: {
                type: String,
                default: 'loading...',
            },
            bottomDistance: {
                type: Number,
                default: 70,
            },
            bottomMethod: {
                type: Function,
            },
            bottomAllLoaded: {
                type: Boolean,
                default: false,
            },
            showLoading: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                topStatus: '',
                topText: '',
                topDropped: false,
                bottomStatus: '',
                bottomText: '',
                bottomDropped: false,
                bottomReached: false,
                scrollElement: null,
                startY: 0,
                startScrollTop: 0,
                currentY: 0,
                direction: '',
                translate: 0,
            };
        },
        watch: {
            topStatus(status) {
                switch(status) {
                    case 'pull':
                        this.topText = this.topPullText;
                        break;
                    case 'drop':
                        this.topText = this.topDropText;
                        break;
                    case 'loading':
                        this.topText = this.topLoadingText;
                        break;
                    default:
                        break;
                }
                this.$emit('topStatusChanged', status);
            },
            bottomStatus(status) {
                switch(status) {
                    case 'pull':
                        this.bottomText = this.bottomPullText;
                        break;
                    case 'drop':
                        this.bottomText = this.bottomDropText;
                        break;
                    case 'loading':
                        this.bottomText = this.bottomLoadingText;
                        break;
                    default:
                        break;
                }
                this.$emit('bottomStatusChanged', status);
            },
        },
        methods: {
            getScrollElement(element) {
                let currentNode = element,
                    overflowY = '';

                while(
                    currentNode &&
                    currentNode.tagName !== 'HTML' &&
                    currentNode.tagName !== 'BODY' &&
                    currentNode.nodeType === 1
                ) {
                    overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                    if(overflowY === 'scroll' || overflowY === 'auto') return currentNode;
                    currentNode = currentNode.parentNode;
                }

                return window;
            },
            getScrollTop(element) {
                if(element === window) {
                    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
                }

                return element.scrollTop;
            },
            handleTouchStart(event) {
                this.startY = event.touches[0].clientY;
                this.startScrollTop = this.getScrollTop(this.scrollElement);
                this.bottomReached = false;

                if(this.topStatus !== 'loading') {
                    this.topStatus = 'pull';
                    this.topDropped = false;
                }

                if(this.bottomStatus !== 'loading') {
                    this.bottomStatus = 'pull';
                    this.bottomDropped = false;
                }
            },
            handleTouchMove(event) {
                // outside element
                const rect = this.$el.getBoundingClientRect();

                if(this.startY < rect.top && this.startY > rect.bottom) return;

                // hand moved
                let distance = 0;

                this.currentY = event.touches[0].clientY;
                // avoid accident
                distance = (this.currentY - this.startY) / 2;
                // detect direction
                this.direction = distance > 0 ? 'down' : 'up';

                // pull down
                if(
                    typeof this.topMethod === 'function' &&
                    this.topStatus !== 'loading' &&
                    this.direction === 'down' &&
                    this.getScrollTop(this.scrollElement) === 0 &&
                    !this.topAllLoaded
                ) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.translate = distance - this.startScrollTop;
                    if(this.translate < 0) this.translate = 0;
                    this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
                }

                // pull up
                if(this.direction === 'up') {
                    this.bottomReached = this.bottomReached || this.isBottomReached();
                }

                if(
                    typeof this.bottomMethod === 'function' &&
                    this.bottomStatus !== 'loading' &&
                    this.direction === 'up' &&
                    this.bottomReached &&
                    !this.bottomAllLoaded
                ) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.translate = this.getScrollTop(this.scrollElement)
                        - this.startScrollTop
                        + distance;
                    if(this.translate > 0) this.translate = 0;
                    this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
                }
            },
            handleTouchEnd() {
                // pull down
                if(this.direction === 'down' &&
                    this.getScrollTop(this.scrollElement) === 0 &&
                    this.translate > 0
                ) {
                    this.topDropped = true;

                    if(this.topStatus === 'drop') {
                        this.translate = 50;
                        this.topStatus = 'loading';
                        this.topMethod();
                    } else {
                        this.translate = 0;
                        this.topStatus = 'pull';
                    }
                }

                // pull up
                if(
                    this.direction === 'up' &&
                    this.bottomReached &&
                    this.translate < 0
                ) {
                    this.bottomDropped = true;
                    // reset after pull up takes effect
                    this.bottomReached = false;

                    if(this.bottomStatus === 'drop') {
                        this.translate = -50;
                        this.bottomStatus = 'loading';
                        this.bottomMethod();
                    } else {
                        this.translate = 0;
                        this.bottomStatus = 'pull';
                    }
                }

                // reset direction
                this.direction = '';
            },
            isBottomReached() {
                if(this.scrollElement === window) {
                    return (
                        document.documentElement.clientHeight + document.body.scrollTop
                        === document.body.scrollHeight
                    );
                }

                return (
                    this.scrollElement.getBoundingClientRect().bottom
                    >= this.$el.getBoundingClientRect().bottom
                );
            },
            onTopLoaded() {
                this.translate = 0;
                setTimeout(() => {
                    this.topStatus = 'pull';
                }, 200);
            },
            onBottomLoaded() {
                this.bottomStatus = 'pull';
                this.bottomDropped = false;
                this.$nextTick(() => {
                    if(this.scrollElement === window) {
                        document.body.scrollTop += 50;
                    } else {
                        this.scrollElement.scrollTop += 50;
                    }
                    this.translate = 0;
                });
            },
        },
        mounted() {
            this.topText = this.topPullText;
            this.topStatus = 'pull';
            this.bottomStatus = 'pull';
            this.scrollElement = this.getScrollElement(this.$el);

            if(
                typeof this.topMethod === 'function' ||
                typeof this.bottomMethod === 'function'
            ) {
                this.$el.addEventListener('touchstart', this.handleTouchStart);
                this.$el.addEventListener('touchmove', this.handleTouchMove);
                this.$el.addEventListener('touchend', this.handleTouchEnd);
            }
        },
        beforeDestroy() {
            if(
                typeof this.topMethod === 'function' ||
                typeof this.bottomMethod === 'function'
            ) {
                this.$el.removeEventListener('touchstart', this.handleTouchStart);
                this.$el.removeEventListener('touchmove', this.handleTouchMove);
                this.$el.removeEventListener('touchend', this.handleTouchEnd);
            }
        },
    };
</script>
