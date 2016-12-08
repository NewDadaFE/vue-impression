<template>
    <div class="badge">
        <div class="badge-addon" :class="'bg-' + theme">{{content}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'badge',
        props: {
            content: {},
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'secondary', 'success', 'warning', 'danger'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
