export default {
    props: {
        checkedIcon: {
            type: String,
            default: 'check',
        },
        value: {},
    },
    methods: {
        clickHandle() {
            this.dispatch('selector', 'optionClick', this);
        },
        isActive() {
            if(this.$parent.multiple) {
                return this.$parent.currentValue.indexOf(this.value) !== -1;
            }

            return this.$parent.currentValue === this.value;
        },
    },
};
