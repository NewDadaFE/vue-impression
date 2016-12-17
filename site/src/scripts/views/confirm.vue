<template>
    <div>
        <group-title>confirm</group-title>
        <group>
            <cell @click="showHandle(false)">
                <icon class="text-muted" name="question-circle-o" left size="lg" />
                confirm
            </cell>
            <cell @click="showHandle(true)">
                <icon class="text-muted" name="question-circle-o" left size="lg" />
                inverse
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            showHandle(inverse) {
                this.$confirm({
                    inverse,
                    message: '这是Vue 2.0组件库！',
                });
            },
        },
    };
</script>
