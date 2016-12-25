<template>
    <div
        class="flex"
        :class="[
            getAlignClass(),
            getJustifyClass(),
            {
                'flex-vertical': direction === 'column',
            }]">
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
                    return ['top', 'bottom', 'center'].indexOf(value) > -1;
                },
            },
        },
        methods: {
            // 对齐方式
            getAlignClass() {
                let align = this.align;

                if(this.direction === 'row') {
                    !align && (align = 'center');
                }

                return {
                    top: 'flex-align-top',
                    center: 'flex-align-middle',
                    bottom: 'flex-align-bottom',
                }[align];
            },
            // 内容排版
            getJustifyClass() {
                return {
                    start: 'flex-justify-start',
                    end: 'flex-justify-end',
                    center: 'flex-justify-center',
                    between: 'flex-justify-between',
                    around: 'flex-justify-around',
                }[this.justify];
            },
        },
    };
</script>
