<template>
    <label class="radio">
        <input
            type="radio"
            class="radio-input"
            :disabled="disabled"
            :checked="checked">
        <span class="radio-addon">
            <i></i>
        </span>
        <span class="radio-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'radio',
        props: {
            value: {},
            disabled: Boolean,
        },
        data() {
            return {
                checked: this.value,
            };
        },
    };
</script>
