

var __vue_script__ = {
  name: 'icon',
  props: {
    left: Boolean,
    right: Boolean,
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: function validator(value) {
        return ['lg', '2x', '3x', '4x', '5x'].indexOf(value) > -1;
      }
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { staticClass: "fa", class: ["fa-" + _vm.name, (_obj = {
      'gap-left': _vm.left,
      'gap-right': _vm.right
    }, _obj["fa-" + _vm.size] = _vm.size, _obj)], on: { "click": function click($event) {
        _vm.$emit('click');
      } } });
  var _obj;
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Icon.vue";

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