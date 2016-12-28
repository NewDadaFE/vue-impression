<template>
    <div
        @click="$emit('click')"
        class="media"
        :class="[getAlignClass()]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'media',
        props: {
            // 对齐
            align: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'center'].indexOf(value) > -1;
                },
            },
        },
        methods: {
            getAlignClass() {
                return {
                    top: 'flex-align-top',
                    center: 'flex-align-middle',
                    bottom: 'flex-align-bottom',
                }[this.align];
            },
        },
    };
</script>
