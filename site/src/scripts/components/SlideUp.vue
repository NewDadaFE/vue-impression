<template>
    <div>
        <transition :name="transition">
            <div v-show="currentValue" class="slideup">
                <slot></slot>
            </div>
        </transition>
        <transition name="fade">
            <div class="mask" v-show="currentValue" @click="currentValue = false"></div>
        </transition>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'slideup',
        mixins: [Sync],
        props: {
            transition: {
                type: String,
                default: 'slide-up',
            },
        },
        watch: {
            currentValue(val) {
                !val && (this.$emit('close'));
            },
        },
    };
</script>
