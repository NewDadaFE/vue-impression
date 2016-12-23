<template>
    <div
        class="segmented-control-item"
        :class="{
            'active': $parent.currentActiveKey === currentEventKey,
            disabled: disabled || $parent.disabled,
        }"
        @click="clickHandle">
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
