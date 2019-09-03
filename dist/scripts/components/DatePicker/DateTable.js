

import { getFirstDayOfMonth, getDayCountOfMonth, getWeekNumber, getStartDateOfMonth, nextDate } from '../../utils/date';
import { hasClass } from '../../utils/dom';

var _WEEKS = ['日', '一', '二', '三', '四', '五', '六'];
var clearHours = function clearHours(time) {
    var cloneDate = new Date(time);

    cloneDate.setHours(0, 0, 0, 0);

    return cloneDate.getTime();
};

var __vue_script__ = {
    name: 'date-table',

    props: {
        firstDayOfWeek: {
            default: 7,
            type: Number,
            validator: function validator(val) {
                return val >= 1 && val <= 7;
            }
        },

        value: {},

        date: {},

        selectionMode: {
            type: String,
            default: 'day'
        },

        showWeekNumber: {
            type: Boolean,
            default: false
        },

        disabledDate: {},

        selectedDate: {
            type: Array
        },

        minDate: {},

        maxDate: {},

        rangeState: {
            default: function _default() {
                return {
                    endDate: null,
                    selecting: false,
                    row: null,
                    column: null
                };
            }
        }
    },

    computed: {
        offsetDay: function offsetDay() {
            var week = this.firstDayOfWeek;

            return week > 3 ? 7 - week : -week;
        },
        WEEKS: function WEEKS() {
            var week = this.firstDayOfWeek;

            return _WEEKS.concat(_WEEKS).slice(week, week + 7);
        },
        year: function year() {
            return this.date.getFullYear();
        },
        month: function month() {
            return this.date.getMonth();
        },
        startDate: function startDate() {
            return getStartDateOfMonth(this.year, this.month);
        },
        rows: function rows() {
            var _this = this;

            var date = new Date(this.year, this.month, 1);
            var day = getFirstDayOfMonth(date);
            var dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
            var dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

            day = day === 0 ? 7 : day;

            var offset = this.offsetDay;
            var rows = this.tableRows;
            var count = 1;
            var firstDayPosition = void 0;

            var startDate = this.startDate;
            var disabledDate = this.disabledDate;
            var selectedDate = this.selectedDate || this.value;
            var now = clearHours(new Date());

            for (var i = 0; i < 6; i++) {
                var row = rows[i];

                if (this.showWeekNumber) {
                    if (!row[0]) {
                        row[0] = { type: 'week', text: getWeekNumber(nextDate(startDate, i * 7 + 1)) };
                    }
                }

                var _loop = function _loop(j) {
                    var cell = row[_this.showWeekNumber ? j + 1 : j];

                    if (!cell) {
                        cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                    }

                    cell.type = 'normal';

                    var index = i * 7 + j;
                    var time = nextDate(startDate, index - offset).getTime();

                    if (!_this.maxDate) {
                        cell.inRange = cell.end = cell.start = _this.minDate && time === clearHours(_this.minDate);
                    } else {
                        cell.inRange = time >= clearHours(_this.minDate) && time <= clearHours(_this.maxDate);
                        cell.start = _this.minDate && time === clearHours(_this.minDate);
                        cell.end = _this.maxDate && time === clearHours(_this.maxDate);
                    }

                    var isToday = time === now;

                    if (isToday) {
                        cell.type = 'today';
                    }

                    if (i >= 0 && i <= 1) {
                        if (j + i * 7 >= day + offset) {
                            cell.text = count++;
                            if (count === 2) {
                                firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                            cell.type = 'prev-month';
                        }
                    } else if (count <= dateCountOfMonth) {
                        cell.text = count++;
                        if (count === 2) {
                            firstDayPosition = i * 7 + j;
                        }
                    } else {
                        cell.text = count++ - dateCountOfMonth;
                        cell.type = 'next-month';
                    }

                    var newDate = new Date(time);

                    cell.disabled = typeof disabledDate === 'function' && disabledDate(newDate);

                    cell.selected = Array.isArray(selectedDate) && selectedDate.filter(function (date) {
                        return date.toString() === newDate.toString();
                    })[0];


                    _this.$set(row, _this.showWeekNumber ? j + 1 : j, cell);
                };

                for (var j = 0; j < 7; j++) {
                    _loop(j);
                }
            }

            rows.firstDayPosition = firstDayPosition;

            return rows;
        }
    },

    watch: {
        'rangeState.endDate': function rangeStateEndDate(newVal) {
            this.markRange(newVal);
        },
        minDate: function minDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = true;
                this.markRange(newVal);
            } else if (!newVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
            } else {
                this.markRange();
            }
        },
        maxDate: function maxDate(newVal, oldVal) {
            if (newVal && !oldVal) {
                this.rangeState.selecting = false;
                this.markRange(newVal);
                this.$emit('pick', {
                    minDate: this.minDate,
                    maxDate: this.maxDate
                });
            }
        }
    },

    data: function data() {
        return {
            tableRows: [[], [], [], [], [], []]
        };
    },


    methods: {
        getCellClasses: function getCellClasses(cell) {
            var selectionMode = this.selectionMode;
            var classes = [];

            if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
                classes.push('available');
                if (cell.type === 'today') {
                    classes.push('today');
                }
            } else {
                classes.push(cell.type);
            }

            if (cell.disabled) {
                classes.push('disabled');
            } else if (cell.inRange) {
                classes.push('in-range');

                if (cell.start) {
                    classes.push('start-date');
                }

                if (cell.end) {
                    classes.push('end-date');
                }
            }

            if (cell.selected) {
                classes.push('selected');
            }

            return classes.join(' ');
        },
        getDateOfCell: function getDateOfCell(row, column) {
            var offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;

            return nextDate(this.startDate, offsetFromStart);
        },
        markRange: function markRange(maxDate) {
            var startDate = this.startDate;

            if (!maxDate) {
                maxDate = this.maxDate;
            }

            var rows = this.rows;
            var minDate = this.minDate;

            for (var i = 0, k = rows.length; i < k; i++) {
                var row = rows[i];

                for (var j = 0, l = row.length; j < l; j++) {
                    if (this.showWeekNumber && j === 0) continue;


                    var _cell = row[j];
                    var index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
                    var _time = nextDate(startDate, index - this.offsetDay).getTime();

                    if (maxDate && maxDate < minDate) {
                        _cell.inRange = minDate && _time >= clearHours(maxDate) && _time <= clearHours(minDate);
                        _cell.start = maxDate && _time === clearHours(maxDate.getTime());
                        _cell.end = minDate && _time === clearHours(minDate.getTime());
                    } else {
                        _cell.inRange = minDate && _time >= clearHours(minDate) && _time <= clearHours(maxDate);
                        _cell.start = minDate && _time === clearHours(minDate.getTime());
                        _cell.end = maxDate && _time === clearHours(maxDate.getTime());
                    }
                }
            }
        },
        handleMouseMove: function handleMouseMove(event) {
            if (!this.rangeState.selecting) {
                return;
            }

            this.$emit('changerange', {
                minDate: this.minDate,
                maxDate: this.maxDate,
                rangeState: this.rangeState
            });

            var target = event.target;

            if (target.tagName === 'SPAN') {
                target = target.parentNode.parentNode;
            }
            if (target.tagName === 'DIV') {
                target = target.parentNode;
            }
            if (target.tagName !== 'TD') return;else if (hasClass(target, 'disabled')) return;

            var column = target.cellIndex;
            var row = target.parentNode.rowIndex - 1;
            var _rangeState = this.rangeState,
                oldRow = _rangeState.row,
                oldColumn = _rangeState.column;


            if (oldRow !== row || oldColumn !== column) {
                this.rangeState.row = row;
                this.rangeState.column = column;

                this.rangeState.endDate = this.getDateOfCell(row, column);
            }
        },
        handleClick: function handleClick(event) {
            var _this2 = this;

            var target = event.target;

            if (target.tagName === 'SPAN') {
                target = target.parentNode.parentNode;
            }
            if (target.tagName === 'DIV') {
                target = target.parentNode;
            }

            if (target.tagName !== 'TD') return;
            if (hasClass(target, 'disabled')) {
                return;
            }

            var selectionMode = this.selectionMode;

            var year = Number(this.year);
            var month = Number(this.month);

            var cellIndex = target.cellIndex;
            var rowIndex = target.parentNode.rowIndex;
            var cell = this.rows[rowIndex - 1][cellIndex];
            var text = cell.text;
            var className = target.className;

            var newDate = new Date(year, month, 1);

            if (className.indexOf('prev') !== -1) {
                if (month === 0) {
                    year -= 1;
                    month = 11;
                } else {
                    month -= 1;
                }
                newDate.setFullYear(year);
                newDate.setMonth(month);
            } else if (className.indexOf('next') !== -1) {
                if (month === 11) {
                    year += 1;
                    month = 0;
                } else {
                    month += 1;
                }
                newDate.setFullYear(year);
                newDate.setMonth(month);
            }

            newDate.setDate(parseInt(text, 10));

            if (this.selectionMode === 'range') {
                if (this.minDate && this.maxDate) {

                    var minDate = new Date(newDate.getTime());
                    var maxDate = null;

                    this.$emit('pick', { minDate: minDate, maxDate: maxDate }, false);
                    this.rangeState.selecting = true;
                    this.markRange(this.minDate);
                    this.$nextTick(function () {
                        _this2.handleMouseMove(event);
                    });
                } else if (this.minDate && !this.maxDate) {

                    if (newDate >= this.minDate) {
                        var _maxDate = new Date(newDate.getTime());

                        this.rangeState.selecting = false;
                        this.$emit('pick', {
                            minDate: this.minDate,
                            maxDate: _maxDate
                        });
                    } else {
                        var _minDate = new Date(newDate.getTime());

                        this.rangeState.selecting = false;
                        this.$emit('pick', { minDate: _minDate, maxDate: this.minDate });
                    }
                } else if (!this.minDate) {

                    var _minDate2 = new Date(newDate.getTime());

                    this.$emit('pick', { minDate: _minDate2, maxDate: this.maxDate }, false);
                    this.rangeState.selecting = true;
                    this.markRange(this.minDate);
                }
            } else if (selectionMode === 'day') {
                this.$emit('pick', newDate);
            }
        }
    }
};

var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('table', { staticClass: "date-table", attrs: { "cellspacing": "0", "cellpadding": "0" }, on: { "click": _vm.handleClick, "mousemove": _vm.handleMouseMove } }, [_c('tbody', [_c('tr', [_vm.showWeekNumber ? _c('th') : _vm._e(), _vm._v(" "), _vm._l(_vm.WEEKS, function (week) {
        return _c('th', [_vm._v(_vm._s(week))]);
    })], 2), _vm._v(" "), _vm._l(_vm.rows, function (row) {
        return _c('tr', { staticClass: "date-table__row" }, _vm._l(row, function (cell) {
            return _c('td', { class: _vm.getCellClasses(cell) }, [_c('div', [_c('span', [_vm._v("\n                        " + _vm._s(cell.type === 'today' ? '今' : cell.text) + "\n                    ")])])]);
        }));
    })], 2)]);
};
var __vue_staticRenderFns__ = [];

var __vue_inject_styles__ = undefined;

var __vue_scope_id__ = undefined;

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script === 'function' ? script.options : script) || {};

    component.__file = "DateTable.vue";

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