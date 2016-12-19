<template>
    <label class="toggle">
        <input
            type="checkbox"
            class="toggle-input"
            :disabled="disabled"
            v-model="currentValue">
        <span class="toggle-addon">
            <i />
        </span>
    </label>
</template>

<script>
    import Sync from '../mixins/sync';

    export default {
        name: 'toggle',
        mixins: [Sync],
    };
</script>
