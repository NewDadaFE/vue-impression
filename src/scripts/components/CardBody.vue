<template>
    <div class="card-body" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'card-body',
    };
</script>
