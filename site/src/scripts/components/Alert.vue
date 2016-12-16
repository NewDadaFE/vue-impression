<template>
    <div>
        <transition name="fade"
            @after-leave="afterLeave">
            <div class="alert" v-show="visible">
                <div class="alert-title">
                    {{title}}
                </div>
                <div class="alert-message">
                    {{message}}
                </div>
                <div class="alert-footer">
                    <div class="alert-btn" @click="clickHandle">{{btnText}}</div>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="visible"></div>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'alert',
        props: {
            title: {
                type: String,
                default: '提示',
            },
            message: String,
            btnText: {
                type: String,
                default: '关闭',
            },
            onClose: Function,
        },
        data() {
            return {
                visible: true,
            };
        },
        methods: {
            // 显示
            show() {
                this.visible = true;
            },
            // 关闭
            clickHandle() {
                this.visible = false;
                this.onClose && this.onClose();
            },
            // 移除dom
            /* global document:true */
            afterLeave() {
                document.body.removeChild(this.$el);
            },
        },
    };
</script>
