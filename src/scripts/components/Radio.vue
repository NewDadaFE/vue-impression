<template>
    <label
        class="radio"
        :class="'radio-' + shape">
        <input
            type="radio"
            class="radio-input"
            v-model="model"
            :value="isGroupChildComponent ? value : val"
            :disabled="disabled || $parent.disabled">
        <span class="radio-addon">
            <i v-if="shape==='default'" />
            <i v-else class="fa fa-check" />
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
            shape: {
                type: String,
                default: 'default',
                validator(value) {
                    return ['square', 'circle', 'default'].indexOf(value) > -1;
                },
            },
            value: {},
            val: {},
            disabled: {
                type: Boolean,
                default: false,
            },
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
