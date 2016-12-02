<template>
    <label class="toggle">
        <input
            type="checkbox"
            class="toggle-input"
            :disabled="disabled"
            v-model="checked">
        <span class="toggle-addon">
            <i />
        </span>
    </label>
</template>

<script>
    export default {
        name: 'toggle',
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
