<template>
    <div
        class="navigation-item"
        :class="{'active': $parent.currentActiveKey === currentEventKey}"
        @click="$parent.$emit('itemClick', currentEventKey)">
        <slot></slot>
        <div class="navigation-item-label">
            {{label}}
        </div>
    </div>
</template>

<script>
    import TabItem from '../mixins/tabItem';

    export default {
        name: 'navigation-item',
        mixins: [TabItem],
        props: {
            label: String,
        },
    };
</script>
