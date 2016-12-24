<template>
    <label
        class="checkbox"
        :class="'checkbox-' + type">
        <input
            type="checkbox"
            class="checkbox-input"
            :disabled="disabled || $parent.disabled"
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

            if(this.isGroupChildComponent) {
                currentValue = this.$parent.currentValue &&
                    this.$parent.currentValue.indexOf(this.value) > -1;
            } else {
                currentValue = this.value;
            }

            return { currentValue };
        },
        watch: {
            currentValue(val) {
                if(this.isGroupChildComponent) {
                    this.$parent.$emit('optionChecked', this.value);
                }

                this.$emit('input', val);
            },
        },
        beforeCreate() {
            // 是否CheckboxGroup下的子组件
            this.isGroupChildComponent = this.$parent.$options._componentTag === 'checkbox-group';
        },
    };
</script>
