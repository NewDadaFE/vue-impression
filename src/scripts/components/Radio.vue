<template>
    <label
        class="radio"
        :class="'radio-' + type">
        <input
            type="radio"
            class="radio-input"
            v-model="model"
            :value="isGroupChildComponent ? value : val"
            :disabled="disabled || $parent.disabled">
        <span class="radio-addon">
            <i :class="type==='square' ? 'fa fa-check' : ''"></i>
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
            type: {
                type: String,
                default: 'circle',
                validator(value) {
                    return ['square', 'circle'].indexOf(value) > -1;
                },
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
