<template>
    <div class="navigation">
        <slot></slot>
    </div>
</template>

<script>
    import Tab from '../mixins/tab';

    export default {
        name: 'navigation',
        mixins: [Tab],
        props: {
            activeKey: {
                default: 0,
            },
        },
    };
</script>
