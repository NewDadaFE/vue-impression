<template>
    <div>
        <transition name="slide">
            <div v-show="currentValue" class="slide-up" @click.self="$emit('input', false)">
                <div class="slide-up-header" v-if="$slots.header">
                    <slot name="header"></slot>
                </div>
                <div class="slide-up-body">
                    <slot></slot>
                </div>
            </div>
        </transition>
        <div class="mask" v-show="currentValue" @click="currentValue = false"></div>
    </div>
</template>

<script>
    export default {
        name: 'slide-up',
        props: {
            onClick: {},
            value: {},
        },
        data() {
            return {
                currentValue: false,
            };
        },
        methods: {
            maskClickHandle() {
                this.onClick && this.onClick();
            },
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
