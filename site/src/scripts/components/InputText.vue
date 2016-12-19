<template>
    <div class="input-text">
        <input
            type="text"
            v-model="currentValue"
            :disabled="currentDisabled"
            :placeholder="placeholder"
            @focus="focus = true"
            class="input-text-input">
        <icon
            v-show="clearable && focus && !!currentValue"
            class="input-text-clear"
            name="times-circle"
            @click="clearHandle"
            size="lg" />
        <icon
            v-if="state"
            :name="getStateIcon()"
            :class="getStateClass()"
            size="lg" />
    </div>
</template>

<script>
    import Blur from '../mixins/blur';

    export default {
        name: 'input-text',
        mixins: [Blur],
        props: {
            disabled: Boolean,
            clearable: Boolean,
            placeholder: String,
            value: {},
            type: {
                type: String,
                default: 'text',
            },
            state: {
                type: String,
                validator(value) {
                    return ['success', 'warning', 'error'].indexOf(value) > -1;
                },
            },

        },
        data() {
            return {
                focus: false,
                currentValue: this.value || '',
                currentDisabled: this.disabled || this.$parent.disabled,
            };
        },
        methods: {
            clearHandle() {
                if(!this.currentDisabled) this.currentValue = '';
            },
            getStateClass() {
                return {
                    success: 'text-success',
                    warning: 'text-warning',
                    error: 'text-danger',
                }[this.state];
            },
            getStateIcon() {
                return {
                    success: 'check',
                    warning: 'exclamation-triangle',
                    error: 'exclamation-circle',
                }[this.state];
            },
        },
    };
</script>
