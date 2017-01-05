<template>
    <div>
        <transition :name="transition">
            <div v-show="currentValue" class="slideup">
                <slot></slot>
            </div>
        </transition>
        <mask-layer :clickable="closeOnClickMask" />
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
            closeOnClickMask: {
                type: Boolean,
                default: true,
            },
        },
        watch: {
            currentValue(val) {
                val ? this.$emit('show') : this.$emit('close');
            },
        },
    };
</script>
