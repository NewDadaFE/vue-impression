

import { getTranslate, setTranslate } from '../utils/translate';
import { getPrefixStyle } from '../utils/cssPrefix';

var __vue_script__ = {
    name: 'swipe-item',
    data: function data() {
        return {
            width: 0,
            translate: 0
        };
    },

    methods: {
        resetByTranslateX: function resetByTranslateX() {
            this.$el.style.transition = '';

            var translateX = getTranslate(this.$el).x;

            translateX < 0 && setTranslate(this.$el, this.width, 0);
        },
        resetByNegative: function resetByNegative(negative) {
            this.$el.style.transition = '';
            if (this.index !== this.$parent.activeIndex) {
                setTranslate(this.$el, negative ? -this.width : this.width, 0);
            }
        },
        init: function init() {
            this.width = this.$el.offsetWidth;
            this.index = this.$parent.$children.indexOf(this);
            var translate = this.width;

            if (this.$parent.defaultIndex === this.index) {
                translate = 0;
            }

            setTranslate(this.$el, translate, 0);
        },
        isInTheLimitRange: function isInTheLimitRange(translate) {
            var negative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var min = void 0,
                max = void 0;

            if (!negative) {
                min = 0;
                max = this.width;

                if (this.index === this.$parent.activeIndex) {
                    min = -this.width;
                    max = 0;
                }
            } else {
                min = -this.width;
                max = 0;

                if (this.index === this.$parent.activeIndex) {
                    min = 0;
                    max = this.width;
                }
            }

            return translate >= min && translate <= max;
        },
        swipeToLeft: function swipeToLeft(translateX) {
            if (!translateX) {
                this.$el.style.transition = getPrefixStyle('transform', this.$parent.speed + 'ms ' + this.$parent.easing);

                var translate = -this.width;

                if (this.index === this.$parent.activeIndex) {
                    translate = 0;
                }

                setTranslate(this.$el, translate, 0);

                return;
            }

            var initTranslate = this.width;

            if (this.index === this.$parent.activeIndex) {
                initTranslate = 0;
            }

            var finalTranslateX = initTranslate + translateX;

            if (this.isInTheLimitRange(finalTranslateX)) {
                setTranslate(this.$el, finalTranslateX, 0);
            }
        },
        swipeToRight: function swipeToRight(translateX) {
            if (!translateX) {
                this.$el.style.transition = getPrefixStyle('transform', this.$parent.speed + 'ms ' + this.$parent.easing);

                var translate = this.width;

                if (this.index === this.$parent.activeIndex) {
                    translate = 0;
                }

                setTranslate(this.$el, translate, 0);

                return;
            }

            var initTranslate = -this.width;

            if (this.index === this.$parent.activeIndex) {
                initTranslate = 0;
            }

            var finalTranslateX = initTranslate + translateX;

            if (this.isInTheLimitRange(finalTranslateX, true)) {
                setTranslate(this.$el, finalTranslateX, 0);
            }
        }
    },
    mounted: function mounted() {
        this.init();
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "swipe-item", on: { "webkitTransitionEnd": function webkitTransitionEnd($event) {
                _vm.resetByTranslateX();
            } } }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "SwipeItem.vue";

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