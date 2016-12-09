import { isArray } from '../utils/type';

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
            if(isArray(val) && val.length === 0) {
                this.currentValue = undefined;
                return;
            }

            this.$emit('input', val);
            this.$emit('change', val);
        },
    },
};
