import Vue from 'vue';
import OriginAlert from '../components/Alert';

const Alert = Vue.extend(OriginAlert);

// Alert框
export const alert = option => {
    option.title = option.title || '提示';

    let alertInstance = new Alert({
        el: document.createElement('div'),
    });

    document.body.appendChild(alertInstance.$el);

    Object.assign(alertInstance, option);

    Vue.nextTick(() => {
        alertInstance.show();
    });
};
