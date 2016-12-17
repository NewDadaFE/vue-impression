
/**
 * 判断一个元素是否为另一个的后代元素.
 * @param  {[Element]} ancestor     [祖先元素]
 * @param  {[Element]} descendent   [后代元素]
 * @return {[Boolean]}              [是否]
 */
const isDescendentNode = (ancestor, descendent) => {
    let parentNode = descendent.parentNode;

    while(parentNode) {
        if(ancestor === parentNode) {
            return true;
        }
        parentNode = parentNode.parentNode;
    }
    return false;
};

/* global document:true */
const init = () => {
    const bodyClick = document.body.onclick;

    document.body.popLayers = [];
    document.body.onclick = event => {
        bodyClick && bodyClick(event);

        document.body.popLayers.forEach(component => {
            const componentDom = component.$el;

            // 兼容Chrome、FF、Safari
            if((event.path && event.path.indexOf(componentDom) === -1)
                || !isDescendentNode(componentDom, event.target)) {
                component.focus = false;
            }
        });
    };
};

init();

/**
 * 管理弹出层组件.
 * @param  {[Component]} component  [组件]
 */
export const manager = component => {
    document.body.popLayers.push(component);
};

/**
 * 取消弹出层组件管理.
 * @param  {[Component]} component [组件]
 */
export const unmanager = component => {
    document.body.popLayers = document.body.popLayers.filter(item => item !== component);
};
