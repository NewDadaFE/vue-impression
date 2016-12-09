<template>
    <div class="radio-group">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'radio-group',
        mixins: [Sync],
    };
</script>
