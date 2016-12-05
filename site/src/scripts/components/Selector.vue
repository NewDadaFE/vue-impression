<template>
    <div class="group">
        <slot></slot>
    </div>
</template>

<script>
    import * as typeUtils from '../utils/type';

    export default {
        name: 'selector',
        props: {
            disabled: Boolean,
            multiple: Boolean,
            value: {},
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
            optionClickHandle(option) {
                if(this.disabled) return;

                if(this.multiple) {
                    let index = this.currentValue.indexOf(option.value);

                    if(index === -1) {
                        this.currentValue.push(option.value);
                    } else {
                        this.currentValue.splice(index, 1);
                    }

                    return;
                }

                this.currentValue = option.value;
            },
        },
        created() {
            this.$on('optionClick', this.optionClickHandle);
        },
    };
</script>
