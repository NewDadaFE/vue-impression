import Vue from 'vue';
import OriginAlert from '../components/Alert';

const Alert = Vue.extend(OriginAlert);
let _active = false;

const alert = ({ title, message, btnText, onClose }) => {
    if(_active) return;

    /* global document:true */
    let alertInstance = new Alert({
        el: document.createElement('div'),
    });

    document.body.appendChild(alertInstance.$el);

    title && (alertInstance.title = title);
    message && (alertInstance.message = message);
    btnText && (alertInstance.btnText = btnText);
    onClose && (alertInstance.onClose = onClose);

    Vue.nextTick(() => {
        alertInstance.show();
    });
};

export default alert;
