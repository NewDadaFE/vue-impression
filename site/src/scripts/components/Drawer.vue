<template>
    <div class="drawer" :class="{disabled}">
        <slot></slot>
    </div>
</template>

<script>
    import Tab from '../mixins/tab';

    export default {
        name: 'drawer',
        mixins: [Tab],
        methods: {
            reset() {
                this.currentActiveKey = undefined;
            },
        },
    };
</script>
