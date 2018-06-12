<template>
	<div
	   v-show="visible"
	   class="date-range-picker">
    
        <div class="header">
            <div class="header-cnt">
                <btn
                    class="btn btn-left"
                    @click="prevMonth">
                    <icon name="angle-left" left/>
                </btn>
                <btn
                    @click="nextMonth"
                    class="btn btn-right">
                    <icon name="angle-right" right/>
                </btn>
                <div>{{ dateLabel }}</div>
            </div>
        </div>
        <date-table
            selection-mode="range"
            :date="leftDate"
            :default-value="defaultValue"
            :min-date="minDate"
            :max-date="maxDate"
            :range-state="rangeState"
            :disabled-date="disabledDate"
            @changerange="handleChangeRange"
            :first-day-of-week="firstDayOfWeek"
            @pick="handleRangePick">
        </date-table>
	</div>
</template>

<script type="text/babel">
    import DateTable from './DateTable';
    import {
        formatDate,
        parseDate,
        isDate,
        modifyDate,
        modifyWithTimeString,
        prevMonth,
        nextMonth,
        extractDateFormat,
    } from '../../utils/date';

    const DayMilliseconds = 24 * 60 * 60 * 1000;
    const advanceDate = (date, amount) => {
        return new Date(new Date(date).getTime() + amount);
    };

    const calcDefaultValue = defaultValue => {
        if(Array.isArray(defaultValue)) {
            return [new Date(defaultValue[0]), new Date(defaultValue[1])];
        } else if(defaultValue) {
            return [new Date(defaultValue), advanceDate(defaultValue, 24 * 60 * 60 * 1000)];
        }

        return [new Date(), advanceDate(Date.now(), 24 * 60 * 60 * 1000)];
    };

    export default {

        computed: {
            dateLabel() {
                /*eslint-disable*/
                return this.leftDate.getFullYear() + '年' + (this.leftDate.getMonth() + 1) + '月';
                /*eslint-disable*/
            },

            dateYear() {
                return this.dateLabel.getFullYear();
            },

            dateMonth() {
                return this.dateLabel.getMonth();
            },

            dateMonthDate() {
                return this.dateLabel.getDate();
            },

            dateFormat() {
                if(this.format) {
                    return extractDateFormat(this.format);
                }

                return 'yyyy-MM-dd';
            },
        },

        data() {
            return {
                popperClass: '',
                value: [],
                defaultValue: null,
                defaultTime: null,
                minDate: '',
                maxDate: '',
                leftDate: new Date(),
                rightDate: nextMonth(new Date()),
                rangeState: {
                    endDate: null,
                    selecting: false,
                    row: null,
                    column: null,
                },
                visible: '',
                firstDayOfWeek: 1,
                format: '',
                dateDisable: false,
                prevPickedDisableDays: 0,
                nextPickedDisableDays: 0,
            };
        },

        watch: {
            /*eslint-disable*/
            minDate(val) {
                this.$nextTick(() => {
                    if(this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
                        const format = 'HH:mm:ss';

                        this.$refs.maxTimePicker.selectableRange = [
                            [
                                parseDate(formatDate(this.minDate, format), format),
                                parseDate('23:59:59', format)
                            ]
                        ];
                    }
                });
                if(val && this.$refs.minTimePicker) {
                    this.$refs.minTimePicker.date = val;
                    this.$refs.minTimePicker.value = val;
                }
            },

            maxDate(val) {
                if(val && this.$refs.maxTimePicker) {
                    this.$refs.maxTimePicker.date = val;
                    this.$refs.maxTimePicker.value = val;
                }
            },
            /*eslint-disable*/

            value(newVal) {
                if(!newVal) {
                    this.minDate = null;
                    this.maxDate = null;
                } else if(Array.isArray(newVal)) {
                    this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
                    this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
                    // NOTE: currently, maxDate = minDate + 1 month
                    //       should allow them to be set individually in the future
                    if(this.minDate) {
                        this.leftDate = this.minDate;
                        if(this.unlinkPanels && this.maxDate) {
                            const minDateYear = this.minDate.getFullYear();
                            const minDateMonth = this.minDate.getMonth();
                            const maxDateYear = this.maxDate.getFullYear();
                            const maxDateMonth = this.maxDate.getMonth();

                            this.rightDate = minDateYear === maxDateYear &&
                                                            minDateMonth === maxDateMonth
                                                                ? nextMonth(this.maxDate)
                                                                : this.maxDate;
                        } else {
                            this.rightDate = nextMonth(this.leftDate);
                        }
                    } else {
                        this.leftDate = calcDefaultValue(this.defaultValue)[0];
                        this.rightDate = nextMonth(this.leftDate);
                    }
                }
            },

            defaultValue(val) {
                if(!Array.isArray(this.value)) {
                    const [left, right] = calcDefaultValue(val);

                    this.leftDate = left;
                    this.rightDate = val && val[1] && this.unlinkPanels
                        ? right
                        : nextMonth(this.leftDate);
                }
            },
        },

        methods: {
            disabledDate(time) {
                if(this.dateDisable) {
                    if(this.maxDate) {
                        return false;
                    }

                    if(this.minDate) {
                        let prePickedDisabled = time.getTime()
                                                <
                                                (new Date(this.minDate).getTime() - this.prevPickedDisableDays * DayMilliseconds);
                        let nextPickedDisabled = time.getTime()
                                                >
                                                (new Date(this.minDate).getTime() + this.nextPickedDisableDays * DayMilliseconds);

                        return prePickedDisabled || nextPickedDisabled;
                    }
                }

                return false;
            },

            handleClear() {
                this.minDate = null;
                this.maxDate = null;
                this.leftDate = calcDefaultValue(this.defaultValue)[0];
                this.rightDate = nextMonth(this.leftDate);
                this.$emit('pick', null);
            },

            handleChangeRange(val) {
                this.minDate = val.minDate;
                this.maxDate = val.maxDate;
                this.rangeState = val.rangeState;
            },

            handleDateChange(event, type) {
                const value = event.target.value;
                const parsedValue = parseDate(value, this.dateFormat);

                if(parsedValue) {
                    if(type === 'min') {
                        this.minDate = modifyDate(
                                            this.minDate,
                                            parsedValue.getFullYear(),
                                            parsedValue.getMonth(),
                                            parsedValue.getDate());
                        if(this.minDate > this.maxDate) {
                            this.maxDate = this.minDate;
                        }
                    } else {
                        this.maxDate = modifyDate(
                                            this.maxDate,
                                            parsedValue.getFullYear(),
                                            parsedValue.getMonth(),
                                            parsedValue.getDate());
                        if(this.maxDate < this.minDate) {
                            this.minDate = this.maxDate;
                        }
                    }
                }
            },

            handleRangePick(val, close = true) {
                const defaultTime = this.defaultTime || [];
                const minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
                const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);

                if(this.maxDate === maxDate && this.minDate === minDate) {
                    return;
                }
                this.onPick && this.onPick(val);
                this.maxDate = maxDate;
                this.minDate = minDate;

                // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
                setTimeout(() => {
                    this.maxDate = maxDate;
                    this.minDate = minDate;
                }, 10);
                if(!close) {
                    return;
                }
                this.handleConfirm();
            },

            prevMonth() {
                this.leftDate = prevMonth(this.leftDate);
            },

            nextMonth() {
                this.leftDate = nextMonth(this.leftDate);
            },

            handleConfirm() {
                this.$emit('pick', [this.minDate, this.maxDate]);
            },

            isValidValue(value) {
                return Array.isArray(value) &&
                    value && value[0] && value[1] &&
                    isDate(value[0]) && isDate(value[1]) &&
                    value[0].getTime() <= value[1].getTime() && (
                    typeof this.disabledDate === 'function'
                        ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
                        : true
                );
            },
        },

        components: { DateTable },
    };
</script>
