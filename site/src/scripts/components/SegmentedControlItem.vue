<template>
    <div
        class="segmented-control-item"
        :class="{'active': $parent.currentActiveKey === currentEventKey}"
        @click="$parent.$emit('itemClick', currentEventKey)">
        <slot></slot>
    </div>
</template>

<script>
    import TabItem from '../mixins/tabItem';

    export default {
        name: 'segmented-control-item',
        mixins: [TabItem],
    };
</script>
