import Vue from 'vue';
import OriginToast from '../components/Toast';

var Toast = Vue.extend(OriginToast);

var toastCache = {
    cache: [],
    active: false,
    pop: function pop() {
        if (this.cache.length) return this.cache.splice(0, 1)[0];

        return new Toast({
            el: document.createElement('div')
        });
    },
    push: function push(instance) {
        this.cache.push(instance);
    },
    toggle: function toggle() {
        this.active = !this.active;
    }
};

Toast.prototype.show = function () {
    this.currentValue = true;
    toastCache.active = true;
};

Toast.prototype.hide = function () {
    this.currentValue = false;
    toastCache.active = false;
};

var toastUtil = function toastUtil() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (toastCache.active) return;

    var duration = options.duration || 2000,
        instance = toastCache.pop();

    instance.message = typeof options === 'string' ? options : options.message;
    instance.type = options.type || '';
    instance.position = options.position || 'bottom';

    document.body.appendChild(instance.$el);

    instance.show();
    instance.timer = setTimeout(function () {
        instance.hide();

        toastCache.push(instance);
    }, duration);
};

export default toastUtil;