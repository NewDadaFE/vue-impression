<template>
    <div class="tabbar" :class="{disabled}">
        <slot></slot>
        <div class="tabbar-indicator" ref="indicator"></div>
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
        methods: {
            // 设置指示器宽度
            setIndicatorWidth() {
                this.indicatorWidth = this.$el.offsetWidth / this.$children.length;
                this.$refs.indicator.style.width = `${this.indicatorWidth}px`;
            },
            // 初始化指示器位置
            initSelectedIndicator() {
                this.$children.forEach((child, index) => {
                    if(this.currentActiveKey === child.currentEventKey) {
                        let $indicator = this.$refs.indicator,
                            translateX = index * this.indicatorWidth;

                        setTranslate($indicator, translateX, 0);
                    }
                });
            },
        },
        watch: {
            currentActiveKey() {
                this.initSelectedIndicator();
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
