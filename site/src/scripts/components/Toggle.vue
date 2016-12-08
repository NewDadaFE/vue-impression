<template>
    <label class="toggle">
        <input
            type="checkbox"
            @change="changeHandle"
            class="toggle-input"
            :disabled="disabled"
            v-model="currentValue">
        <span class="toggle-addon">
            <i />
        </span>
    </label>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'toggle',
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
