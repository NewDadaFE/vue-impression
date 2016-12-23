<template>
    <div class="segmented-control" :class="{disabled}">
        <slot></slot>
    </div>
</template>

<script>
    import Tab from '../mixins/tab';

    export default {
        name: 'segmented-control',
        mixins: [Tab],
        props: {
            activeKey: {
                default: 0,
            },
        },
    };
</script>
