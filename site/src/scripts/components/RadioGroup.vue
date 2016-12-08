<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'radio-group',
        mixins: [Sync],
        data() {
            return {
                currentValue: this.value || '',
            };
        },
        methods: {
            optionCheckedHandle(option) {
                if(this.currentValue !== option) {
                    this.currentValue = option;
                }
            },
        },
        created() {
            this.$on('optionChecked', this.optionCheckedHandle);
        },
    };
</script>
