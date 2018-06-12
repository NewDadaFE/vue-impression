import Picker from './Picker';
import DateRangeView from './DateRange';

const getView = function(type) {
    if(type === 'daterange') {
        return DateRangeView;
    }
    // other type view

    return null;
};

const DatePicker = {
    mixins: [Picker],

    name: 'date-picker',

    props: {
        type: {
            type: String,
            default: 'daterange',
        },
    },

    watch: {
        type(type) {
            if(this.picker) {
                this.unmountPicker();
                this.view = getView(type);
                this.mountPicker();
            } else {
                this.view = getView(type);
            }
        },
    },

    created() {
        this.view = getView(this.type);
    },
};

export default DatePicker;
