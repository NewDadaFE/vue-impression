

import dateUtil from './dateUtil';

var weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

var newArray = function newArray(start, end) {
    var result = [];

    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

export var toDate = function toDate(date) {
    return isDate(date) ? new Date(date) : null;
};

export var isDate = function isDate(date) {
    if (date === null || date === undefined) return false;
    if (isNaN(new Date(date).getTime())) return false;
    if (Array.isArray(date)) return false;

    return true;
};

export var isDateObject = function isDateObject(val) {

    return val instanceof Date;
};

export var formatDate = function formatDate(date, format) {
    date = toDate(date);
    if (!date) return '';

    return dateUtil.format(date, format || 'yyyy-MM-dd');
};

export var parseDate = function parseDate(string, format) {

    return dateUtil.parse(string, format || 'yyyy-MM-dd');
};

export var getDayCountOfMonth = function getDayCountOfMonth(year, month) {
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {

            return 29;
        } else {

            return 28;
        }
    }

    return 31;
};

export var getDayCountOfYear = function getDayCountOfYear(year) {
    var isLeapYear = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
    return isLeapYear ? 366 : 365;
};

export var getFirstDayOfMonth = function getFirstDayOfMonth(date) {
    var temp = new Date(date.getTime());
    temp.setDate(1);

    return temp.getDay();
};

export var prevDate = function prevDate(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

export var nextDate = function nextDate(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;


    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

export var getStartDateOfMonth = function getStartDateOfMonth(year, month) {
    var result = new Date(year, month, 1);
    var day = result.getDay();

    if (day === 0) {
        return prevDate(result, 7);
    } else {
        return prevDate(result, day);
    }
};

export var getWeekNumber = function getWeekNumber(src) {
    if (!isDate(src)) return null;
    var date = new Date(src.getTime());
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    var week1 = new Date(date.getFullYear(), 0, 4);

    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

export var getRangeHours = function getRangeHours(ranges) {
    var hours = [];
    var disabledHours = [];

    (ranges || []).forEach(function (range) {
        var value = range.map(function (date) {
            return date.getHours();
        });

        disabledHours = disabledHours.concat(newArray(value[0], value[1]));
    });

    if (disabledHours.length) {
        for (var i = 0; i < 24; i++) {
            hours[i] = disabledHours.indexOf(i) === -1;
        }
    } else {
        for (var _i = 0; _i < 24; _i++) {
            hours[_i] = false;
        }
    }

    return hours;
};

export var range = function range(n) {

    return Array.apply(null, { length: n }).map(function (_, n) {
        return n;
    });
};

export var modifyDate = function modifyDate(date, y, m, d) {

    return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

export var modifyTime = function modifyTime(date, h, m, s) {

    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

export var modifyWithTimeString = function modifyWithTimeString(date, time) {
    if (date == null || !time) {
        return date;
    }
    time = parseDate(time, 'HH:mm:ss');

    return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds());
};

export var clearTime = function clearTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export var clearMilliseconds = function clearMilliseconds(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

export var limitTimeRange = function limitTimeRange(date, ranges) {
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HH:mm:ss';

    if (ranges.length === 0) return date;
    var normalizeDate = function normalizeDate(date) {
        return dateUtil.parse(dateUtil.format(date, format), format);
    };
    var ndate = normalizeDate(date);
    var nranges = ranges.map(function (range) {
        return range.map(normalizeDate);
    });
    if (nranges.some(function (nrange) {
        return ndate >= nrange[0] && ndate <= nrange[1];
    })) return date;

    var minDate = nranges[0][0];
    var maxDate = nranges[0][0];

    nranges.forEach(function (nrange) {
        minDate = new Date(Math.min(nrange[0], minDate));
        maxDate = new Date(Math.max(nrange[1], minDate));
    });

    var ret = ndate < minDate ? minDate : maxDate;

    return modifyDate(ret, date.getFullYear(), date.getMonth(), date.getDate());
};

export var timeWithinRange = function timeWithinRange(date, selectableRange, format) {
    var limitedDate = limitTimeRange(date, selectableRange, format);
    return limitedDate.getTime() === date.getTime();
};

export var changeYearMonthAndClampDate = function changeYearMonthAndClampDate(date, year, month) {
    var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));

    return modifyDate(date, year, month, monthDate);
};

export var prevMonth = function prevMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();

    return month === 0 ? changeYearMonthAndClampDate(date, year - 1, 11) : changeYearMonthAndClampDate(date, year, month - 1);
};

export var nextMonth = function nextMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth();

    return month === 11 ? changeYearMonthAndClampDate(date, year + 1, 0) : changeYearMonthAndClampDate(date, year, month + 1);
};

export var prevYear = function prevYear(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var year = date.getFullYear();
    var month = date.getMonth();

    return changeYearMonthAndClampDate(date, year - amount, month);
};

export var nextYear = function nextYear(date) {
    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var year = date.getFullYear();
    var month = date.getMonth();

    return changeYearMonthAndClampDate(date, year + amount, month);
};

export var extractDateFormat = function extractDateFormat(format) {
    return format.replace(/\W?m{1,2}|\W?ZZ/g, '').replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '').trim();
};

export var extractTimeFormat = function extractTimeFormat(format) {
    return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '').trim();
};