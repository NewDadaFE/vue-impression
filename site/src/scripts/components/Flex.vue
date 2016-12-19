<template>
    <div
        class="flex"
        :class="[
            getAlignClass(),
            getJustifyClass(),{
            'flex-vertical': direction === 'column',
        }]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'flex',
        props: {
            direction: {
                type: String,
                validator(value) {
                    return ['row', 'column'].indexOf(value) > -1;
                },
            },
            justify: {
                type: String,
                default: 'start',
                validator(value) {
                    return ['start', 'end', 'center', 'between', 'around'].indexOf(value) > -1;
                },
            },
            align: {
                type: String,
                default: 'center',
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
