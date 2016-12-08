<template>
    <label class="radio">
        <input
            type="radio"
            class="radio-input"
            @change="changeHandle"
            :disabled="disabled"
            :checked="currentValue">
        <span class="radio-addon">
            <i></i>
        </span>
        <span class="radio-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'radio',
        mixins: [Sync],
        props: {
            disabled: Boolean,
        },
        methods: {
            changeHandle(event) {
                this.$emit('change', event);
            },
        },
    };
</script>
