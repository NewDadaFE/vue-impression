<template>
    <div
        class="media"
        :class="{
            'flex-align-top': align === 'flex-start',
            'flex-align-middle': align === 'center',
            'flex-align-bottom': align === 'flex-end',
        }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'media',
        props: {
            align: {
                type: String,
                default: 'center',
                validator(value) {
                    return ['center', 'flex-start', 'flex-end'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
