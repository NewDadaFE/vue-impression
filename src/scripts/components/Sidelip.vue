<template>
    <div @click="$emit('click')">
        <transition :name="transition">
            <div v-show="currentValue" class="sidelip">
                <slot></slot>
            </div>
        </transition>
        <mask-layer :clickable="closeOnClickMask" />
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'sidelip',
        mixins: [Sync],
        props: {
            transition: {
                type: String,
                default: 'slide-left',
            },
            closeOnClickMask: {
                type: Boolean,
                default: true,
            },
        },
        watch: {
            currentValue(val) {
                !val && (this.$emit('close'));
            },
        },
    };
</script>
