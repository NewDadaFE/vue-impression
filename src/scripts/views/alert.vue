<template>
    <div>
        <group-title>alert</group-title>
        <group>
            <cell @click="showHandle">
                <icon class="text-muted" name="commenting-o" left size="lg" />
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
                    title: '<h5 class="text-success">提示</h5>',
                    message: '这是Vue 2.0组件库！',
                });
            },
        },
    };

</script>
