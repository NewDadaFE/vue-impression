import Picker from './Picker';
import DateRangeView from './DateRange';

var getView = function getView(type) {
    if (type === 'daterange') {
        return DateRangeView;
    }


    return null;
};

var DatePicker = {
    mixins: [Picker],

    name: 'date-picker',

    props: {
        type: {
            type: String,
            default: 'daterange'
        }
    },

    watch: {
        type: function type(_type) {
            if (this.picker) {
                this.unmountPicker();
                this.view = getView(_type);
                this.mountPicker();
            } else {
                this.view = getView(_type);
            }
        }
    },

    created: function created() {
        this.view = getView(this.type);
    }
};

export default DatePicker;