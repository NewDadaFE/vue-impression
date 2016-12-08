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
                val = undefined;
            }

            this.$emit('input', val);
        },
    },
};
