<template>
    <div>
        <transition name="slide-left">
            <div v-show="currentValue" class="sidelip">
                <slot></slot>
            </div>
        </transition>
        <mask-layer />
    </div>
</template>

<script>
    export default {
        name: 'sidelip',
        props: {
            value: {},
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
