<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell>
                <checkbox @change="changeHandle">default</checkbox>
                <checkbox slot="footer" :value="true" @change="changeHandle">checked</checkbox>
            </cell>
        </group>
        <group-title>Circle</group-title>
        <group>
            <cell>
                <checkbox type="circle" @change="changeHandle">default</checkbox>
                <checkbox type="circle" slot="footer" v-model="checked" @change="changeHandle">checked</checkbox>
            </cell>
        </group>
        <group-title>Disabled</group-title>
        <group>
            <cell>
                <checkbox disabled @change="changeHandle">default</checkbox>
                <checkbox slot="footer" v-model="checked" disabled @change="changeHandle">checked</checkbox>
            </cell>
            <cell>
                <checkbox type="circle" disabled @change="changeHandle">default</checkbox>
                <checkbox type="circle" slot="footer" v-model="checked" disabled @change="changeHandle">checked</checkbox>
            </cell>
        </group>
        <group-title>
            CheckboxGroup
            <span class="pull-right">selected: {{ group }}</span>
        </group-title>
        <group>
            <cell>
                <checkbox-group v-model="group" @change="groupChangeHandle">
                    <checkbox value="red">red</checkbox>
                    <checkbox value="green">green</checkbox>
                    <checkbox value="blue">blue</checkbox>
                </checkbox-group>
            </cell>
        </group>
        <group-title>
            CheckboxGroup disabled
        </group-title>
        <group>
            <cell>
                <checkbox-group disabled>
                    <checkbox value="red">red</checkbox>
                    <checkbox value="green">green</checkbox>
                    <checkbox value="blue">blue</checkbox>
                </checkbox-group>
            </cell>
        </group>
        <group-title>
            Child Checkbox disabled
            <span class="pull-right">selected: {{ groupDisabled }}</span>
        </group-title>
        <group>
            <cell>
                <checkbox-group v-model="groupDisabled">
                    <checkbox value="red" disabled>red</checkbox>
                    <checkbox value="green">green</checkbox>
                    <checkbox value="blue">blue</checkbox>
                </checkbox-group>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: true,
                group: ['red'],
                groupDisabled: [],
            };
        },
        methods: {
            changeHandle(val) {
                this.$toast(`选中：${val}`);
            },
            groupChangeHandle(val) {
                this.$toast(`选中：${val}`);
            },
        },
    };
</script>
