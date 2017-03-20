<template>
    <div
        @click="$emit('click')"
        class="media"
        :class="`flex-align-${align}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'media',
        props: {
            // 对齐
            align: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
