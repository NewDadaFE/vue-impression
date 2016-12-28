<template>
    <label class="radio">
        <input
            type="radio"
            class="radio-input"
            v-model="model"
            :value="isGroupChildComponent ? value : val"
            :disabled="disabled || $parent.disabled">
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
            val: {},
            disabled: Boolean,
        },
        computed: {
            model: {
                get() {
                    return this.isGroupChildComponent ? this.$parent.value : this.value;
                },
                set(val) {
                    if(this.isGroupChildComponent) {
                        this.$parent.$emit('input', val);
                    } else {
                        this.$emit('input', val);
                    }
                },
            },
        },
        beforeCreate() {
            this.isGroupChildComponent = this.$parent.$options._componentTag === 'radio-group';
        },
    };
</script>
