

var __vue_script__ = {
  name: 'stepbar-item',
  props: {
    description: {
      type: String
    }
  },
  data: function data() {
    return {
      isFirstChild: false,
      isLastChild: false,
      state: 'default',
      index: 0
    };
  },
  mounted: function mounted() {
    var length = this.$parent.$children.length;

    this.index = this.$parent.$children.indexOf(this);

    this.index === 0 && (this.isFirstChild = true);
    this.index === length - 1 && (this.isLastChild = true);

    switch (true) {
      case this.index === this.$parent.currentValue:
        this.state = 'active';
        break;
      case this.index < this.$parent.currentValue:
        this.state = 'finished';
        break;
      default:
        this.state = 'default';
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "stepbar-item" }, [!_vm.isFirstChild ? _c('div', { staticClass: "stepbar-line", class: { active: _vm.state === 'active' || _vm.state === 'finished' } }) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "stepbar-item-addon", class: (_obj = {}, _obj[_vm.state] = _vm.state !== 'default', _obj) }, [_vm.state === 'finished' ? _c('icon', { attrs: { "name": "check" } }) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.state === 'finished' ? '' : _vm.index + 1) + "\n    ")], 1), _vm._v(" "), _c('div', { staticClass: "stepbar-item-title", class: (_obj$1 = {}, _obj$1[_vm.state] = _vm.state !== 'default', _obj$1) }, [_vm._t("default")], 2), _vm._v(" "), !_vm.isLastChild ? _c('div', { staticClass: "stepbar-line", class: { active: _vm.state === 'finished' } }) : _vm._e()]);
  var _obj;
  var _obj$1;
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "StepbarItem.vue";

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