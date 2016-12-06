var CONFIRM_TEXT = '确定';
var CANCEL_TEXT = '取消';

var defaults = {
  title: '提示',
  message: '',
  type: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
  confirmButtonClass: '',
  cancelButtonClass: ''
};

import Vue from 'vue';
import Alert from '../components/Alert.vue';

var merge = function(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

var AlertConstructor = Vue.extend(Alert);

var currentMsg, instance;
var msgQueue = [];

const defaultCallback = action => {
  if (currentMsg) {
    var callback = currentMsg.callback;
    if (typeof callback === 'function') {
        callback(action);
    }
    if (currentMsg.resolve) {
        if (action === 'confirm') {
            currentMsg.resolve(action);
        } else if (action === 'cancel' && currentMsg.reject) {
          currentMsg.reject(action);
        }
    }
  }
};

var initInstance = function() {
    instance = new AlertConstructor({
        el: document.createElement('div')
    });

    instance.callback = defaultCallback;
};

var showNextMsg = function() {
    if (!instance) {
      initInstance();
    }

  if (!instance.value) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      var options = currentMsg.options;
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
    if (options.callback === undefined) {
        instance.callback = defaultCallback;
    }

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
        instance.value = true;
    });
    }
  }
};

var alertUtil = function(options, callback) {
  if (typeof options === 'string') {
    options = {
      title: options
    };
    if (arguments[1]) {
      options.message = arguments[1];
    }
    if (arguments[2]) {
      options.type = arguments[2];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function(resolve, reject) { // eslint-disable-line
      msgQueue.push({
        options: merge({}, defaults, alertUtil.defaults || {}, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });

      showNextMsg();
    });
  } else {
    msgQueue.push({
      options: merge({}, defaults, alertUtil.defaults || {}, options),
      callback: callback
    });

    showNextMsg();
  }
};
//
alertUtil.setDefaults = function(defaults) {
  alertUtil.defaults = defaults;
};

alertUtil.msg = function(message, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return alertUtil(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

alertUtil.confirm = function(message, title, options) {
  if (typeof title === 'object') {
    options = title;
    title = '';
  }
  return alertUtil(merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

export default alertUtil;
export { alertUtil };
