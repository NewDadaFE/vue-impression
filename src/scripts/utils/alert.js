import Vue from 'vue';
import OriginAlert from '../components/Alert';

const Alert = Vue.extend(OriginAlert);
let _active = false;

// 确认选择框
export const confirm = option => {
    if(_active) return;

    /* global document:true */
    let alertInstance = new Alert({
        el: document.createElement('div'),
    });

    document.body.appendChild(alertInstance.$el);

    Object.assign(alertInstance, option);

    Vue.nextTick(() => {
        alertInstance.show();
    });
};

// Alert框
export const alert = option => {
    option.title = option.title || '提示';
    option.type = 'alert';
    option.onClose && (option.onOkClick = option.onClose);

    confirm(option);
};
