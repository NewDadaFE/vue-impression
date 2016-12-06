<template>
    <span class="tag" :class="{
        ['tag-' + theme]: !outline,
        ['tag-outline-' + theme]: outline,
        ['tag-' + size]: size,
    }">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'tag',
        props: {
            outline: Boolean,
            size: {
                type: String,
                validator(value) {
                    return ['sm'].indexOf(value) > -1;
                },
            },
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'default', 'success', 'warning', 'danger'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
