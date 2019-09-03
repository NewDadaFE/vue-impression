import _extends from 'babel-runtime/helpers/extends';
import Vue from 'vue';
import OriginAlert from '../components/Alert';

var Alert = Vue.extend(OriginAlert);
var alertInstance = void 0;

export var alert = function alert(option) {
    option.title = option.title || '提示';

    alertInstance = new Alert({
        el: document.createElement('div')
    });

    document.body.appendChild(alertInstance.$el);

    _extends(alertInstance, option);

    Vue.nextTick(function () {
        alertInstance.show();
    });

    return alertInstance;
};

alert.hide = function () {
    alertInstance.hide();
};