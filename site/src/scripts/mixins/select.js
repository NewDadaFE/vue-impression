export default {
    props: {
        disabled: Boolean,
        multiple: Boolean,
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
