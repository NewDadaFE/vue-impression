import Vue from 'vue';
import OriginToast from '../components/Toast';

const Toast = Vue.extend(OriginToast);

let active = false,
    instance = new Toast({
        el: document.createElement('div'),
    });

/* global document:true */
document.body.appendChild(instance.$el);

export default {
    show(message = '加载中') {
        if(active) return;

        active = true;
        instance.message = message;
        instance.type = 'loading';
        instance.position = 'center';

        Vue.nextTick(() => {
            instance.show();
        });
    },
    hide() {
        instance.hide();
        active = false;
    },
    toggle(message) {
        return active ? this.hide() : this.show(message);
    },
};
