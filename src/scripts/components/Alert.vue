<template>
    <div>
        <transition name="zoom"
            @after-leave="afterLeave">
            <div
                class="alert"
                v-show="currentValue"
                @click.self="maskClosable && (currentValue = false)"
                @touchmove.prevent.stop>
                <div class="alert-modal">
                    <div class="alert-title"  v-html="title">
                    </div>
                    <div class="alert-message" v-html="message"></div>
                    <div class="alert-footer" :class="{'alert-footer-vertical': vertical}">
                        <div
                            v-for="btn in btns"
                            class="alert-btn"
                            @click="clickHandle(btn.click)"
                            v-html="btn.text">
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <mask-layer :clickable="false" />
    </div>
</template>
<script>
    export default {
        name: 'alert',
        props: {
            // 标题
            title: {
                type: String,
                default: '确认',
            },
            // 内容
            message: String,
            // 按钮垂直摆放
            vertical: {
                type: Boolean,
                default: false,
            },
            // 自动关闭
            autoClose: {
                type: Boolean,
                default: true,
            },
            // 点击mask是否可以关闭
            maskClosable: {
                type: Boolean,
                default: false,
            },
            // 按钮组
            btns: {
                type: Array,
                default() {
                    return [{
                        text: '确定',
                    }];
                },
            },
        },
        data() {
            return {
                currentValue: false,
            };
        },
        methods: {
            // 显示
            show() {
                this.currentValue = true;
            },
            // 按钮点击
            clickHandle(callback) {
                callback && callback();
                this.autoClose && (this.currentValue = false);
            },
            // 移除dom
            /* global document:true */
            afterLeave() {
                document.body.removeChild(this.$el);
            },
        },
    };
</script>
