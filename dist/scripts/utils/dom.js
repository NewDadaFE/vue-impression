
export var contains = function contains(ancestor, descendent) {
    if (ancestor.compareDocumentPosition) {
        return ancestor === descendent || !!(ancestor.compareDocumentPosition(descendent) & 16);
    }

    if (ancestor.contains && descendent.nodeType === 1) {
        return ancestor.contains(descendent) && ancestor !== descendent;
    }

    var tmpDescendent = descendent;

    while (tmpDescendent !== document) {
        tmpDescendent = tmpDescendent.parentNode;

        if (tmpDescendent === ancestor) return true;
    }

    return false;
};

export var hasScrollbar = function hasScrollbar(el) {
    if (!el) return false;

    return el.scrollHeight > el.offsetHeight;
};

export var getScrollContainer = function getScrollContainer(el) {
    var tmpEl = el;

    while (tmpEl !== document) {
        tmpEl = tmpEl.parentNode;

        if (hasScrollbar(tmpEl)) return tmpEl;
    }

    return document;
};

export var hasClass = function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }

    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
};