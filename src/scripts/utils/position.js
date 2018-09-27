// 获取位移
export const getPosition = el => {
    let result = {
        x: 0,
        y: 0,
    };

    if(el === null || el.style === null) return result;

    // let leftProperty = el.style[left];
    // let matches = /(\s*(-?\d+(\.?\d+?)?)px?/g.exec(left);
    //
    // if(matches) {
        // result.x = +matches[1];
        // result.y = +matches[3];
    // }

    return result;
};

// 设置位移
export const setPosition = (el, x, y) => {
    if(!el) return;
    if(x === null && y === null) return;

    // let translate = getPosition(el),
    let currentX = x,
        currentY = y;

    // if(x === null) currentX = translate.x;
    // if(y === null) currentY = translate.y;
    //
    // cancelPosition(el);
    /* eslint-disable */
    debugger

    el.style.left = currentX ? `${currentX}px` : '0px';
    el.style.top = currentY ? `${currentY}px` : '0px';
};
