<template>
    <label class="radio">
        <input
            type="radio"
            class="radio-input"
            :disabled="disabled"
            :checked="isGroupChildComponent ? isChecked : currentValue"
            @change="changeHandle">
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
        data() {
            let currentValue;

            if(this.isGroupChildComponent) {
                currentValue = this.$parent.currentValue === this.value;
            } else {
                currentValue = this.value;
            }

            return { currentValue };
        },
        computed: {
            isChecked() {
                return this.$parent.currentValue === this.value;
            },
        },
        methods: {
            changeHandle(event) {
                if(this.isGroupChildComponent) {
                    this.$parent.$emit('optionChecked', this.value);
                }

                this.$emit('change', event);
            },
        },
        beforeCreate() {
            this.isGroupChildComponent = this.$parent.$options._componentTag === 'radio-group';
        },
    };
</script>
