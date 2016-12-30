<template>
    <div class="slideup-body" :class="{'no-padding': noPadding}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'slideup-body',
        props: {
            noPadding: Boolean,
        },
    };
</script>
=
