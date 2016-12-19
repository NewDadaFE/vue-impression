<template>
    <button
        :type="type"
        @click="clickHandle"
        class="btn"
        :class="{
            [`btn-${theme}`]: theme,
            [`btn-${size}`]: size,
            [`btn-${theme}-outline`]: hollow,
            ['btn-block']: block,
            ['btn-loading']: loading,
            [`border-${shape}`]: shape === 'pill',
        }"
        :disabled="disabled || loading">
        <slot></slot>
        <loading
            size="sm"
            v-if="loading"
            :theme="theme === 'default' ? 'primary' : null" />
    </button>
</template>

<script>
    // Button
    export default {
        name: 'btn',
        props: {
            block: Boolean,
            hollow: Boolean,
            disabled: Boolean,
            // 加载中
            loading: Boolean,
            // 类型
            type: {
                type: String,
                default: 'button',
                validator(value) {
                    return ['button', 'submit', 'reset'].indexOf(value) > -1;
                },
            },
            // 主题
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'secondary', 'default'].indexOf(value) > -1;
                },
            },
            // 尺寸
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                },
            },
            // 形状
            shape: {
                type: String,
                validator(value) {
                    return ['pill'].indexOf(value) > -1;
                },
            },
        },
        methods: {
            clickHandle(event) {
                this.$emit('click', event);
            },
        },
    };
</script>
