let engine;
let docStyle = document.documentElement.style;

if('MozAppearance' in docStyle) {
    engine = 'gecko';
} else if('WebkitAppearance' in docStyle) {
    engine = 'webkit';
} else if(typeof navigator.cpuClass === 'string') {
    engine = 'trident';
}

export const vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit' }[engine];
export const cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

export const getPrefixStyle = (name, value) => {
    let namePrefix = `${cssPrefix}${name}`;

    return `${namePrefix} ${value}`;
};
