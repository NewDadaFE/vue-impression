
var __vue_script__ = {
  name: 'btn',
  props: {
    block: Boolean,
    hollow: Boolean,
    disabled: Boolean,

    loading: Boolean,

    type: {
      type: String,
      default: 'button',
      validator: function validator(value) {
        return ['button', 'submit', 'reset'].indexOf(value) > -1;
      }
    },

    theme: {
      type: String,
      default: 'primary',
      validator: function validator(value) {
        return ['primary', 'secondary', 'default'].indexOf(value) > -1;
      }
    },

    size: {
      type: String,
      validator: function validator(value) {
        return ['sm', 'lg'].indexOf(value) > -1;
      }
    },

    shape: {
      type: String,
      validator: function validator(value) {
        return ['pill'].indexOf(value) > -1;
      }
    }
  },
  methods: {
    clickHandle: function clickHandle(event) {
      this.$emit('click', event);
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('button', { staticClass: "btn", class: (_obj = {}, _obj["btn-" + _vm.theme] = _vm.theme, _obj["btn-" + _vm.size] = _vm.size, _obj["btn-" + _vm.theme + "-outline"] = _vm.hollow, _obj['btn-block'] = _vm.block, _obj['btn-loading'] = _vm.loading, _obj["border-" + _vm.shape] = _vm.shape, _obj), attrs: { "type": _vm.type, "disabled": _vm.disabled || _vm.loading }, on: { "click": _vm.clickHandle } }, [_vm._t("default"), _vm._v(" "), _vm.loading ? _c('loading', { attrs: { "size": "sm", "theme": _vm.theme === 'default' ? 'primary' : null } }) : _vm._e()], 2);
  var _obj;
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Button.vue";

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