

import Sync from '../mixins/sync';

var __vue_script__ = {
  name: 'input-number',
  mixins: [Sync],
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    minusHandle: function minusHandle() {
      if (this.disabled || this.currentValue <= this.min) return;

      this.currentValue -= this.step;
    },
    plusHandle: function plusHandle() {
      if (this.disabled || this.currentValue >= this.max) return;

      this.currentValue += this.step;
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "input-number", class: { 'input-number-disabled': _vm.disabled } }, [_c('a', { staticClass: "input-number-minus", class: { 'disabled': _vm.currentValue <= _vm.min }, on: { "click": _vm.minusHandle } }, [_vm._v("-")]), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "input-number-input", attrs: { "type": "number", "disabled": _vm.disabled }, domProps: { "value": _vm.currentValue }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }), _vm._v(" "), _c('a', { staticClass: "input-number-plus", class: { 'disabled': _vm.currentValue >= _vm.max }, on: { "click": _vm.plusHandle } }, [_vm._v("\n        +\n    ")])]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "InputNumber.vue";

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