<template>
    <div
        class="cell selector-option"
        :class="{
            'active': isActive(),
            'cell-disabled': $parent.disabled }"
        @click="clickHandle">
        <span slot="header">
        </span>
        <span class="cell-body">
            <slot></slot>
        </span>
        <icon
            :name="checkedIcon"
            size="lg"
            class="selector-icon" />
    </div>
</template>

<script>
    import Emitter from '../mixins/emitter';

    export default {
        name: 'selector-option',
        mixins: [Emitter],
        props: {
            checkedIcon: {
                type: String,
                default: 'check',
            },
            value: {},
        },
        methods: {
            clickHandle() {
                this.dispatch('selector', 'optionClick', this);
            },
            isActive() {
                if(this.$parent.multiple) {
                    return this.$parent.currentValue.indexOf(this.value) !== -1;
                }

                return this.$parent.currentValue === this.value;
            },
        },
    };
</script>
