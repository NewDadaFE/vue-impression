import { contains } from '../utils/dom';

const disfavorContext = '@@disfavor';

// 失去焦点
export default {
    bind(el, binding, vnode) {
        const clickHandle = event => {
            if(vnode.context && !contains(el, event.target)) {
                el[disfavorContext].callback && vnode.context[el[disfavorContext].callback]();
            }
        };

        el[disfavorContext] = {
            clickHandle,
            callback: binding.expression,
        };

        document.addEventListener('click', clickHandle);
    },
    unbind(el) {
        let { clickHandle } = el[disfavorContext];

        document.removeEventListener('click', clickHandle);
    },
};

