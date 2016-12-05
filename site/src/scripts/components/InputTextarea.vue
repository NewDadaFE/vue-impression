<template>
    <div class="textarea">
        <textarea
            v-model="currentValue"
            :disabled="disabled"
            :placeholder="placeholder"
            class="textarea-input"
            :rows="rows"></textarea>
        <div class="textarea-counter" v-if="countable">{{currentValue.length}}/{{maxLength}}</div>
    </div>
</template>

<script>
    export default {
        name: 'input-textarea',
        props: {
            disabled: Boolean,
            placeholder: String,
            countable: Boolean,
            maxLength: {
                type: Number,
                default: 200,
            },
            rows: {
                type: Number,
                default: 4,
            },
            value: {},
        },
        data() {
            return {
                stage: 0,
                currentValue: this.value || '',
            };
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                if(this.countable && val.length > this.maxLength) {
                    this.currentValue = val.substring(0, this.maxLength);
                }

                this.$emit('input', this.currentValue);
            },
        },
    };
</script>
