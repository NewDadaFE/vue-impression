<template>
    <div class="flex-item" :style="{flex}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'flex-item',
        props: {
            flex: {
                type: [Number, String],
                default: 1,
            },
        },
    };
</script>
