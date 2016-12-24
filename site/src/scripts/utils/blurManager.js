import { isDescendentNode } from './dom';

/* global document:true */
const init = () => {
    let bodyClick = document.body.onclick,
        popLayers = document.body.popLayers = [];

    document.body.onclick = event => {
        bodyClick && bodyClick(event);

        popLayers.forEach(component => {
            const componentDom = component.$el;

            if((event.path && event.path.indexOf(componentDom) === -1) ||
                !isDescendentNode(componentDom, event.target)) {
                component.focus = false;
                component.blurHandle && component.blurHandle();
            }
        });
    };
};

init();

// 管理
export const manager = component => {
    document.body.popLayers.push(component);
};

// 取消管理
export const unmanager = component => {
    document.body.popLayers = document.body.popLayers.filter(item => item !== component);
};
