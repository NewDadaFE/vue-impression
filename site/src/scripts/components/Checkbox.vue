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
        data() {
            let currentValue;

            if(this.$parent.$options._componentTag === 'checkbox-group') {
                currentValue = this.$parent.currentValue.indexOf(this.value) > -1;
            } else {
                currentValue = this.value;
            }

            return { currentValue };
        },
        watch: {
            currentValue(val) {
                if(this.$parent.$options._componentTag === 'checkbox-group') {
                    this.$parent.$emit('optionChecked', this.value);
                }

                this.$emit('input', val);
            },
        },
    };
</script>
