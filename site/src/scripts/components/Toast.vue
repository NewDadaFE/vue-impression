<template>
    <div
        class="toast"
        :class="[
            'toast-' + position,
            {
                'toast-lg': $slots.icon,
            }
        ]">
        <div class="toast-icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'toast',
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['bottom', 'top', 'center'].indexOf(value) > -1;
                },
            },
            duration: {
                type: Number,
                default: 2000,
            },
        },
    };
</script>
