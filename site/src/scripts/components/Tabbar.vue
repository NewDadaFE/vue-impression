<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tabbar',
        props: {
            value: {},
        },
    };
</script>
