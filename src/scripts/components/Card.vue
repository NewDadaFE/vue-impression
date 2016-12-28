<template>
    <div class="card" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'card',
    };
</script>
