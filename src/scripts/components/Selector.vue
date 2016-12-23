<template>
    <div class="selector">
        <slot></slot>
    </div>
</template>

<script>
    import Sync from '../mixins/sync';
    import Select from '../mixins/select';

    export default {
        name: 'selector',
        mixins: [Sync, Select],
    };
</script>
