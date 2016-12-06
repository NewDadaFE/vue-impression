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
            if(this.disabled) return;

            this.$parent.$emit.apply(this.$parent, ['optionClick'].concat(this));
        },
        isActive() {
            if(this.$parent.multiple) {
                return this.$parent.currentValue.indexOf(this.value) !== -1;
            }

            return this.$parent.currentValue === this.value;
        },
    },
};
