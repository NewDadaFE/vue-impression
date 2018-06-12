<template>
    <div
        class="date-picker"
        :class="{
            [`date-picker-${size}`]: size,
            [`date-picker-${theme}`]: theme,
        }">
    </div>
</template>

<script>
    import Vue from 'vue';
    // import { formatDate } from '../../utils/date';
    import Emitter from '../../mixins/emitter';

    /*eslint-disable*/
    /*
     * Considers:
     *   1. Date object
     *   2. date string
     *   3. array of 1 or 2
     */
    const valueEquals = function(a, b) {
        // considers Date object and string
        const dateEquals = function(a, b) {
            const aIsDate = a instanceof Date;
            const bIsDate = b instanceof Date;

            if(aIsDate && bIsDate) {
                return a.getTime() === b.getTime();
            }
            if(!aIsDate && !bIsDate) {
                return a === b;
            }

            return false;
        };

        const aIsArray = a instanceof Array;
        const bIsArray = b instanceof Array;

        if(aIsArray && bIsArray) {
            if(a.length !== b.length) {
                return false;
            }

            return a.every((item, index) => dateEquals(item, b[index]));
        }
        if(!aIsArray && !bIsArray) {
            return dateEquals(a, b);
        }

        return false;
    };
    /*eslint-disable*/

    const isString = function(val) {
        return typeof val === 'string' || val instanceof String;
    };

    /*eslint-disable*/
    const validator = function(val) {
        // either: String, Array of String, null / undefined
        return (
            val === null ||
            val === undefined ||
            isString(val) ||
            (Array.isArray(val) && val.length === 2 && val.every(isString))
        );
    };
    /*eslint-disable*/

    export default {
        mixins: [Emitter],

        props: {
            // 主题
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'default'].indexOf(value) > -1;
                },
            },
            // 尺寸
            size: {
                type: String,
                default: 'base',
                validator(value) {
                    return ['base', 'sm', 'lg'].indexOf(value) > -1;
                },
            },

            dateDisable: {
                type: Boolean,
                default: false,
            },
            prevPickedDisableDays: {
                type: Number,
                default: 0,
            },
            nextPickedDisableDays: {
                type: Number,
                default: 0,
            },

            value: {},
            defaultValue: {},
            defaultTime: {},
            rangeSeparator: {
                default: '-',
            },
            pickerAlwaysShow: {
                type: Boolean,
                default: true,
            },
            onPick: {},
        },

        data() {
            return {
                pickerVisible: false,
                showClose: false,
                userInput: null,
                unwatchPickerOptions: null,
            };
        },

        watch: {
            pickerVisible(val) {
                if(val) {
                    this.showPicker();
                } else {
                    this.hidePicker();
                }
            },
            value: {
                immediate: true,
                handler(val) {
                    if(this.picker) {
                        this.picker.value = val;
                        this.picker.selectedDate = Array.isArray(val) ? val : [];
                    }
                },
            },
            defaultValue(val) {
                // NOTE: should eventually move to jsx style picker + view ?
                if(this.picker) {
                    this.picker.defaultValue = val;
                }
            },
        },

        computed: {
            selectionMode() {
                if(this.type === 'week') {
                    return 'week';
                } else if(this.type === 'month') {
                    return 'month';
                } else if(this.type === 'year') {
                    return 'year';
                } else if(this.type === 'dates') {
                    return 'dates';
                }

                return 'day';
            },

            pickerSize() {
                return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            },

            pickerDisabled() {
                return this.disabled || {}.disabled;
            },
        },

        created() {
            this.pickerVisible = true;
        },

        methods: {
            hidePicker() {
                if(this.picker) {
                    this.picker.resetView && this.picker.resetView();
                    this.pickerVisible = this.picker.visible = false;
                }
            },

            showPicker() {
                if(this.$isServer) return;
                if(!this.picker) {
                    this.mountPicker();
                }
                this.pickerVisible = this.picker.visible = true;

                this.picker.value = this.value;
                this.picker.resetView && this.picker.resetView();

                this.$nextTick(() => {
                    this.picker.adjustSpinners && this.picker.adjustSpinners();
                });
            },

            mountPicker() {
                this.picker = new Vue(this.view).$mount();
                this.picker.defaultValue = this.defaultValue;
                this.picker.defaultTime = this.defaultTime;

                this.picker.selectedDate = Array.isArray(this.value) && this.value || [];
                this.$watch('format', format => {
                    this.picker.format = format;
                });

                this.picker.dateDisable = this.dateDisable;
                this.picker.prevPickedDisableDays = this.prevPickedDisableDays;
                this.picker.nextPickedDisableDays = this.nextPickedDisableDays;

                this.$el.appendChild(this.picker.$el);
                this.picker.resetView && this.picker.resetView();

                this.picker.onPick = this.onPick;

                this.picker.$on('dodestroy', this.doDestroy);
                this.picker.$on('pick', (date = '', visible = this.pickerAlwaysShow) => {
                    this.pickerVisible = this.picker.visible = visible;
                    this.picker.resetView && this.picker.resetView();
                });

                this.picker.$on('select-range', (start, end, pos) => {
                    if(this.refInput.length === 0) return;
                    if(!pos || pos === 'min') {
                        this.refInput[0].setSelectionRange(start, end);
                        this.refInput[0].focus();
                    } else if(pos === 'max') {
                        this.refInput[1].setSelectionRange(start, end);
                        this.refInput[1].focus();
                    }
                });
            },

            unmountPicker() {
                if(this.picker) {
                    this.picker.$destroy();
                    this.picker.$off();
                    if(typeof this.unwatchPickerOptions === 'function') {
                        this.unwatchPickerOptions();
                    }
                    this.picker.$el.parentNode.removeChild(this.picker.$el);
                }
            },
        },
    };
</script>
