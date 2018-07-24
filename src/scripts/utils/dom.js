/**
 * 判断一个元素是否为另一个的后代元素.
 * @param  {[Element]} ancestor     [祖先元素]
 * @param  {[Element]} descendent   [后代元素]
 * @return {[Boolean]}              [是否]
 */
export const contains = (ancestor, descendent) => {
    if(ancestor.compareDocumentPosition) {
        return ancestor === descendent || !!(ancestor.compareDocumentPosition(descendent) & 16);
    }

    if(ancestor.contains && descendent.nodeType === 1) {
        return ancestor.contains(descendent) && ancestor !== descendent;
    }

    let tmpDescendent = descendent;

    // 递归
    while(tmpDescendent !== document) {
        tmpDescendent = tmpDescendent.parentNode;

        if(tmpDescendent === ancestor) return true;
    }

    return false;
};

/**
 * 判断元素是否有滚动条.
 * @param  {[Element]} el [元素]
 * @return {[Boolean]}    [是否有滚动条]
 */
export const hasScrollbar = el => {
    if(!el) return false;

    return el.scrollHeight > el.offsetHeight;
};

/**
 * 返回具有滚动条的祖先元素.
 * @param  {[Element]} el [Dom元素]
 * @return {[Element]}    [祖先元素]
 */
export const getScrollContainer = el => {
    let tmpEl = el;

    while(tmpEl !== document) {
        tmpEl = tmpEl.parentNode;

        if(hasScrollbar(tmpEl)) return tmpEl;
    }

    return document;
};

/**
 * 返回布尔值.
 * @param  {[Element]} el [Dom元素]
 * @param  {[class]} cls [样式]
 * @return {[Boolean]}    [是否有class]
 */
export const hasClass = (el, cls) => {
    if(!el || !cls) return false;
    if(cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if(el.classList) {
        return el.classList.contains(cls);
    }
    /*eslint-disable*/
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    /*eslint-disable*/
};
