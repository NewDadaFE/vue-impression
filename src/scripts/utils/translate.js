
export const getTranslate = el => {
    let result = {
        x: 0,
        y: 0,
    };

    if(el === null || el.style === null) return result;

    let transform = el.style.transform;
    let matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g.exec(transform);

    if(matches) {
        result.x = +matches[1];
        result.y = +matches[3];
    }

    return result;
};

export const cancelTranslate = el => {
    if(el === null || el.style === null) return;

    let transform = el.style.transform;

    if(transform) {
        transform = transform.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*(translateZ\(0px\))?/g, '');
        el.style.transform = transform;
    }
};

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

    el.style.transform += ` translate(${currentX ? `${currentX}px` : '0px'}, ${currentY ? `${currentY}px` : '0px'})`;
};

