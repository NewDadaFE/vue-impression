<template>
    <div class="searchbar" :class="{active: focus}" v-disfavor="blur">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'searchbar',
        mixins: [Sync],
        props: {
            clearable: {
                type: Boolean,
                default: true,
            },
            shape: {
                type: String,
                validator(value) {
                    return ['circle'].indexOf(value) > -1;
                },
            },
            autoBlur: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                focus: false,
            };
        },
        methods: {
            blur() {
                this.autoBlur && (this.focus = false);
            },
        },
    };
</script>
