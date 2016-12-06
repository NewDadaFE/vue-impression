<template>
    <div
        class="tabbar-item"
        :class="{'active': $parent.currentActiveKey === currentEventKey}"
        @click="$parent.$emit('itemClick', currentEventKey)">
        <slot></slot>
    </div>
</template>

<script>
    import TabItem from '../mixins/tabItem';

    export default {
        name: 'tabbar-item',
        mixins: [TabItem],
    };
</script>
