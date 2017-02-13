import { vendorPrefix } from './cssPrefix';

let transformProperty = `${vendorPrefix}Transform`;

// 获取位移
export const getTranslate = el => {
    let result = {
        x: 0,
        y: 0,
    };

    if(el === null || el.style === null) return result;

    let transform = el.style[transformProperty];
    let matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g.exec(transform);

    if(matches) {
        result.x = +matches[1];
        result.y = +matches[3];
    }

    return result;
};

// 取消位移
export const cancelTranslate = el => {
    if(el === null || el.style === null) return;

    let transform = el.style[transformProperty];

    if(transform) {
        transform = transform.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g, '');
        el.style[transformProperty] = transform;
    }
};

// 设置位移
export const setTranslate = (el, x, y) => {
    if(!el) return;
    if(x === null && y === null) return;
    // if(!el.style.transform && !x && !y) return;

    let translate = getTranslate(el),
        currentX = x,
        currentY = y;

    if(x === null) currentX = translate.x;
    if(y === null) currentY = translate.y;

    cancelTranslate(el);

    el.style[transformProperty] += ` translate(${currentX ? `${currentX}px` : '0px'}, ${currentY ? `${currentY}px` : '0px'})`;
};

