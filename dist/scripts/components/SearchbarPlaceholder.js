

var __vue_script__ = {
  name: 'searchbar-placeholder',
  data: function data() {
    return {
      currentValue: this.$parent.value
    };
  },

  watch: {
    currentValue: function currentValue(val) {
      this.$parent.currentValue = val;
    }
  },
  methods: {
    clickHandle: function clickHandle() {
      var _this = this;

      this.$parent.focus = true;
      setTimeout(function () {
        _this.$refs.input.focus();
      }, 300);
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "searchbar-input", class: {
      'border-circle': _vm.$parent.shape === 'circle'
    }, on: { "click": _vm.clickHandle } }, [_c('div', { staticClass: "searchbar-input-placeholder", style: { overflow: !!_vm.$parent.currentValue ? 'hidden' : 'visible' } }, [_vm._t("default")], 2), _vm._v(" "), _c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], ref: "input", staticClass: "searchbar-input-field", attrs: { "type": "text" }, domProps: { "value": _vm.currentValue }, on: { "input": function input($event) {
        if ($event.target.composing) {
          return;
        }_vm.currentValue = $event.target.value;
      } } }), _vm._v(" "), _c('icon', { directives: [{ name: "show", rawName: "v-show", value: _vm.$parent.clearable && !!_vm.$parent.currentValue, expression: "$parent.clearable && !!$parent.currentValue" }], staticClass: "searchbar-input-clear", attrs: { "name": "times-circle", "size": "lg" }, on: { "click": function click($event) {
        _vm.currentValue = '';
      } } })], 1);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "SearchbarPlaceholder.vue";

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