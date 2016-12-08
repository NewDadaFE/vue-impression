<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell>
                <checkbox @change.native="changeHandle">default</checkbox>
                <checkbox slot="footer" :value="true" @change.native="changeHandle">checked</checkbox>
            </cell>
        </group>
        <group-title>Circle</group-title>
        <group>
            <cell>
                <checkbox type="circle" @change.native="changeHandle">default</checkbox>
                <checkbox type="circle" slot="footer" v-model="checked" @change.native="changeHandle">checked</checkbox>
            </cell>
        </group>
        <group-title>Disabled</group-title>
        <group>
            <cell>
                <checkbox disabled @change.native="changeHandle">default</checkbox>
                <checkbox slot="footer" v-model="checked" disabled @change.native="changeHandle">checked</checkbox>
            </cell>
            <cell>
                <checkbox type="circle" disabled @change.native="changeHandle">default</checkbox>
                <checkbox type="circle" slot="footer" v-model="checked" disabled @change.native="changeHandle">checked</checkbox>
            </cell>
        </group>
        <group-title>
            CheckboxGroup
            <span class="pull-right">selected: {{ group }}</span>
        </group-title>
        <group>
            <cell>
                <checkbox-group v-model="group">
                    <checkbox value="red">red</checkbox>
                    <checkbox value="green">green</checkbox>
                    <checkbox value="blue">blue</checkbox>
                </checkbox-group>
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
                group: ['red'],
            };
        },
        methods: {
            changeHandle(event) {
                Vue.$toast(`选中：${event.target.checked}`);
            },
        },
    };
</script>
