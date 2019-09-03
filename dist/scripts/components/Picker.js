

import Sync from '../mixins/sync';
import draggable from '../utils/draggable';
import { getTranslate, setTranslate } from '../utils/translate';

var __vue_script__ = {
    name: 'picker',
    mixins: [Sync],
    props: {
        size: {
            type: String,
            validator: function validator(value) {
                return ['sm', 'lg'].indexOf(value) > -1;
            }
        }
    },
    data: function data() {
        return {
            dragging: false,
            itemHeight: 0,
            pickedIndex: -1
        };
    },

    methods: {
        getDragRange: function getDragRange() {
            var pickerList = this.$refs.pickerList;


            return {
                min: -1 * this.getOptionHeight() * (pickerList.children.length - 1),
                max: 0
            };
        },
        getOptionHeight: function getOptionHeight() {
            if (this.itemHeight) return this.itemHeight;

            var style = document.body.currentStyle || document.defaultView.getComputedStyle(document.body, '');

            this.itemHeight = 3 * parseInt(style.fontSize, 10);

            return this.itemHeight;
        },
        pickOption: function pickOption() {
            var _this = this;

            var pickIndex = 0;

            this.$children.forEach(function (option, index) {
                if (option.value === _this.currentValue) {
                    pickIndex = index;
                }
            });

            var itemHeight = this.getOptionHeight(),
                translate = itemHeight * pickIndex * -1;

            setTranslate(this.$refs.pickerList, null, translate);
            this.pickedIndex = Math.abs(pickIndex);
        },
        initDrag: function initDrag() {
            var _this2 = this;

            var _$refs = this.$refs,
                picker = _$refs.picker,
                pickerList = _$refs.pickerList,
                prevTranslateY = void 0;


            draggable(picker, {
                effectEl: pickerList,
                onDragStart: function onDragStart(_ref, event) {
                    var translateY = _ref.translateY;

                    event.preventDefault();
                    prevTranslateY = translateY;
                },
                onDrag: function onDrag(_ref2, event) {
                    var dragging = _ref2.dragging,
                        effectEl = _ref2.effectEl,
                        translateY = _ref2.translateY;

                    event.preventDefault();
                    _this2.dragging = dragging;

                    var maxTranslateY = _this2.getOptionHeight() * 3;
                    var currentTranslateY = translateY;
                    var pickerHeight = _this2.$children.length * _this2.getOptionHeight();

                    if (translateY > 0) {
                        var rate = (maxTranslateY - translateY) / maxTranslateY;

                        rate = rate >= 0 ? rate : 0.1;

                        currentTranslateY = prevTranslateY + rate * (translateY - prevTranslateY);
                    } else if (translateY < -pickerHeight) {
                        var _rate = (translateY - pickerHeight - maxTranslateY) / maxTranslateY;

                        _rate = _rate >= 0 ? _rate : 0.1;

                        currentTranslateY = prevTranslateY + _rate * (translateY - prevTranslateY);
                    }

                    prevTranslateY = currentTranslateY;
                    setTranslate(effectEl, null, currentTranslateY);
                },
                onDragEnd: function onDragEnd(_ref3, event) {
                    var dragging = _ref3.dragging,
                        startTimestamp = _ref3.startTimestamp,
                        velocityTranslateY = _ref3.velocityTranslateY;

                    event.preventDefault();

                    _this2.dragging = dragging;
                    var momentumRatio = 10,
                        itemHeight = _this2.getOptionHeight(),
                        translateY = getTranslate(pickerList).y,
                        duration = new Date() - startTimestamp;

                    var momentumTranslate = void 0;

                    if (duration < 300) {
                        momentumTranslate = translateY + velocityTranslateY * momentumRatio;
                    }

                    var translate = void 0;
                    var dragRange = _this2.getDragRange();

                    if (momentumTranslate) {
                        translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
                    } else {
                        translate = Math.round(translateY / itemHeight) * itemHeight;
                    }

                    translate = Math.max(Math.min(translate, dragRange.max), dragRange.min);
                    setTranslate(pickerList, null, translate);

                    _this2.pickedIndex = Math.abs(translate / itemHeight);
                }
            });
        }
    },
    watch: {
        pickedIndex: function pickedIndex(val) {
            this.currentValue = this.$children[val].value;
        },
        value: function value() {
            this.pickOption();
        }
    },
    mounted: function mounted() {
        this.pickOption();
        this.initDrag();
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "picker", staticClass: "picker", class: (_obj = {}, _obj["picker-" + _vm.size] = _vm.size, _obj) }, [_c('div', { staticClass: "picker-mask" }), _vm._v(" "), _c('div', { staticClass: "picker-indicator" }), _vm._v(" "), _c('div', { ref: "pickerList", staticClass: "picker-list", class: { active: _vm.dragging } }, [_vm._t("default")], 2)]);
    var _obj;
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "Picker.vue";

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