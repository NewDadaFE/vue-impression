

import { easeInOutCubic } from '../utils/easing';
import { getScrollContainer } from '../utils/dom';

var __vue_script__ = {
  name: 'back-to-top',
  data: function data() {
    return {
      active: false
    };
  },

  methods: {
    scrollToTopHandle: function scrollToTopHandle() {
      var _this = this;

      var scrollTop = this.getScrollTop(),
          startTime = Date.now();

      var frameFunc = function frameFunc() {
        var timestamp = Date.now(),
            time = timestamp - startTime;

        _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
        if (time < 450) {
          requestAnimationFrame(frameFunc);
        }
      };

      requestAnimationFrame(frameFunc);
      this.active = false;
    },
    getScrollTop: function getScrollTop() {
      return this.scrollTargetEl === document ? window.pageYOffset : this.scrollTargetEl.scrollTop;
    },
    setScrollTop: function setScrollTop(val) {
      if (this.scrollTargetEl === document) {
        document.body.scrollTop = val;
        document.documentElement.scrollTop = val;

        return;
      }

      this.scrollTargetEl.scrollTop = val;
    },
    touchStartHandle: function touchStartHandle() {
      this._offsetY = this.scrollTargetEl === document ? window.pageYOffset : this.scrollTargetEl.scrollTop;
    },
    touchEndHandle: function touchEndHandle() {
      var scrollTop = this.scrollTargetEl === document ? window.pageYOffset : this.scrollTargetEl.scrollTop;

      if (scrollTop < this._offsetY && this._offsetY - scrollTop > 60) {
        this.active = true;
      } else if (Math.abs(this._offsetY - scrollTop) > 60) {
        this.active = false;
      }

      this._offsetY = scrollTop;
    }
  },
  mounted: function mounted() {
    this.scrollTargetEl = getScrollContainer(this.$el);

    this.scrollTargetEl.addEventListener('touchstart', this.touchStartHandle);
    this.scrollTargetEl.addEventListener('touchend', this.touchEndHandle);
  }
};

var __vue_render__ = function __vue_render__() {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "back-to-top", class: { 'active': _vm.active }, on: { "click": function click($event) {
        $event.preventDefault();$event.stopPropagation();return _vm.scrollToTopHandle($event);
      } } }, [_c('icon', { staticClass: "back-to-top-icon", attrs: { "name": "arrow-up" } })], 1);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {};

  component.__file = "BackToTop.vue";

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