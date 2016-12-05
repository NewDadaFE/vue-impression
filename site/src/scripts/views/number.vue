<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell>
                <span>default</span>
                <input-number v-model="count" @change="changeHandle" slot="footer"></input-number>
            </cell>
            <cell>
                <span>disabled</span>
                <input-number disabled :value="3" slot="footer"></input-number>
            </cell>
        </group>
        <group-title>Step</group-title>
        <group>
            <cell>
                step=2
                <input-number :step="2" slot="footer"></input-number>
            </cell>
            <cell>
                step=3
                <input-number :step="3" slot="footer"></input-number>
            </cell>
        </group>
        <group-title>Max</group-title>
        <group>
            <cell>
                max=3
                <input-number :max="3" slot="footer"></input-number>
            </cell>
        </group>
        <group-title>Min</group-title>
        <group>
            <cell>
                min=3
                <input-number :min="3" :value="3" slot="footer"></input-number>
            </cell>
        </group>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        data() {
            return {
                count: 1,
            };
        },
        methods: {
            changeHandle(value) {
                Vue.$toast(`当前值：${value}`);
            },
        },
    };
</script>
