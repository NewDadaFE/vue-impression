<template>
    <div>
        <transition name="toast-fade">
            <div
                v-show="currentValue"
                class="toast"
                :class="[
                    'toast-' + position,
                    {
                        'toast-lg': type,
                    }
                ]">
                <div class="toast-icon" v-if="icon">
                    <icon :name="icon"></icon>
                </div>
                <loading v-else-if="type === 'loading'" />
                <div class="toast-message" v-html="message"></div>
            </div>
        </transition>
        <mask-layer :clickable="closeOnClickMask" class="bg-transparent" v-if="!!type"/>
    </div>
</template>

<script>
    export default {
        name: 'toast',
        props: {
            message: String,
            position: {
                type: String,
                default: 'bottom',
                validator(value) {
                    return ['bottom', 'top', 'center'].indexOf(value) > -1;
                },
            },
            type: {
                type: String,
                validator(value) {
                    return ['success', 'error', 'warning', 'loading'].indexOf(value) > -1;
                },
            },
            closeOnClickMask: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                currentValue: false,
            };
        },
        computed: {
            icon() {
                switch(this.type) {
                    case 'error':
                        return 'exclamation-circle';
                    case 'success':
                        return 'check';
                    case 'warning':
                        return 'exclamation-triangle';
                    default:
                        return null;
                }
            },
        },
    };
</script>
