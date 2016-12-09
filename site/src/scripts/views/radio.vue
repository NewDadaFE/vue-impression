<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell>
                <radio @change="changeHandle">default</radio>
                <radio slot="footer" :value="checked" @change="changeHandle">checked</radio>
            </cell>
        </group>
        <group-title>Disabled</group-title>
        <group>
            <cell>
                <radio disabled @change="changeHandle">default</radio>
                <radio disabled slot="footer" :value="checked" @change="changeHandle">checked</radio>
            </cell>
        </group>
        <group-title>
            RadioGroup
            <span class="pull-right">selected: {{ group }}</span>
        </group-title>
        <group>
            <cell>
                <radio-group v-model="group">
                    <radio value="red">red</radio>
                    <radio value="green">green</radio>
                    <radio value="yellow">yellow</radio>
                </radio-group>
            </cell>
        </group>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        data() {
            return {
                checked: true,
                group: 'red',
            };
        },
        methods: {
            changeHandle(val) {
                Vue.$toast(`选中：${val}`);
            },
        },
    };
</script>
