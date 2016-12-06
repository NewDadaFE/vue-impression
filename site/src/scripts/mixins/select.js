export default {
    props: {
        disabled: Boolean,
        multiple: Boolean,
    },
    methods: {
        optionClickHandle(option) {
            if(this.disabled || this.currentValue === option.value) return;

            if(this.multiple) {
                let index = this.currentValue.indexOf(option.value);

                if(index === -1) {
                    this.currentValue.push(option.value);
                } else {
                    this.currentValue.splice(index, 1);
                }

                this.$emit('change', this.currentValue);
                return;
            }

            this.currentValue = option.value;
            this.$emit('change', this.currentValue);
        },
    },
    created() {
        this.$on('optionClick', this.optionClickHandle);
    },
};
