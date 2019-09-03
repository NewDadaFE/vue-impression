<template>
	<div
	   v-show="visible"
	   class="date-range-picker">
    
        <div class="header">
            <div class="header-cnt">
                <btn
                    @click="prevMonth"
                    class="btn btn-left">
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
            :date="date"
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
    import Btn from '../Button';
    import Icon from '../Icon';
    import {
        formatDate,
        isDate,
        prevMonth,
        nextMonth,
    } from '../../utils/date';

    const DayMilliseconds = 24 * 60 * 60 * 1000;

    export default {

        computed: {
            dateLabel() {
                /*eslint-disable*/
                return this.date.getFullYear() + '年' + (this.date.getMonth() + 1) + '月';
                /*eslint-disable*/
            },
        },

        data() {
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
                    column: null,
                },
                visible: '',
                firstDayOfWeek: 1,
                dateDisable: false,
                prevPickedDisableDays: 0,
                nextPickedDisableDays: 0,
            };
        },

        methods: {
            disabledDate(time) {
                if(this.dateDisable) {
                    if(this.maxDate) {
                        return false;
                    }

                    if(this.minDate) {
                        let prePickedDisabled = time.getTime()
                                                <=
                                                (new Date(this.minDate).getTime() - this.prevPickedDisableDays * DayMilliseconds);
                        let nextPickedDisabled = time.getTime()
                                                >=
                                                (new Date(this.minDate).getTime() + this.nextPickedDisableDays * DayMilliseconds);

                        return prePickedDisabled || nextPickedDisabled;
                    }
                }

                return false;
            },

            handleChangeRange(val) {
                this.minDate = val.minDate;
                this.maxDate = val.maxDate;
                this.rangeState = val.rangeState;
            },

            handleRangePick(val, close = true) {
                const minDate = val.minDate;
                const maxDate = val.maxDate;

                if(this.maxDate === maxDate && this.minDate === minDate) {
                    return;
                }
                this.onPick && this.onPick(val, formatDate);

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
                this.date = prevMonth(this.date);
            },

            nextMonth() {
                this.date = nextMonth(this.date);
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

        components: { DateTable, Btn, Icon },
    };
</script>
