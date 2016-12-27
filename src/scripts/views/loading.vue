<template>
    <div>
        <group-title>loading</group-title>
        <group>
            <cell @click="showLoadingHandle">
                <icon class="text-muted" name="spinner" left size="lg" />
                show
            </cell>
            <cell @click="showLoadingMsgHandle('初始化中')">
                <icon class="text-muted" name="pencil" left size="lg" />
                message
            </cell>
        </group>
    </div>
</template>
<script>
    export default{
        methods: {
            showLoadingHandle() {
                this.$loading.toggle();
                setTimeout(() => {
                    this.$loading.toggle();
                }, 3000);
            },
            showLoadingMsgHandle(message) {
                this.$loading.toggle(message);

                setTimeout(() => {
                    this.$loading.toggle();
                }, 3000);
            },
        },
    };
</script>
