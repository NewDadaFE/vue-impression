export default {
    props: {
        multiple: Boolean
    },
    data: function data() {
        return {
            currentText: {}
        };
    },

    methods: {
        optionClickHandle: function optionClickHandle(option) {
            if (this.disabled || this.currentValue === option.value) return;

            if (this.multiple) {
                this.currentValue = this.currentValue || [];
                var index = this.currentValue.indexOf(option.value);

                if (index === -1) {
                    this.currentValue.push(option.value);
                } else {
                    this.currentValue.splice(index, 1);
                }

                return;
            }

            this.currentText = option.$el.innerText.trim();
            this.currentValue = option.value;
        }
    },
    created: function created() {
        this.$on('optionClick', this.optionClickHandle);
    }
};