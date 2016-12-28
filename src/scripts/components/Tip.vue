<template>
    <div class="tip" @click="$emit('click')">
        <hrule :type="type" :theme="theme" />
        <span class="tip-label" :class="{[`text-${theme}`]: theme}">
            <slot></slot>
        </span>
        <hrule :type="type" :theme="theme" />
    </div>
</template>

<script>
    export default {
        name: 'tip',
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
