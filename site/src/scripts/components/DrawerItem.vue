<template>
    <div
        class="drawer-item"
        :class="{'active': $parent.currentActiveKey !== undefined && $parent.currentActiveKey === currentEventKey}"
        @click="$parent.$emit('itemClick', currentEventKey)">
        <slot></slot>
        <icon name="caret-down" class="drawer-item-icon"></icon>
    </div>
</template>

<script>
    import TabItem from '../mixins/tabItem';

    export default {
        name: 'drawer-item',
        mixins: [TabItem],
    };
</script>
