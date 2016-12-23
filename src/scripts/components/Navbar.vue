<template>
    <div class="navbar" :class="'navbar-' + theme">
        <div class="navbar-header">
            <slot></slot>
        </div>
        <div class="navbar-body" v-if="$slots.body">
            <slot name="body"></slot>
        </div>
        <div class="navbar-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        props: {
            // 主题
            theme: {
                type: String,
                default: 'primary',
                validator(value) {
                    return ['primary', 'default'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
