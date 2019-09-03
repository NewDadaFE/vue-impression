

import draggable from '../utils/draggable';

var __vue_script__ = {
    name: 'swipe',
    props: {
        autoplay: {
            type: Boolean,
            default: true
        },

        defaultIndex: {
            type: Number,
            default: 0
        },

        dots: {
            type: Boolean,
            default: true
        },

        onlyOneDot: {
            type: Boolean,
            default: true
        },

        interval: {
            type: Number,
            default: 3000
        },

        speed: {
            type: Number,
            default: 300
        },
        dragThreshold: {
            type: Number,
            default: 1 / 2
        },
        dragRate: {
            type: Number,
            default: 0.2
        },
        onDragStart: Function,
        onDrag: Function,
        onDragEnd: Function,

        easing: {
            type: String,
            default: 'ease-in-out'
        },

        cycle: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            length: 0,
            dragging: false,
            transitioning: false,
            negative: false,
            activeIndex: this.defaultIndex,
            isCycleEnd: false
        };
    },

    methods: {
        init: function init() {
            this.length = this.$children.length;
        },
        getPrevIndex: function getPrevIndex() {
            var prevIndex = this.activeIndex - 1;

            if (!this.cycle) {
                return prevIndex < 0 ? 0 : prevIndex;
            }

            return prevIndex < 0 ? this.length + prevIndex : prevIndex;
        },
        getNextIndex: function getNextIndex() {
            var nextIndex = this.activeIndex + 1;
            var length = this.length - 1;

            if (!this.cycle) {
                return nextIndex > length ? length : nextIndex;
            }

            return nextIndex > length ? nextIndex % this.length : nextIndex;
        },
        isDisableCycle: function isDisableCycle(nextIndex) {
            if (!this.cycle && nextIndex === this.activeIndex) {
                return true;
            }

            return false;
        },
        initDrag: function initDrag() {
            var _this = this;

            if (this.length <= 1) {
                return;
            }

            var swipe = this.$refs.swipe,
                translateX = void 0,
                newIndex = void 0,
                dragStartTime = void 0;


            draggable(swipe, {
                onDragStart: function onDragStart() {
                    _this.onDragStart && _this.onDragStart(_this.activeIndex);

                    if (_this.transitioning) return;

                    dragStartTime = new Date();
                    _this.dragging = true;
                    _this.isCycleEnd = false;
                    clearInterval(_this.swipeInterval);
                },
                onDrag: function onDrag(option, event) {
                    event.preventDefault();
                    if (_this.transitioning) return;

                    translateX = option.translateX;
                    _this.onDrag && _this.onDrag(_this.activeIndex, translateX);

                    if (translateX === 0 || !_this.$children[_this.activeIndex]) return;

                    if (translateX < 0) {
                        var nextIndex = _this.getNextIndex();

                        if (_this.isDisableCycle(nextIndex)) {
                            _this.isCycleEnd = true;

                            return;
                        }

                        _this.$children[_this.activeIndex].swipeToLeft(translateX);
                        _this.$children[nextIndex].swipeToLeft(translateX);

                        _this.negative = false;
                        newIndex = nextIndex;
                    } else {
                        var prevIndex = _this.getPrevIndex();

                        if (_this.isDisableCycle(prevIndex)) {
                            _this.isCycleEnd = true;

                            return;
                        }

                        _this.$children[_this.activeIndex].swipeToRight(translateX);
                        _this.$children[prevIndex].swipeToRight(translateX);

                        _this.negative = true;
                        newIndex = prevIndex;
                    }
                },
                onDragEnd: function onDragEnd() {
                    if (_this.transitioning) return;

                    _this.dragging = false;

                    if (!_this.isCycleEnd && _this.$children[_this.activeIndex]) {
                        var threshold = _this.$children[_this.activeIndex].width * _this.dragThreshold,
                            rate = Math.abs(translateX) / (new Date() - dragStartTime);

                        if (Math.abs(translateX) >= threshold || rate > _this.dragRate) {
                            _this.activeIndex = newIndex || _this.activeIndex;
                        } else if (_this.negative) {
                            var prevIndex = _this.getPrevIndex();

                            _this.$children[_this.activeIndex].swipeToLeft(0);
                            _this.$children[prevIndex].swipeToLeft(0);
                        } else {
                            var nextIndex = _this.getNextIndex();

                            _this.$children[_this.activeIndex].swipeToRight(0);
                            _this.$children[nextIndex].swipeToRight(0);
                        }
                        _this.onDragEnd && _this.onDragEnd(_this.activeIndex);
                    }

                    setTimeout(function () {
                        _this.play();
                    }, _this.interval);
                }
            });
        },
        play: function play() {
            var _this2 = this;

            if (!this.autoplay) return;

            clearInterval(this.swipeInterval);
            this.swipeInterval = setInterval(function () {
                if (_this2.dragging) return;

                _this2.activeIndex = _this2.getNextIndex();
            }, this.interval);
        }
    },
    watch: {
        activeIndex: function activeIndex() {
            this.transitioning = true;

            var nextItem = this.$children[this.activeIndex],
                currentIndex = this.negative ? this.getNextIndex() : this.getPrevIndex(),
                currentItem = this.$children[currentIndex];

            if (!this.negative) {
                currentItem.swipeToLeft();
                nextItem.swipeToLeft();
            } else {
                currentItem.swipeToRight();
                nextItem.swipeToRight();
                this.negative = false;
            }
        },
        length: function length() {
            if (this.length) {
                this.initDrag();
                this.play();
            }
        }
    },
    mounted: function mounted() {
        this.init();
    },
    updated: function updated() {
        var _this3 = this;

        this.$nextTick(function () {
            _this3.init();
        });
        setTimeout(function () {
            _this3.transitioning = false;
        }, this.speed);
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.swipeInterval);
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { ref: "swipe", staticClass: "swipe" }, [_c('div', { staticClass: "swipe-items" }, [_vm._t("default")], 2), _vm._v(" "), _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.length > 1 ? _vm.dots : _vm.dots && _vm.onlyOneDot, expression: "length > 1 ? dots : (dots && onlyOneDot)" }], staticClass: "swipe-indicators" }, _vm._l(_vm.length, function (index) {
        return _c('div', { key: index, staticClass: "swipe-indicator", class: { active: index - 1 === _vm.activeIndex } });
    }))]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "Swipe.vue";

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