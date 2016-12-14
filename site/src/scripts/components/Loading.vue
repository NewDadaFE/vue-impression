<template>
    <svg
        class="loading"
        :class="{
            [`loading-${size}`]: size,
            [`loading-${theme}`]: theme,
        }"
        viewBox="25 25 50 50">
        <circle class="loading-path" cx="50" cy="50" r="23" fill="none"/>
    </svg>
</template>

<script>
    export default {
        name: 'loading',
        props: {
            size: {
                type: String,
                validator(value) {
                    return ['sm', 'lg'].indexOf(value) > -1;
                },
            },
            theme: {
                type: String,
                validator(value) {
                    return ['primary', 'secondary'].indexOf(value) > -1;
                },
            },
        },
    };
</script>
