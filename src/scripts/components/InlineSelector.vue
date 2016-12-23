<template>
    <div class="inline-selector">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';
    import Select from '../mixins/select';

    export default {
        name: 'inline-selector',
        mixins: [Sync, Select],
        props: {
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'success', 'warning', 'danger'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
