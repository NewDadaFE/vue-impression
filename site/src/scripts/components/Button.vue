<template>
    <button
        :type="type"
        @click="clickHandle"
        class="btn"
        :class="[
            'btn-' + theme,
            'btn-' + size,
            {
                ['btn-' + theme + '-outline']: outline,
                'btn-block': block,
            }]"
        :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    // Button
    export default {
        name: 'btn',
        props: {
            block: Boolean,
            outline: Boolean,
            disabled: Boolean,
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
        },
        methods: {
            clickHandle(event) {
                this.$emit('click', event);
            },
        },
    };
</script>
