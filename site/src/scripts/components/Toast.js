import Vue from 'vue';
import ToastComponent from './_Toast';


const ToastProgressed = Vue.extend(ToastComponent);

/* global document:true */
const Toast = (options = {}) => {
    const instance = new ToastProgressed({
        el: document.createElement('div'),
    });

    instance.message = typeof options === 'string' ? options : options.message;

    if(options.type) {
        instance.type = options.type;
    }

    document.body.appendChild(instance.$el);
};

export default Toast;
