/**
 * 判断一个元素是否为另一个的后代元素.
 * @param  {[Element]} ancestor     [祖先元素]
 * @param  {[Element]} descendent   [后代元素]
 * @return {[Boolean]}              [是否]
 */
export const isDescendentNode = (ancestor, descendent) => {
    let parentNode = descendent.parentNode;

    while(parentNode) {
        if(ancestor === parentNode) {
            return true;
        }
        parentNode = parentNode.parentNode;
    }
    return false;
};
