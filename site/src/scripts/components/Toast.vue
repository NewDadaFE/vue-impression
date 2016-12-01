<template>
    <div
        v-show="visible"
        class="toast"
        :class="[
            'toast-' + position,
            {
                'toast-lg': icon,
            }
        ]">
        <div class="toast-icon" v-if="icon">
            <icon :name="icon"></icon>
        </div>
        {{message}}
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
                default: 'default',
                validator(value) {
                    return ['default', 'success', 'error', 'warning', 'question'].indexOf(value) > -1;
                },
            },
        },
        data() {
            return {
                visible: false,
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
                    case 'question':
                        return 'question-circle';
                    default:
                        return null;
                }
            },
        },
    };
</script>
