<template>
    <hr class="hr" :class="{
        [`border-${type}`]: type,
        [`border-${theme}`]: theme,
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
            theme: {
                type: String,
                validator(value) {
                    return ['primary', 'secondary', 'warning', 'success', 'danger'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
