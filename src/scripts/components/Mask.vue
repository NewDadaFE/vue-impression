<template>
    <transition :name="transition">
        <div
            class="mask"
            v-show="$parent.currentValue"
            @click="clickable && ($parent.currentValue = false)">
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'mask-layer',
        props: {
            transition: {
                type: String,
                default: 'fade',
            },
            clickable: {
                type: Boolean,
                default: true,
            },
        },
    };
</script>
