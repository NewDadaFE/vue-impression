<template>
    <span class="tag" :class="{
        ['tag-' + theme]: !outline,
        ['tag-outline-' + theme]: outline,
    }">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'tag',
        props: {
            outline: Boolean,
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
