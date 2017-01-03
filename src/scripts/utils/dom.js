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
