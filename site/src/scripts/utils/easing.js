// easeInOut
export const easeInOutCubic = (time, offset, end, duration) => {
    const cc = end - offset;
    time /= duration / 2;

    if(time < 1) {
        return (cc / 2 * time * time * time) + offset;
    }

    return (cc / 2 * (((time -= 2) * time * time) + 2)) + offset;
};
