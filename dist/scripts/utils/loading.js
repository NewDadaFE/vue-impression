import Vue from 'vue';
import OriginToast from '../components/Toast';

var Toast = Vue.extend(OriginToast);

var instance = void 0,
    active = false;

export default {
    show: function show() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

        if (active) return;

        if (!instance) {
            instance = new Toast({
                el: document.createElement('div')
            });

            document.body.appendChild(instance.$el);
        }

        active = true;
        instance.message = message;
        instance.type = 'loading';
        instance.position = 'center';

        Vue.nextTick(function () {
            instance.show();
        });
    },
    hide: function hide() {
        instance.hide();
        active = false;
    },
    toggle: function toggle(message) {
        return active ? this.hide() : this.show(message);
    }
};