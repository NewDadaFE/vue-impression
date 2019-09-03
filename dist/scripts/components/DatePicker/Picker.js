

import Vue from 'vue';

import Emitter from '../../mixins/emitter';

var __vue_script__ = {
    mixins: [Emitter],

    props: {
        theme: {
            type: String,
            default: 'primary',
            validator: function validator(value) {
                return ['primary', 'default'].indexOf(value) > -1;
            }
        },

        size: {
            type: String,
            default: 'base',
            validator: function validator(value) {
                return ['base', 'sm', 'lg'].indexOf(value) > -1;
            }
        },

        dateDisable: {
            type: Boolean,
            default: false
        },

        prevPickedDisableDays: {
            type: Number,
            default: 0
        },

        nextPickedDisableDays: {
            type: Number,
            default: 0
        },

        value: {},

        pickerAlwaysShow: {
            type: Boolean,
            default: true
        },
        onPick: {}
    },

    data: function data() {
        return {
            pickerVisible: false
        };
    },


    watch: {
        pickerVisible: function pickerVisible(val) {
            if (val) {
                this.showPicker();
            } else {
                this.hidePicker();
            }
        },

        value: {
            immediate: true,
            handler: function handler(val) {
                if (this.picker) {
                    this.picker.value = val;
                    this.picker.selectedDate = Array.isArray(val) ? val : [];
                }
            }
        }
    },

    computed: {
        selectionMode: function selectionMode() {
            return this.type;
        },
        pickerSize: function pickerSize() {
            return this.size;
        }
    },

    created: function created() {
        this.pickerVisible = true;
    },


    methods: {
        hidePicker: function hidePicker() {
            if (this.picker) {
                this.picker.resetView && this.picker.resetView();
                this.pickerVisible = this.picker.visible = false;
            }
        },
        showPicker: function showPicker() {
            var _this = this;

            if (this.$isServer) return;
            if (!this.picker) {
                this.mountPicker();
            }
            this.pickerVisible = this.picker.visible = true;

            this.picker.value = this.value;
            this.picker.resetView && this.picker.resetView();

            this.$nextTick(function () {
                _this.picker.adjustSpinners && _this.picker.adjustSpinners();
            });
        },
        mountPicker: function mountPicker() {
            var _this2 = this;

            this.picker = new Vue(this.view).$mount();

            this.picker.selectedDate = Array.isArray(this.value) && this.value || [];
            this.$watch('format', function (format) {
                _this2.picker.format = format;
            });

            this.picker.dateDisable = this.dateDisable;
            this.picker.prevPickedDisableDays = this.prevPickedDisableDays;
            this.picker.nextPickedDisableDays = this.nextPickedDisableDays;

            this.$el.appendChild(this.picker.$el);
            this.picker.resetView && this.picker.resetView();

            this.picker.onPick = this.onPick;

            this.picker.$on('dodestroy', this.doDestroy);
            this.picker.$on('pick', function () {
                var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this2.pickerAlwaysShow;

                _this2.pickerVisible = _this2.picker.visible = visible;
                _this2.picker.resetView && _this2.picker.resetView();
            });

            this.picker.$on('select-range', function (start, end, pos) {
                if (_this2.refInput.length === 0) return;
                if (!pos || pos === 'min') {
                    _this2.refInput[0].setSelectionRange(start, end);
                    _this2.refInput[0].focus();
                } else if (pos === 'max') {
                    _this2.refInput[1].setSelectionRange(start, end);
                    _this2.refInput[1].focus();
                }
            });
        },
        unmountPicker: function unmountPicker() {
            if (this.picker) {
                this.picker.$destroy();
                this.picker.$off();
                this.picker.$el.parentNode.removeChild(this.picker.$el);
            }
        }
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "date-picker", class: (_obj = {}, _obj["date-picker-" + _vm.size] = _vm.size, _obj["date-picker-" + _vm.theme] = _vm.theme, _obj) });
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