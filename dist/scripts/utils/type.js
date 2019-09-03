
export var isArray = function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
};