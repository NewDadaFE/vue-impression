export default {
    props: {
        value: {},
        checkedIcon: {
            type: String,
            default: 'check',
        },
        disabled: Boolean,
    },
    methods: {
        clickHandle() {
            if(this.disabled) return;

            this.$parent.$emit.apply(this.$parent, ['optionClick'].concat(this));
        },
        isActive() {
            if(this.$parent.multiple) {
                return this.$parent.currentValue &&
                this.$parent.currentValue.indexOf(this.value) !== -1;
            }

            return this.$parent.currentValue === this.value;
        },
    },
};
