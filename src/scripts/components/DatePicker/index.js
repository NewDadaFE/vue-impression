import Picker from './Picker';
// import DateView from './Date';
import DateRangeView from './DateRange';

const getView = function(type) {
  if (type === 'daterange') {
    return DateRangeView;
  }
  // return DateView;
};

const DatePicker = {
  mixins: [Picker],

  name: 'date-picker',

  props: {
    type: {
      type: String,
      default: 'daterange'
    },
  },

  watch: {
    type(type) {
      if (this.picker) {
        this.unmountPicker();
        this.view = getView(type);
        this.mountPicker();
      } else {
        this.view = getView(type);
      }
    }
  },

  created() {
    this.view = getView(this.type);
  },
};

// DatePicker.install = function install(Vue) {
//   Vue.component(DatePicker.name, DatePicker);
// };

export default DatePicker;
