<template>
    <div>
        <group-title>alert</group-title>
        <group>
            <cell @click="showHandle">
                <icon class="fa-fw text-muted" name="commenting-o" left size="lg" />
                alert
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            showHandle() {
                this.$alert({
                    message: '这是Vue 2.0组件库！',
                });
            },
        },
    };
</script>
