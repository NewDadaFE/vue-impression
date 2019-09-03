

import DateTable from './DateTable';
import Btn from '../Button';
import Icon from '../Icon';
import { formatDate, isDate, prevMonth as _prevMonth, nextMonth as _nextMonth } from '../../utils/date';

var DayMilliseconds = 24 * 60 * 60 * 1000;

var __vue_script__ = {

    computed: {
        dateLabel: function dateLabel() {
            return this.date.getFullYear() + '年' + (this.date.getMonth() + 1) + '月';
        }
    },

    data: function data() {
        return {
            popperClass: '',
            defaultTime: null,
            minDate: '',
            maxDate: '',
            date: new Date(),
            rangeState: {
                endDate: null,
                selecting: false,
                row: null,
                column: null
            },
            visible: '',
            firstDayOfWeek: 1,
            dateDisable: false,
            prevPickedDisableDays: 0,
            nextPickedDisableDays: 0
        };
    },


    methods: {
        disabledDate: function disabledDate(time) {
            if (this.dateDisable) {
                if (this.maxDate) {
                    return false;
                }

                if (this.minDate) {
                    var prePickedDisabled = time.getTime() <= new Date(this.minDate).getTime() - this.prevPickedDisableDays * DayMilliseconds;
                    var nextPickedDisabled = time.getTime() >= new Date(this.minDate).getTime() + this.nextPickedDisableDays * DayMilliseconds;

                    return prePickedDisabled || nextPickedDisabled;
                }
            }

            return false;
        },
        handleChangeRange: function handleChangeRange(val) {
            this.minDate = val.minDate;
            this.maxDate = val.maxDate;
            this.rangeState = val.rangeState;
        },
        handleRangePick: function handleRangePick(val) {
            var _this = this;

            var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            var minDate = val.minDate;
            var maxDate = val.maxDate;

            if (this.maxDate === maxDate && this.minDate === minDate) {
                return;
            }
            this.onPick && this.onPick(val, formatDate);

            this.maxDate = maxDate;
            this.minDate = minDate;

            setTimeout(function () {
                _this.maxDate = maxDate;
                _this.minDate = minDate;
            }, 10);
            if (!close) {
                return;
            }
            this.handleConfirm();
        },
        prevMonth: function prevMonth() {
            this.date = _prevMonth(this.date);
        },
        nextMonth: function nextMonth() {
            this.date = _nextMonth(this.date);
        },
        handleConfirm: function handleConfirm() {
            this.$emit('pick', [this.minDate, this.maxDate]);
        },
        isValidValue: function isValidValue(value) {
            return Array.isArray(value) && value && value[0] && value[1] && isDate(value[0]) && isDate(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
        }
    },

    components: { DateTable: DateTable, Btn: Btn, Icon: Icon }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.visible, expression: "visible" }], staticClass: "date-range-picker" }, [_c('div', { staticClass: "header" }, [_c('div', { staticClass: "header-cnt" }, [_c('btn', { staticClass: "btn btn-left", on: { "click": _vm.prevMonth } }, [_c('icon', { attrs: { "name": "angle-left", "left": "" } })], 1), _vm._v(" "), _c('btn', { staticClass: "btn btn-right", on: { "click": _vm.nextMonth } }, [_c('icon', { attrs: { "name": "angle-right", "right": "" } })], 1), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.dateLabel))])], 1)]), _vm._v(" "), _c('date-table', { attrs: { "selection-mode": "range", "date": _vm.date, "min-date": _vm.minDate, "max-date": _vm.maxDate, "range-state": _vm.rangeState, "disabled-date": _vm.disabledDate, "first-day-of-week": _vm.firstDayOfWeek }, on: { "changerange": _vm.handleChangeRange, "pick": _vm.handleRangePick } })], 1);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "DateRange.vue";

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