<template>
    <div class="searchbar" :class="{active: focus}">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';
    import Blur from '../mixins/blur';

    export default {
        name: 'searchbar',
        mixins: [Sync, Blur],
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
        },
        data() {
            return {
                focus: false,
            };
        },
    };
</script>
