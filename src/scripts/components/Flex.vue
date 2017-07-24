<template>
    <div
        class="flex"
        :class="[
            alignClass,
            {[`flex-justify-${justify}`]: justify},
            {'flex-vertical': direction === 'column'}
            ]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'flex',
        props: {
            // 方向
            direction: {
                type: String,
                default: 'row',
                validator(value) {
                    return ['row', 'column'].indexOf(value) > -1;
                },
            },
            // 排版
            justify: {
                type: String,
                validator(value) {
                    return ['start', 'end', 'center', 'between', 'around'].indexOf(value) > -1;
                },
            },
            // 对齐
            align: {
                type: String,
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) > -1;
                },
            },
        },
        computed: {
            alignClass() {
                let align = this.align;

                if(this.direction === 'row' && !align) {
                    align = 'middle';
                }

                return `flex-align-${align}`;
            },
        },
    };
</script>
