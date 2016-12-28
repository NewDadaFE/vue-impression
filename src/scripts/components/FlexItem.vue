<template>
    <div
        @click="$emit('click')"
        class="flex-item"
        :style="{
            flex: flex !== 1 ? flex : null,
        }">
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
