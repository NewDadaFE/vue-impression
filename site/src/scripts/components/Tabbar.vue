<template>
    <div class="tabbar">
        <slot></slot>
        <div
            class="tabbar-indicator"
            ref="indicator"></div>
        <div>
        </div>
    </div>
</template>

<script>
    import Tab from '../mixins/tab';
    import { setTranslate } from '../utils/translate';

    export default {
        name: 'tabbar',
        mixins: [Tab],
        props: {
            activeKey: {
                default: 0,
            },
        },
        data() {
            return {
                _indicatorWidth: 0,
            };
        },
        methods: {
            // 设置指示器宽度
            setIndicatorWidth() {
                let indicatorWidth = this.$el.offsetWidth / this.$children.length;
                this._indicatorWidth = indicatorWidth;
                this.$refs.indicator.style.width = `${indicatorWidth}px`;
            },
            // 初始化指示器位置
            initSelectedIndicator() {
                this.$children.forEach((child, index) => {
                    if(this.currentActiveKey === child.currentEventKey) {
                        let $indicator = this.$refs.indicator,
                            translateX = index * this._indicatorWidth;

                        setTranslate($indicator, translateX, 0);
                    }
                });
            },
        },
        mounted() {
            this.setIndicatorWidth();
            this.initSelectedIndicator();
        },
        updated() {
            this.setIndicatorWidth();
            this.initSelectedIndicator();
        },
    };
</script>
