<template>
    <div>
        <group-title>theme</group-title>
        <group>
            <cell>
                <btn theme="primary" @click="clickHandle('Vue 2.0')">primary</btn>
                <btn theme="secondary">secondary</btn>
                <btn theme="default">default</btn>
            </cell>
        </group>
        <group-title>hollow</group-title>
        <group>
            <cell class="bg-inverse">
                <btn hollow theme="primary">primary</btn>
                <btn hollow theme="secondary">secondary</btn>
                <btn hollow theme="default">default</btn>
            </cell>
        </group>
        <group-title>shape="pill"</group-title>
        <group>
            <cell>
                <btn shape="pill" theme="primary">primary</btn>
                <btn shape="pill" theme="secondary">secondary</btn>
                <btn shape="pill" theme="default">default</btn>
            </cell>
        </group>
        <group-title>loading</group-title>
        <group>
            <cell>
                <btn theme="primary" loading>loading</btn>
                <btn theme="default" loading>保存中</btn>
            </cell>
        </group>
        <group-title>disabled</group-title>
        <group>
            <cell>
                <btn disabled theme="primary">primary</btn>
                <btn disabled theme="secondary">secondary</btn>
                <btn disabled theme="default">default</btn>
            </cell>
        </group>
        <group-title>size</group-title>
        <group>
            <cell>
                <btn size="sm" hollow theme="primary">small</btn>
                <btn theme="primary">normal</btn>
                <btn size="lg" theme="primary">large</btn>
            </cell>
        </group>
        <group-title>block</group-title>
        <group>
            <cell>
                <btn block size="lg" theme="primary">primary</btn>
            </cell>
            <cell>
                <btn block size="lg" theme="secondary">secondary</btn>
            </cell>
            <cell>
                <btn block size="lg" theme="default">default</btn>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            clickHandle(message) {
                this.$toast(`hello ${message}`);
            },
        },
    };
</script>
