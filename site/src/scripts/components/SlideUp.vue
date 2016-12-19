<template>
    <div>
        <transition :name="transitionName">
            <div v-show="currentValue" class="slide-up">
                <div class="slide-up-header" v-if="$slots.header">
                    <slot name="header"></slot>
                </div>
                <div class="slide-up-body" :class="{'no-padding': noPadding}">
                    <slot></slot>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="currentValue" @click="currentValue = false"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'slide-up',
        props: {
            value: {},
            noPadding: Boolean,
            transitionName: {
                type: String,
                default: 'slide-up',
            },
        },
        data() {
            return {
                currentValue: false,
            };
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
                !val && (this.$emit('close'));
            },
        },
    };
</script>
