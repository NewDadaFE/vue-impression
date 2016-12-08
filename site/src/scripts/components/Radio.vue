<template>
    <label class="radio">
        <input
            type="radio"
            class="radio-input"
            :disabled="disabled"
            :checked="isGroup ? checked : currentValue"
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

            if(this.isGroup) {
                currentValue = this.$parent.value === this.value;
            } else {
                currentValue = this.value;
            }

            return { currentValue };
        },
        computed: {
            isGroup() {
                return this.$parent.$options._componentTag === 'radio-group';
            },
            checked() {
                return this.$parent.value === this.value;
            },
        },
        methods: {
            changeHandle() {
                if(this.isGroup) {
                    this.$parent.$emit('optionChecked', this.value);
                }
            },
        },
    };
</script>
