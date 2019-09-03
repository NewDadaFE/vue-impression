

var __vue_script__ = {
  name: 'alert',
  props: {
    title: {
      type: String,
      default: '确认'
    },

    message: String,

    vertical: {
      type: Boolean,
      default: false
    },

    autoClose: {
      type: Boolean,
      default: true
    },

    maskClosable: {
      type: Boolean,
      default: false
    },

    btns: {
      type: Array,
      default: function _default() {
        return [{
          text: '确定'
        }];
      }
    }
  },
  data: function data() {
    return {
      currentValue: false
    };
  },

  methods: {
    show: function show() {
      this.currentValue = true;
    },
    clickHandle: function clickHandle(callback) {
      callback && callback();
      this.autoClose && (this.currentValue = false);
    },
    hide: function hide() {
      this.autoClose && (this.currentValue = false);
    },
    afterLeave: function afterLeave() {
      document.body.removeChild(this.$el);
    }
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_c('transition', { attrs: { "name": "zoom" }, on: { "after-leave": _vm.afterLeave } }, [_c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.currentValue, expression: "currentValue" }], staticClass: "alert", on: { "click": function click($event) {
        if ($event.target !== $event.currentTarget) {
          return null;
        }_vm.maskClosable && (_vm.currentValue = false);
      }, "touchmove": function touchmove($event) {
        $event.preventDefault();$event.stopPropagation();
      } } }, [_c('div', { staticClass: "alert-modal" }, [_c('div', { staticClass: "alert-title", domProps: { "innerHTML": _vm._s(_vm.title) } }), _vm._v(" "), _c('div', { staticClass: "alert-message", domProps: { "innerHTML": _vm._s(_vm.message) } }), _vm._v(" "), _c('div', { staticClass: "alert-footer", class: { 'alert-footer-vertical': _vm.vertical } }, _vm._l(_vm.btns, function (btn) {
    return _c('div', { staticClass: "alert-btn", domProps: { "innerHTML": _vm._s(btn.text) }, on: { "click": function click($event) {
          _vm.clickHandle(btn.click);
        } } });
  }))])])]), _vm._v(" "), _c('mask-layer', { attrs: { "clickable": false } })], 1);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Alert.vue";

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