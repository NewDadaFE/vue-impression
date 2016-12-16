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
                    <template v-if="inverse">
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
            type: {
                type: String,
                default: 'confirm',
                validator(value) {
                    return ['alert', 'confirm'].indexOf(value) > -1;
                },
            },
            inverse: Boolean,
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
            okClickHandle() {
                this.visible = false;
                this.onOkClick && this.onOkClick();
            },
            // 取消
            cancelClickHandle() {
                this.visible = false;
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
