export default {
    props: {
        multiple: Boolean,
    },
    methods: {
        optionClickHandle(option) {
            if(this.disabled || this.currentValue === option.value) return;

            if(this.multiple) {
                this.currentValue = this.currentValue || [];
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
