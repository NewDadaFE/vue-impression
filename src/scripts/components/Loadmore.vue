<template>
    <!-- 滚动模块 固定为node-loadmore -->
    <div class="loadmore" style="overflow-y: auto;height:100%;">
        <div
            class="loadmore-content"
            :class="{ dropped: topDropped || bottomDropped }"
            :style="{ transform: `translate3d(0, ${translate < maxTranslate ? translate : maxTranslate}px, 0)` }">
            <slot name="top">
                <div class="loadmore-hint loadmore-hint-top" :style="{ height: `${ translate < maxTranslate ? translate : maxTranslate }px` }" v-if="topMethod">
                    <loading size="md" v-if="showLoading" />
                    <span class="loadmore-text">{{ (showLoading && topLoadingText) || topText }}</span>
                </div>
            </slot>
            <slot></slot>
            <slot name="bottom">
                <div class="loadmore-hint loadmore-hint-bottom" v-if="bottomMethod && direction === 'up' && !bottomAllLoaded">
                    <loading size="md" v-if="showLoading" />
                    <span class="loadmore-text">{{ showLoading && bottomLoadingText || bottomText }}</span>
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
                default: '',
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
            topCancelledMethod: {
                type: Function,
            },
            topPulledMethod: {
                type: Function,
            },
            topAllLoaded: {
                type: Boolean,
                default: false,
            },
            bottomPullText: {
                type: String,
                default: '',
            },
            bottomDropText: {
                type: String,
                default: '',
            },
            bottomLoadingText: {
                type: String,
                default: 'loading...',
            },
            bottomDistance: {
                type: Number,
                default: 70,
            },
            bottomOffset: {
                type: Number,
                default: 0,
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
            autoLoading: {
                type: Boolean,
                default: true,
            },
            maxTranslate: { // 下拉刷新 最大回弹距离
                type: Number,
                default: 100,
            }
        },
        data() {
            return {
                topStatus: '',
                topText: '',
                topDropped: false,
                topPulled: false,
                bottomStatus: 'init',
                bottomText: '',
                bottomDropped: false,
                bottomReached: false,
                scrollElement: null,
                startY: 0,
                startScrollTop: 0,
                currentY: 0,
                direction: '',
                translate: 0,
                previousScrollY: 0,
                downRefreshElement: null,
            };
        },
        watch: {
            topStatus(status) {
                console.log('topstatus', status)
                switch(status) {
                    case 'pull':
                        this.topText = this.topPullText;
                        break;
                    case 'drop':
                        this.topText = this.topDropText;
                        break;
                    case 'init':
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
                    case 'init':
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
            // 初始化上拉加载
            async initUpContent() {
                // todo
                // loadFull: {
                //     use: false, // 列表数据过少,不足以滑动触发上拉加载,是否自动加载下一页,直到满屏或者无更多数据为止;默认false,因为可通过调高page.size避免这个情况
                //     delay: 500 // 延时执行的毫秒数; 延时是为了保证列表数据或占位的图片都已初始化完成,且下拉刷新上拉加载中区域动画已执行完毕;
                // },
                await this.bottomMethod()
                this.bottomText = this.bottomLoadingText;
                this.bottomStatus = 'pull';
            },
            // 初始化下拉刷新
            async initDownContent() {
                await this.handlePullDownRefresh()
                this.topText = this.topLoadingText;
                this.topStatus = 'pull';
            },
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
                // if(element === window) {
                //     return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
                // }

                return element.scrollTop;
            },
            // 下拉刷新
            async handlePullDownRefresh() {
                this.translate = 50;
                this.topStatus = 'loading';
                await this.topMethod()
                this.topStatus = 'pull';
            },
            async handleScroll(event) {
                console.log('111wwwwwwwwwwwwww')
                this.direction = (this.getScrollTop(this.scrollElement) - this.previousScrollY > 0) ? 'up' : 'down'

                // pull up
                if(this.direction === 'up') {
                    this.bottomReached = this.bottomReached || this.isBottomReached();
                }

                if(
                    typeof this.bottomMethod === 'function' &&
                    this.bottomStatus !== 'loading' && this.bottomStatus !== 'init' &&
                    this.direction === 'up' &&
                    this.bottomReached &&
                    !this.bottomAllLoaded
                ) {
                    event.stopPropagation();
                    console.log('wwwwwwwwwwwwww')
                    this.bottomStatus = 'loading';
                    await this.bottomMethod()
                    this.bottomStatus = 'pull';
                    this.bottomReached = false;
                }

                // pull down
            },
            handleTouchStart(event) {
                this.startY = event.touches[0].clientY;
                this.startScrollTop = this.getScrollTop(this.scrollElement);
                this.bottomReached = false;

                if(this.topStatus !== 'loading') {
                    this.topStatus = 'pull';
                    this.topDropped = false;
                    this.topPulled = false;
                }

                if(this.bottomStatus !== 'loading' && this.bottomStatus !== 'init') {
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
                    // event.preventDefault();
                    event.stopPropagation();
                    this.translate = distance - this.startScrollTop;
                    if(this.translate < 0) this.translate = 0;
                    this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
                    if(!this.topPulled) {
                        this.topPulled = true;
                        this.topPulledMethod && this.topPulledMethod();
                    }
                }

                // pull up
                // if(this.direction === 'up') {
                //     this.bottomReached = this.bottomReached || this.isBottomReached();
                // }

                // if(
                //     typeof this.bottomMethod === 'function' &&
                //     this.bottomStatus !== 'loading' && this.bottomStatus !== 'init' &&
                //     this.direction === 'up' &&
                //     this.bottomReached &&
                //     !this.bottomAllLoaded
                // ) {
                //     // event.preventDefault();
                //     event.stopPropagation();
                //     // this.translate = this.getScrollTop(this.scrollElement)
                //     //     - this.startScrollTop
                //     //     + distance;
                //     // if(this.translate > 0) this.translate = 0;
                //     // this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
                //     // this.bottomMethod()
                // }
            },
            async handleTouchEnd() {
                // pull down
                if(this.direction === 'down' &&
                    this.getScrollTop(this.scrollElement) === 0 &&
                    this.translate > 0
                ) {
                    console.log('cccccccccccccccc1111')
                    this.topDropped = true;

                    if(this.topStatus === 'drop') {
                        console.log('cccccccccccccccc11112222')
                        this.translate = 50;
                        // this.topStatus = 'loading';
                        // this.topMethod();
                        await this.handlePullDownRefresh()
                        this.translate = 0;
                    } else {
                        console.log('cccccccccccccccc11112222333')
                        this.translate = 0;
                        this.topStatus = 'pull';
                        this.topCancelledMethod && this.topCancelledMethod();
                    }
                }

                // pull up
                if(
                    this.direction === 'up' &&
                    this.bottomReached
                ) {
                    // this.bottomDropped = true;
                    // // reset after pull up takes effect
                    // this.bottomReached = false;

                    // if(this.bottomStatus === 'drop') {
                    //     this.translate = -50;
                    //     this.bottomStatus = 'loading';
                    //     this.bottomMethod();
                    // } else {
                    //     this.translate = 0;
                    //     this.bottomStatus = 'pull';
                    // }

                    this.bottomStatus = 'loading';
                    this.bottomReached = false;
                    // this.bottomMethod();
                }

                // reset direction
                this.direction = '';
            },
            isBottomReached() {
                // const toBottom = parseInt(this.$el.scrollHeight - this.$el.clientHeight - this.$el.scrollTop);
                // console.log(this.$el.scrollHeight, this.$el.clientHeight, this.$el.scrollTop)

                const toBottom = parseInt(this.scrollElement.scrollHeight - this.scrollElement.clientHeight - this.scrollElement.scrollTop);
                console.log(this.scrollElement.scrollHeight, this.scrollElement.clientHeight, this.scrollElement.scrollTop, toBottom, toBottom <= this.bottomOffset)
                return toBottom <= this.bottomOffset;
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
                    // if(this.scrollElement === window) {
                    //     document.body.scrollTop += 50;
                    // } else {
                        this.scrollElement.scrollTop += 50;
                    // }
                    this.translate = 0;
                });
            },
        },
        created() {
            if (this.topMethod && this.bottomMethod) {
                console.log('000000')
                this.initUpContent()
                return
            }
            this.topMethod && this.initDownContent()
            this.bottomMethod && this.initUpContent()
        },
        mounted() {
            this.scrollElement = this.getScrollElement(this.$el);
            // this.scrollElement = this.$el

            console.log(this.scrollElement)

            if(
                typeof this.topMethod === 'function' ||
                typeof this.bottomMethod === 'function'
            ) {
                this.$el.addEventListener('touchstart', this.handleTouchStart);
                this.$el.addEventListener('touchmove', this.handleTouchMove);
                this.$el.addEventListener('touchend', this.handleTouchEnd);
                this.$el.addEventListener('scroll', this.handleScroll)
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
