<template>
    <div class="input-number" :class="{'input-number-disabled': disabled}">
        <a
            class="input-number-minus"
            :class="{'disabled': currentValue <= min}"
            @click="minusHandle">-</a>
        <span class="input-number-input">{{currentValue}}</span>
        <a
            class="input-number-plus"
            :class="{'disabled': currentValue >= max}"
            @click="plusHandle">
            +
        </a>
    </div>
</template>

<script>
    export default {
        name: 'input-number',
        props: {
            disabled: Boolean,
            value: {
                type: Number,
                default: 0,
            },
            max: {
                type: Number,
                default: Infinity,
            },
            min: {
                type: Number,
                default: -Infinity,
            },
            step: {
                type: Number,
                default: 1,
            },
        },
        data() {
            return {
                currentValue: this.value,
            };
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            },
        },
        methods: {
            // 减
            minusHandle() {
                if(this.disabled || this.currentValue <= this.min) return;

                this.currentValue -= this.step;
                this.$emit('change', this.currentValue);
            },
            // 加
            plusHandle() {
                if(this.disabled || this.currentValue >= this.max) return;

                this.currentValue += this.step;
                this.$emit('change', this.currentValue);
            },
        },
    };
</script>
