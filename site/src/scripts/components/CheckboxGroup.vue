<template>
    <div class="checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'checkbox-group',
        mixins: [Sync],
        methods: {
            optionCheckedHandle(option) {
                const index = this.currentValue.indexOf(option);

                if(index === -1) {
                    this.currentValue.push(option);
                } else {
                    this.currentValue.splice(index, 1);
                }
            },
        },
        created() {
            this.$on('optionChecked', this.optionCheckedHandle);
        },
    };
</script>
