<template>
    <div>
        <group-title>loading</group-title>
        <group>
            <cell @click="showLoadingHandle">
                <icon class="text-muted" name="spinner" left size="lg" />
                toggle
            </cell>
        </group>
    </div>
</template>
<script>
    export default{
        methods: {
            showLoadingHandle() {
                this.$loading.toggle();
            },
        },
    };
</script>
