<template>
    <div
        class="picker-list-item"
        :class="{active: $parent.currentValue === value}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'picker-option',
        props: {
            value: {},
        },
    };
</script>
