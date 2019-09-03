var engine = void 0;
var docStyle = document.documentElement.style;

if ('MozAppearance' in docStyle) {
    engine = 'gecko';
} else if ('WebkitAppearance' in docStyle) {
    engine = 'webkit';
} else if (typeof navigator.cpuClass === 'string') {
    engine = 'trident';
}

export var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit' }[engine];
export var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

export var getPrefixStyle = function getPrefixStyle(name, value) {
    var namePrefix = '' + cssPrefix + name;

    return namePrefix + ' ' + value;
};