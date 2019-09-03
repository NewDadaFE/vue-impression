

var __vue_script__ = {
  name: 'toast',
  props: {
    message: String,
    position: {
      type: String,
      default: 'bottom',
      validator: function validator(value) {
        return ['bottom', 'top', 'center'].indexOf(value) > -1;
      }
    },
    type: {
      type: String,
      validator: function validator(value) {
        return ['success', 'error', 'warning', 'loading'].indexOf(value) > -1;
      }
    },
    closeOnClickMask: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentValue: false
    };
  },

  computed: {
    icon: function icon() {
      switch (this.type) {
        case 'error':
          return 'exclamation-circle';
        case 'success':
          return 'check';
        case 'warning':
          return 'exclamation-triangle';
        default:
          return null;
      }
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('transition', { attrs: { "name": "toast-fade" } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentValue, expression: "currentValue" }], staticClass: "toast", class: ["toast-" + _vm.position, { 'toast-lg': _vm.type }] }, [_vm.icon ? _c('div', { staticClass: "toast-icon" }, [_c('icon', { attrs: { "name": _vm.icon } })], 1) : _vm.type === 'loading' ? _c('loading') : _vm._e(), _vm._v(" "), _c('div', { staticClass: "toast-message", domProps: { "innerHTML": _vm._s(_vm.message) } })], 1)]), _vm._v(" "), !!_vm.type ? _c('mask-layer', { staticClass: "bg-transparent", attrs: { "clickable": _vm.closeOnClickMask } }) : _vm._e()], 1);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Toast.vue";

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