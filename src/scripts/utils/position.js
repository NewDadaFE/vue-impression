// 获取位移
export const getPosition = el => {
    let result = {
        x: 0,
        y: 0,
    };

    if(el === null || el.style === null) return result;

    /* eslint-disable */
    // debugger

    const leftProperty = el.style.left,
        topProperty = el.style.top,
        matchesLeft = /(\d+(\.?\d+?)?)px/g.exec(leftProperty),
        matchesTop = /(\d+(\.?\d+?)?)px/g.exec(topProperty);

    // /* eslint-disable */
    // debugger
    if(matchesLeft) {
        result.x = matchesLeft[1];
    }

    if(matchesTop) {
        result.y = matchesTop[1];
    }

    return result;
};

// 设置位移
export const setPosition = (el, x, y) => {
    if(!el) return;
    if(x === null && y === null) return;

    const currentPosition = getPosition(el),
        rollX = x,
        rollY = y;

    console.log(currentPosition);
    // cancelPosition(el);
    /* eslint-disable */
    // debugger

    el.style.left = rollX ? `${Number(currentPosition.x) + Number(rollX)}px` : '0px';
    el.style.top = rollY ? `${Number(currentPosition.y) + Number(rollY)}px` : '0px';
};
