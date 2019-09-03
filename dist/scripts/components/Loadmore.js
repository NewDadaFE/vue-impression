

var __vue_script__ = {
    name: 'loadmore',
    props: {
        topPullText: {
            type: String,
            default: 'pull down to refresh'
        },
        topDropText: {
            type: String,
            default: 'release to load more'
        },
        topLoadingText: {
            type: String,
            default: 'loading...'
        },
        topDistance: {
            type: Number,
            default: 70
        },
        topMethod: {
            type: Function
        },
        topCancelledMethod: {
            type: Function
        },
        topPulledMethod: {
            type: Function
        },
        topAllLoaded: {
            type: Boolean,
            default: false
        },
        bottomPullText: {
            type: String,
            default: 'pull up to refresh'
        },
        bottomDropText: {
            type: String,
            default: 'release to load more'
        },
        bottomLoadingText: {
            type: String,
            default: 'loading...'
        },
        bottomDistance: {
            type: Number,
            default: 70
        },
        bottomMethod: {
            type: Function
        },
        bottomAllLoaded: {
            type: Boolean,
            default: false
        },
        showLoading: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            topStatus: '',
            topText: '',
            topDropped: false,
            topPulled: false,
            bottomStatus: '',
            bottomText: '',
            bottomDropped: false,
            bottomReached: false,
            scrollElement: null,
            startY: 0,
            startScrollTop: 0,
            currentY: 0,
            direction: '',
            translate: 0
        };
    },

    watch: {
        topStatus: function topStatus(status) {
            switch (status) {
                case 'pull':
                    this.topText = this.topPullText;
                    break;
                case 'drop':
                    this.topText = this.topDropText;
                    break;
                case 'loading':
                    this.topText = this.topLoadingText;
                    break;
                default:
                    break;
            }
            this.$emit('topStatusChanged', status);
        },
        bottomStatus: function bottomStatus(status) {
            switch (status) {
                case 'pull':
                    this.bottomText = this.bottomPullText;
                    break;
                case 'drop':
                    this.bottomText = this.bottomDropText;
                    break;
                case 'loading':
                    this.bottomText = this.bottomLoadingText;
                    break;
                default:
                    break;
            }
            this.$emit('bottomStatusChanged', status);
        }
    },
    methods: {
        getScrollElement: function getScrollElement(element) {
            var currentNode = element,
                overflowY = '';

            while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
                overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                if (overflowY === 'scroll' || overflowY === 'auto') return currentNode;
                currentNode = currentNode.parentNode;
            }

            return window;
        },
        getScrollTop: function getScrollTop(element) {
            if (element === window) {
                return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
            }

            return element.scrollTop;
        },
        handleTouchStart: function handleTouchStart(event) {
            this.startY = event.touches[0].clientY;
            this.startScrollTop = this.getScrollTop(this.scrollElement);
            this.bottomReached = false;

            if (this.topStatus !== 'loading') {
                this.topStatus = 'pull';
                this.topDropped = false;
                this.topPulled = false;
            }

            if (this.bottomStatus !== 'loading') {
                this.bottomStatus = 'pull';
                this.bottomDropped = false;
            }
        },
        handleTouchMove: function handleTouchMove(event) {
            var rect = this.$el.getBoundingClientRect();

            if (this.startY < rect.top && this.startY > rect.bottom) return;

            var distance = 0;

            this.currentY = event.touches[0].clientY;

            distance = (this.currentY - this.startY) / 2;

            this.direction = distance > 0 ? 'down' : 'up';

            if (typeof this.topMethod === 'function' && this.topStatus !== 'loading' && this.direction === 'down' && this.getScrollTop(this.scrollElement) === 0 && !this.topAllLoaded) {
                event.preventDefault();
                event.stopPropagation();
                this.translate = distance - this.startScrollTop;
                if (this.translate < 0) this.translate = 0;
                this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
                if (!this.topPulled) {
                    this.topPulled = true;
                    this.topPulledMethod && this.topPulledMethod();
                }
            }

            if (this.direction === 'up') {
                this.bottomReached = this.bottomReached || this.isBottomReached();
            }

            if (typeof this.bottomMethod === 'function' && this.bottomStatus !== 'loading' && this.direction === 'up' && this.bottomReached && !this.bottomAllLoaded) {
                event.preventDefault();
                event.stopPropagation();
                this.translate = this.getScrollTop(this.scrollElement) - this.startScrollTop + distance;
                if (this.translate > 0) this.translate = 0;
                this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
            }
        },
        handleTouchEnd: function handleTouchEnd() {
            if (this.direction === 'down' && this.getScrollTop(this.scrollElement) === 0 && this.translate > 0) {
                this.topDropped = true;

                if (this.topStatus === 'drop') {
                    this.translate = 50;
                    this.topStatus = 'loading';
                    this.topMethod();
                } else {
                    this.translate = 0;
                    this.topStatus = 'pull';
                    this.topCancelledMethod && this.topCancelledMethod();
                }
            }

            if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
                this.bottomDropped = true;

                this.bottomReached = false;

                if (this.bottomStatus === 'drop') {
                    this.translate = -50;
                    this.bottomStatus = 'loading';
                    this.bottomMethod();
                } else {
                    this.translate = 0;
                    this.bottomStatus = 'pull';
                }
            }

            this.direction = '';
        },
        isBottomReached: function isBottomReached() {
            if (this.scrollElement === window) {
                return document.documentElement.clientHeight + document.body.scrollTop === document.body.scrollHeight;
            }

            return this.scrollElement.getBoundingClientRect().bottom >= this.$el.getBoundingClientRect().bottom;
        },
        onTopLoaded: function onTopLoaded() {
            var _this = this;

            this.translate = 0;
            setTimeout(function () {
                _this.topStatus = 'pull';
            }, 200);
        },
        onBottomLoaded: function onBottomLoaded() {
            var _this2 = this;

            this.bottomStatus = 'pull';
            this.bottomDropped = false;
            this.$nextTick(function () {
                if (_this2.scrollElement === window) {
                    document.body.scrollTop += 50;
                } else {
                    _this2.scrollElement.scrollTop += 50;
                }
                _this2.translate = 0;
            });
        }
    },
    mounted: function mounted() {
        this.topText = this.topPullText;
        this.topStatus = 'pull';
        this.bottomStatus = 'pull';
        this.scrollElement = this.getScrollElement(this.$el);

        if (typeof this.topMethod === 'function' || typeof this.bottomMethod === 'function') {
            this.$el.addEventListener('touchstart', this.handleTouchStart);
            this.$el.addEventListener('touchmove', this.handleTouchMove);
            this.$el.addEventListener('touchend', this.handleTouchEnd);
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (typeof this.topMethod === 'function' || typeof this.bottomMethod === 'function') {
            this.$el.removeEventListener('touchstart', this.handleTouchStart);
            this.$el.removeEventListener('touchmove', this.handleTouchMove);
            this.$el.removeEventListener('touchend', this.handleTouchEnd);
        }
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "loadmore" }, [_c('div', { staticClass: "loadmore-content", class: { dropped: _vm.topDropped || _vm.bottomDropped }, style: { transform: "translate3d(0, " + _vm.translate + "px, 0)" } }, [_vm._t("top", [_vm.topMethod ? _c('div', { staticClass: "loadmore-hint loadmore-hint-top" }, [_vm.showLoading && _vm.topStatus === 'loading' ? _c('loading') : _vm._e(), _vm._v(" "), _c('span', { staticClass: "loadmore-text" }, [_vm._v(_vm._s(_vm.topText))])], 1) : _vm._e()]), _vm._v(" "), _vm._t("default"), _vm._v(" "), _vm._t("bottom", [_vm.bottomMethod ? _c('div', { staticClass: "loadmore-hint loadmore-hint-bottom" }, [_vm.showLoading && _vm.bottomStatus === 'loading' ? _c('loading') : _vm._e(), _vm._v(" "), _c('span', { staticClass: "loadmore-text" }, [_vm._v(_vm._s(_vm.bottomText))])], 1) : _vm._e()])], 2)]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "Loadmore.vue";

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