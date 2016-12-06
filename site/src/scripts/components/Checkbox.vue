<template>
    <label
        class="checkbox"
        :class="'checkbox-' + type">
        <input
            type="checkbox"
            class="checkbox-input"
            :disabled="disabled"
            v-model="currentValue">
        <span class="checkbox-addon">
            <i class="fa fa-check" />
        </span>
        <span class="checkbox-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'checkbox',
        mixins: [Sync],
        props: {
            disabled: Boolean,
            type: {
                type: String,
                default: 'square',
                validator(value) {
                    return ['square', 'circle'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
