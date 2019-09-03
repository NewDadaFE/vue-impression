
export var easeInOutCubic = function easeInOutCubic(time, offset, end, duration) {
    var cc = end - offset,
        tempTime = time / (duration / 2);

    if (tempTime < 1) {
        return cc / 2 * tempTime * tempTime * tempTime + offset;
    }

    return cc / 2 * ((tempTime -= 2) * tempTime * tempTime + 2) + offset;
};