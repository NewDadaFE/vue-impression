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
    import Sync from '../mixins/sync';

    export default {
        name: 'input-textarea',
        mixins: [Sync],
        props: {
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
        },
        data() {
            return {
                stage: 0,
            };
        },
        watch: {
            currentValue(val) {
                if(val.length > this.maxLength) {
                    this.currentValue = val.substring(0, this.maxLength);
                }
            },
        },
    };
</script>
