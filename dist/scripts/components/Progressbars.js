

var __vue_script__ = {
    name: 'progressbars',
    data: function data() {
        return {
            circleWidth: 0.8
        };
    },

    props: {
        nodeDataList: {
            type: Array,
            default: [0, 10, 50],
            required: true,
            validator: function validator(value) {
                return value && value.length >= 2;
            }
        },

        currentData: {
            type: Number,
            default: 0,
            required: true
        },

        nodeInfoList: {
            type: Array,
            default: null
        },

        theme: {
            type: String,
            default: 'primary',
            validator: function validator(value) {
                return ['primary', 'success', 'warning', 'danger'].indexOf(value) > -1;
            }
        },

        size: {
            type: String,
            default: 'sm',
            validator: function validator(value) {
                return ['xsm', 'sm', 'lg'].indexOf(value) > -1;
            }
        },

        nodeShape: {
            type: String,
            default: 'dot',
            validator: function validator(value) {
                return ['circle', 'dot', 'checkCircle'].indexOf(value) > -1;
            }
        },

        backgroundColor: {
            type: String,
            default: '#DEE0E8'
        },

        foregroundColor: {
            type: String,
            default: '#1C89EA'
        }
    },
    computed: {
        nodesLength: function nodesLength() {
            return this.nodeDataList.length;
        },

        progressWidth: function progressWidth() {
            if (this.currentDotIndex === this.nodesLength - 1) {
                return '100%';
            }

            var currentAreaPercent = (this.currentData - this.nodeDataList[this.currentDotIndex]) / (this.nodeDataList[this.currentDotIndex + 1] - this.nodeDataList[this.currentDotIndex]);
            var part1 = '(100% - ' + this.nodesLength * this.circleWidth + 'em)';
            var part2 = '' + (this.nodesLength - 1);
            var part3 = '' + (this.currentDotIndex + currentAreaPercent);
            var part4 = (this.currentDotIndex + 1) * this.circleWidth + 'em';

            return 'calc(' + part1 + ' / ' + part2 + ' * ' + part3 + ' + ' + part4 + ')';
        },
        currentDotIndex: function currentDotIndex() {
            var currentDotIndex = 0;

            for (var i = 0; i < this.nodeDataList.length; i++) {
                if (i === this.nodeDataList.length - 1) {
                    if (this.currentData >= this.nodeDataList[i]) {
                        currentDotIndex = i;
                    }
                } else {
                    if (this.currentData >= this.nodeDataList[i] && this.currentData < this.nodeDataList[i + 1]) {
                        currentDotIndex = i;
                        break;
                    }
                }
            }

            return currentDotIndex;
        }
    },
    methods: {
        getNodeClass: function getNodeClass(index) {
            var nodeClass = 'node ';

            if (this.nodeShape === 'dot') {
                nodeClass += 'dot ';
            } else if (this.nodeShape === 'circle') {
                nodeClass += 'circle ';
            } else if (this.nodeShape === 'checkCircle') {
                nodeClass += 'check-circle ';
            }

            if (index <= this.currentDotIndex) {
                nodeClass += 'active ';
            }
            if (index === this.currentDotIndex) {
                nodeClass += 'current-dot ';
            }

            return nodeClass;
        },
        getNodeStyle: function getNodeStyle(index) {
            var nodeStyle = '';

            if (this.nodeShape === 'dot') {
                nodeStyle = 'border-color: ';
            } else if (this.nodeShape === 'circle') {
                nodeStyle = 'background-color: ';
            } else if (this.nodeShape === 'checkCircle') {
                nodeStyle = 'background-color: ';
            }

            if (index <= this.currentDotIndex) {
                nodeStyle += this.foregroundColor + ';';
            } else {
                nodeStyle += this.backgroundColor + ';';
            }

            return this.getCirclePosition(index) + ' ' + nodeStyle;
        },
        getCirclePosition: function getCirclePosition(index) {
            return 'left: calc((100% - ' + this.circleWidth + 'em) / ' + (this.nodesLength - 1) + ' * ' + index + ');';
        }
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "progressbars", class: (_obj = {}, _obj["progressbars-" + _vm.size] = _vm.size, _obj["progressbars-" + _vm.theme] = _vm.theme, _obj) }, [_c('div', { staticClass: "line-bg", style: "background-color: " + _vm.backgroundColor + ";" }, [_c('div', { staticClass: "line-progress", style: "width: " + this.progressWidth + "; background-color: " + this.foregroundColor + ";" })]), _vm._v(" "), _vm._l(_vm.nodeDataList, function (nodeData, index) {
        return _c('div', { key: index, class: _vm.getNodeClass(index), style: _vm.getNodeStyle(index) }, [_c('div', { staticClass: "info" }, [_vm._t("infoSlot" + index)], 2)]);
    })], 2);
    var _obj;
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "Progressbars.vue";

    if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) component.functional = true;
    }

    component._scopeId = scope;

    if (false) {
        var hook = void 0;
        if (false) {
            hook = function hook(context) {
                context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }

                if (style) {
                    style.call(this, createInjectorSSR(context));
                }

                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };

            component._ssrRegister = hook;
        } else if (style) {
            hook = function hook(context) {
                style.call(this, createInjector(context));
            };
        }

        if (hook !== undefined) {
            if (component.functional) {
                var originalRender = component.render;
                component.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            } else {
                var existing = component.beforeCreate;
                component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
    }

    return component;
}


export default __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);