

var __vue_script__ = {
  name: 'cell',
  props: {
    to: [String, Object],
    href: String,
    disabled: Boolean,
    hasGap: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: function _default() {
        return !!(this.href || this.to);
      }
    }
  },
  computed: {
    clickable: function clickable() {
      return !this.disabled && (this.href || this._events.click);
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return !_vm.disabled && _vm.to ? _c('router-link', { staticClass: "cell cell-link", class: {
      'cell-disabled': _vm.disabled,
      'cell-no-gap': !_vm.hasGap
    }, attrs: { "to": _vm.to } }, [_vm.$slots.header ? _c('div', { staticClass: "cell-header" }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _c('span', { staticClass: "cell-body" }, [_vm._t("default")], 2), _vm._v(" "), _vm.$slots.footer ? _c('div', { staticClass: "cell-footer" }, [_vm._t("footer")], 2) : _vm._e(), _vm._v(" "), _vm.hasArrow ? _c('i', { staticClass: "fa fa-angle-right cell-arrow" }) : _vm._e()]) : _c('a', { staticClass: "cell", class: {
      'cell-link': _vm.clickable,
      'cell-disabled': _vm.disabled,
      'cell-no-gap': !_vm.hasGap
    }, attrs: { "href": !_vm.disabled && _vm.href }, on: { "click": function click($event) {
        !_vm.disabled && _vm.$emit('click');
      } } }, [_vm.$slots.header ? _c('div', { staticClass: "cell-header" }, [_vm._t("header")], 2) : _vm._e(), _vm._v(" "), _c('span', { staticClass: "cell-body" }, [_vm._t("default")], 2), _vm._v(" "), _vm.$slots.footer ? _c('div', { staticClass: "cell-footer" }, [_vm._t("footer")], 2) : _vm._e(), _vm._v(" "), _vm.hasArrow ? _c('i', { staticClass: "fa fa-angle-right cell-arrow" }) : _vm._e()]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Cell.vue";

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