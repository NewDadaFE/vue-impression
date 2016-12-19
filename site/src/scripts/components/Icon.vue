<template>
    <i
        @click="$emit('click')"
        class="fa"
        :class="[
            'fa-' + name,
            {
                ['fa-' + size]: size,
                'gap-left': left,
                'gap-right': right,
            }
        ]"></i>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            left: Boolean,
            right: Boolean,
            name: {
                type: String,
                required: true,
            },
            size: {
                type: String,
                validator(value) {
                    return ['lg', '2x', '3x', '4x', '5x'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
