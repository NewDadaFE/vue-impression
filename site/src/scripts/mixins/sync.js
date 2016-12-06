export default {
    props: {
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
};
