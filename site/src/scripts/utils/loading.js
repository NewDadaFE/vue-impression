import Vue from 'vue';
import OriginToast from '../components/Toast';

const Toast = Vue.extend(OriginToast);

let instance,
    active = false;

export default {
    show(message = '加载中') {
        if(active) return;

        /* global document:true */
        if(!instance) {
            instance = new Toast({
                el: document.createElement('div'),
            });

            document.body.appendChild(instance.$el);
        }

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
