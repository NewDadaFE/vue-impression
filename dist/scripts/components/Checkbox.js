

import Sync from '../mixins/sync';

var __vue_script__ = {
  name: 'checkbox',
  mixins: [Sync],
  props: {
    type: {
      type: String,
      default: 'square',
      validator: function validator(value) {
        return ['square', 'circle'].indexOf(value) > -1;
      }
    }
  },
  data: function data() {
    var currentValue = void 0;

    if (this.isGroupChildComponent) {
      currentValue = this.$parent.currentValue && this.$parent.currentValue.indexOf(this.value) > -1;
    } else {
      currentValue = this.value;
    }

    return { currentValue: currentValue };
  },

  watch: {
    currentValue: function currentValue(val) {
      if (this.isGroupChildComponent) {
        this.$parent.$emit('optionChecked', this.value);
      }
      this.$emit('input', val);
    }
  },
  beforeCreate: function beforeCreate() {
    this.isGroupChildComponent = this.$parent.$options._componentTag === 'checkbox-group';
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "checkbox", class: 'checkbox-' + _vm.type }, [_c('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.currentValue, expression: "currentValue" }], staticClass: "checkbox-input", attrs: { "type": "checkbox", "disabled": _vm.disabled || _vm.$parent.disabled }, domProps: { "checked": Array.isArray(_vm.currentValue) ? _vm._i(_vm.currentValue, null) > -1 : _vm.currentValue }, on: { "change": function change($event) {
        var $$a = _vm.currentValue,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);if ($$el.checked) {
            $$i < 0 && (_vm.currentValue = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.currentValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.currentValue = $$c;
        }
      } } }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('span', { staticClass: "checkbox-label" }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__ = [function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "checkbox-addon" }, [_c('i', { staticClass: "fa fa-check" })]);
}];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Checkbox.vue";

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