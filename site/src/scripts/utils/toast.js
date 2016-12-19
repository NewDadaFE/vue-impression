import Vue from 'vue';
import OriginToast from '../components/Toast';

const Toast = Vue.extend(OriginToast);

// toast缓存池
const toastCache = {
    cache: [],
    active: false,
    pop() {
        if(this.cache.length) {
            return this.cache.splice(0, 1)[0];
        }

        return new Toast({
            el: document.createElement('div'),
        });
    },
    push(instance) {
        this.cache.push(instance);
    },
    toggle() {
        this.active = !this.active;
    },
};

Toast.prototype.show = Toast.prototype.hide = function() {
    this.currentValue = !this.currentValue;
    toastCache.toggle();
};

/* global document:true */
const toastUtil = (options = {}) => {
    if(toastCache.active) return;

    let duration = options.duration || 2000,
        instance = toastCache.pop();

    instance.message = typeof options === 'string' ? options : options.message;
    instance.type = options.type || '';
    instance.position = options.position || 'bottom';

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
        instance.show();

        instance.timer = setTimeout(() => {
            instance.hide();

            toastCache.push(instance);
        }, duration);
    });
};

export default toastUtil;
