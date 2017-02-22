<template>
    <div class="stepbar">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'stepbar',
        mixins: [Sync],
        props: {
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
