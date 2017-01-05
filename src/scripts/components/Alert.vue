<template>
    <div>
        <transition name="zoom"
            @after-leave="afterLeave">
            <div class="alert" v-show="currentValue">
                <div class="alert-modal">
                    <div class="alert-title">
                        {{title}}
                    </div>
                    <div class="alert-message" v-html="message"></div>
                    <div class="alert-footer">
                        <template v-if="inverseBtn">
                            <div v-if="type === 'confirm'" class="alert-btn alert-btn-secondary" @click="cancelClickHandle">
                                {{cancelText}}
                            </div>
                            <div class="alert-btn" @click="okClickHandle">
                                {{okText}}
                            </div>
                        </template>
                        <template v-else>
                            <div class="alert-btn" @click="okClickHandle">
                                {{okText}}
                            </div>
                            <div v-if="type === 'confirm'" class="alert-btn alert-btn-secondary" @click="cancelClickHandle">
                                {{cancelText}}
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </transition>
        <mask-layer :clickable="closeOnClickMask" />
    </div>
</template>
<script>
    export default {
        name: 'alert',
        props: {
            type: {
                type: String,
                default: 'confirm',
                validator(value) {
                    return ['alert', 'confirm'].indexOf(value) > -1;
                },
            },
            inverseBtn: Boolean,
            title: {
                type: String,
                default: '确认',
            },
            message: String,
            okText: {
                type: String,
                default: '确定',
            },
            cancelText: {
                type: String,
                default: '取消',
            },
            onOkClick: Function,
            onCancelClick: Function,
            closeOnClickMask: {
                type: Boolean,
                default: false,
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
            // 关闭
            okClickHandle() {
                this.currentValue = false;
                this.onOkClick && this.onOkClick();
            },
            // 取消
            cancelClickHandle() {
                this.currentValue = false;
                this.onCancelClick && this.onCancelClick();
            },
            // 移除dom
            /* global document:true */
            afterLeave() {
                document.body.removeChild(this.$el);
            },
        },
    };
</script>
