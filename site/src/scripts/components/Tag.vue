<template>
    <span
        @click="$emit('click')"
        class="tag"
        :class="{
            ['tag-' + theme]: !hollow,
            ['tag-outline-' + theme]: hollow,
            ['tag-' + size]: size,
            [`border-${shape}`]: shape === 'pill',
        }">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'tag',
        props: {
            // 空心
            hollow: Boolean,
            // 尺寸
            size: {
                type: String,
                validator(value) {
                    return ['sm'].indexOf(value) > -1;
                },
            },
            // 主题
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'default', 'success', 'warning', 'danger'].indexOf(value) > -1;
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
    };
</script>
