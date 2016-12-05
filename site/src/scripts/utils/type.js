// 是否数组
export const isArray = array => {
    return Object.prototype.toString.call(array) === '[object Array]';
};
