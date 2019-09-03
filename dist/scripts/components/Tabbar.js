

import Tab from '../mixins/tab';
import { setTranslate } from '../utils/translate';

var __vue_script__ = {
  name: 'tabbar',
  mixins: [Tab],
  props: {
    activeKey: {
      default: 0
    }
  },
  methods: {
    setIndicatorWidth: function setIndicatorWidth() {
      this.indicatorWidth = this.$el.offsetWidth / this.$children.length;
      this.$refs.indicator.style.width = this.indicatorWidth + 'px';
    },
    initSelectedIndicator: function initSelectedIndicator() {
      var _this = this;

      this.$children.forEach(function (child, index) {
        if (_this.currentActiveKey === child.currentEventKey) {
          var $indicator = _this.$refs.indicator,
              translateX = index * _this.indicatorWidth;

          setTranslate($indicator, translateX, 0);
        }
      });
    }
  },
  watch: {
    currentActiveKey: function currentActiveKey() {
      this.initSelectedIndicator();
    }
  },
  mounted: function mounted() {
    this.setIndicatorWidth();
    this.initSelectedIndicator();
  },
  updated: function updated() {
    this.setIndicatorWidth();
    this.initSelectedIndicator();
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "tabbar", class: { disabled: _vm.disabled } }, [_vm._t("default"), _vm._v(" "), _c('div', { ref: "indicator", staticClass: "tabbar-indicator" })], 2);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "Tabbar.vue";

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