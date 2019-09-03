

import Sync from '../mixins/sync';

var __vue_script__ = {
  name: 'input-text',
  mixins: [Sync],
  props: {
    clearable: Boolean,
    placeholder: String,
    type: {
      type: String,
      default: 'text',
      validator: function validator(value) {
        return ['text', 'number', 'tel', 'date', 'datetime', 'time', 'password', 'email'].indexOf(value) > -1;
      }
    },
    state: {
      type: String,
      validator: function validator(value) {
        return ['success', 'warning', 'error'].indexOf(value) > -1;
      }
    }
  },
  data: function data() {
    return {
      focus: false,
      currentDisabled: this.disabled || this.$parent.disabled
    };
  },

  methods: {
    blur: function blur() {
      this.focus = false;
    },
    clearHandle: function clearHandle() {
      if (!this.currentDisabled) {
        this.currentValue = '';
        this.$refs.input.focus();
      }
    },
    getStateClass: function getStateClass() {
      return {
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-danger'
      }[this.state];
    },
    getStateIcon: function getStateIcon() {
      return {
        success: 'check',
        warning: 'exclamation-triangle',
        error: 'exclamation-circle'
      }[this.state];
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "disfavor", rawName: "v-disfavor", value: _vm.blur, expression: "blur" }], staticClass: "input-text" }, [_vm.type === 'number' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "number", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _vm.type === 'tel' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "tel", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _vm.type === 'date' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "date", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _vm.type === 'datetime' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "datetime", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _vm.type === 'time' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "time", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _vm.type === 'password' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "password", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _vm.type === 'email' ? _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "email", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }) : _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "input-text-input", attrs: { "type": "text", "disabled": _vm.currentDisabled, "placeholder": _vm.placeholder }, domProps: { "value": _vm.currentValue }, on: { "focus": function focus($event) {
        _vm.focus = true;
      }, "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }), _vm._v(" "), _c('icon', { directives: [{ name: "show", rawName: "v-show", value: _vm.clearable && _vm.focus && !!_vm.currentValue, expression: "clearable && focus && !!currentValue" }], staticClass: "input-text-clear", attrs: { "name": "times-circle", "size": "lg" }, on: { "click": _vm.clearHandle } }), _vm._v(" "), _vm.state ? _c('icon', { class: _vm.getStateClass(), attrs: { "name": _vm.getStateIcon(), "size": "lg" } }) : _vm._e()], 1);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "InputText.vue";

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