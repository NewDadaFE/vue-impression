<template>
    <div>
        <transition name="slide-left">
            <div v-show="currentValue" class="sidelip">
                <slot></slot>
            </div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="currentValue" @click="currentValue = false"></div>
        </transition>
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
