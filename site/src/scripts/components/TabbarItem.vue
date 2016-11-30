<template>
    <div
        class="tabbar-item"
        :class="{'active': $parent.value === value}"
        @click="$parent.$emit('input', value)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tabbar-item',
        props: ['value'],
    };
</script>
