<template>
    <div class="stepbar-item">
        <div
            class="stepbar-line"
            :class="{active: state === 'active' || state === 'finished' }"
            v-if="!isFirstChild"></div>
        <div
            class="stepbar-item-addon"
            :class="{[state]: state !== 'default'}">
            <icon name="check" v-if="state === 'finished'"/>
            {{state === 'finished' ? '' : (index + 1)}}
        </div>
        <div
            class="stepbar-item-title"
            :class="{[state]: state !== 'default'}">
            <slot></slot>
        </div>
        <div
            class="stepbar-line"
            :class="{active: state === 'finished' }"
            v-if="!isLastChild"></div>
    </div>
</template>

<script>
    export default {
        name: 'stepbar-item',
        props: {
            description: {
                type: String,
            },
        },
        data() {
            return {
                isFirstChild: false,
                isLastChild: false,
                state: 'default',
                index: 0,
            };
        },
        mounted() {
            let length = this.$parent.$children.length;

            this.index = this.$parent.$children.indexOf(this);

            this.index === 0 && (this.isFirstChild = true);
            (this.index === length - 1) && (this.isLastChild = true);

            switch(true) {
                case this.index === this.$parent.currentValue:
                    this.state = 'active';
                    break;
                case this.index < this.$parent.currentValue:
                    this.state = 'finished';
                    break;
                default:
                    this.state = 'default';
            }
        },
    };
</script>
