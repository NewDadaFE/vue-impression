import Vue from 'vue';
import OriginAlert from '../components/Alert';

const Alert = Vue.extend(OriginAlert);
let alertInstance;

// Alert框
export const alert = option => {
    option.title = option.title || '提示';

    alertInstance = new Alert({
        el: document.createElement('div'),
    });

    document.body.appendChild(alertInstance.$el);

    alertInstance = {
        ...alertInstance,
        ...option,
    };

    Vue.nextTick(() => {
        alertInstance.show();
    });

    return alertInstance;
};

alert.hide = () => {
    alertInstance.hide();
};
