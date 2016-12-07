<template>
    <hr class="hr" :class="{
        ['border-' + type]: type,
    }">
</template>

<script>
    export default {
        name: 'hrule',
        props: {
            type: {
                type: String,
                validator(value) {
                    return ['dashed', 'dotted'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
