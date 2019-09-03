import _defineProperty from 'babel-runtime/helpers/defineProperty';


var prefixCls = 'sticky-affix';

function getScroll(target, top) {
    var prop = top ? 'pageYOffset' : 'pageXOffset';
    var method = top ? 'scrollTop' : 'scrollLeft';
    var ret = target[prop];

    if (typeof ret !== 'number') {
        ret = window.document.documentElement[method];
    }

    return ret;
}

function getOffset(element) {
    var rect = element.getBoundingClientRect();
    var scrollTop = getScroll(window, true);
    var scrollLeft = getScroll(window);
    var docEl = window.document.body;
    var clientTop = docEl.clientTop || 0;
    var clientLeft = docEl.clientLeft || 0;

    return {
        top: rect.top + scrollTop - clientTop,
        left: rect.left + scrollLeft - clientLeft
    };
}

var __vue_script__ = {
    name: 'sticky',
    props: {
        offsetTop: {
            type: Number,
            default: 0
        },
        offsetBottom: {
            type: Number
        }
    },
    data: function data() {
        return {
            affix: false,
            styles: {}
        };
    },

    computed: {
        offsetType: function offsetType() {
            var type = 'top';

            if (this.offsetBottom >= 0) {
                type = 'bottom';
            }

            return type;
        },
        classes: function classes() {
            return [_defineProperty({}, '' + prefixCls, this.affix)];
        }
    },
    mounted: function mounted() {
        window.addEventListener('scroll', this.handleScroll, false);
        window.addEventListener('resize', this.handleScroll, false);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll, false);
        window.removeEventListener('resize', this.handleScroll, false);
    },

    methods: {
        handleScroll: function handleScroll() {
            var affix = this.affix;
            var scrollTop = getScroll(window, true);
            var elOffset = getOffset(this.$el);
            var windowHeight = window.innerHeight;
            var elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight;

            if (elOffset.top - this.offsetTop < scrollTop && this.offsetType === 'top' && !affix) {
                this.affix = true;
                this.styles = {
                    top: this.offsetTop + 'px',
                    left: elOffset.left + 'px',
                    width: this.$el.offsetWidth + 'px'
                };
                this.$emit('on-change', true);
            } else if (elOffset.top - this.offsetTop > scrollTop && this.offsetType === 'top' && affix) {
                this.affix = false;
                this.styles = null;
                this.$emit('on-change', false);
            }

            if (elOffset.top + this.offsetBottom + elHeight > scrollTop + windowHeight && this.offsetType === 'bottom' && !affix) {
                this.affix = true;
                this.styles = {
                    bottom: this.offsetBottom + 'px',
                    left: elOffset.left + 'px',
                    width: this.$el.offsetWidth + 'px'
                };
                this.$emit('on-change', true);
            } else if (elOffset.top + this.offsetBottom + elHeight < scrollTop + windowHeight && this.offsetType === 'bottom' && affix) {
                this.affix = false;
                this.styles = null;
                this.$emit('on-change', false);
            }
        }
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('div', { class: _vm.classes, style: _vm.styles }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "Sticky.vue";

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