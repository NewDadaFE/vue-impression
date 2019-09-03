

var __vue_script__ = {
  name: 'radio',
  props: {
    shape: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['square', 'circle', 'default'].indexOf(value) > -1;
      }
    },
    value: {},
    val: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get: function get() {
        return this.isGroupChildComponent ? this.$parent.value : this.value;
      },
      set: function set(val) {
        if (this.isGroupChildComponent) {
          this.$parent.$emit('input', val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  beforeCreate: function beforeCreate() {
    this.isGroupChildComponent = this.$parent.$options._componentTag === 'radio-group';
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "radio", class: 'radio-' + _vm.shape }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.model, expression: "model" }], staticClass: "radio-input", attrs: { "type": "radio", "disabled": _vm.disabled || _vm.$parent.disabled }, domProps: { "value": _vm.isGroupChildComponent ? _vm.value : _vm.val, "checked": _vm._q(_vm.model, _vm.isGroupChildComponent ? _vm.value : _vm.val) }, on: { "change": function change($event) {
        _vm.model = _vm.isGroupChildComponent ? _vm.value : _vm.val;
      } } }), _vm._v(" "), _c('span', { staticClass: "radio-addon" }, [_vm.shape === 'default' ? _c('i') : _c('i', { staticClass: "fa fa-check" })]), _vm._v(" "), _c('span', { staticClass: "radio-label" }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Radio.vue";

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