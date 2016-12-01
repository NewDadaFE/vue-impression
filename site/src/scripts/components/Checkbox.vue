<template>
    <label
        class="checkbox"
        :class="'checkbox-' + type">
        <input
            type="checkbox"
            class="checkbox-input"
            :disabled="disabled"
            v-model="checked">
        <span class="checkbox-addon">
            <i class="fa fa-check" />
        </span>
        <span class="checkbox-label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name: 'checkbox',
        props: {
            value: {},
            disabled: Boolean,
            type: {
                type: String,
                default: 'square',
                validator(value) {
                    return ['square', 'circle'].indexOf(value) > -1;
                },
            },
        },
        data() {
            return {
                checked: !!this.value,
            };
        },
    };
</script>
