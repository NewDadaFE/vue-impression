import { contains } from '../utils/dom';

var disfavorContext = '@@disfavor';

export default {
    bind: function bind(el, binding, vnode) {
        var clickHandle = function clickHandle(event) {
            if (vnode.context && !contains(el, event.target)) {
                el[disfavorContext].callback && vnode.context[el[disfavorContext].callback]();
            }
        };

        el[disfavorContext] = {
            clickHandle: clickHandle,
            callback: binding.expression
        };

        document.addEventListener('click', clickHandle);
    },
    unbind: function unbind(el) {
        var clickHandle = el[disfavorContext].clickHandle;


        document.removeEventListener('click', clickHandle);
    }
};