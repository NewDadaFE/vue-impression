<template>
    <div>
        <group-title>
            Radio
            <span class="pull-right">selected: {{ single }}</span>
        </group-title>
        <group>
            <cell>
                <radio v-model="single" val="red">red</radio>
                <radio v-model="single" val="green">green</radio>
                <radio v-model="single" val="yellow">yellow</radio>
            </cell>
        </group>
        <group-title>
            RadioGroup(<span class="text-danger">推荐</span>)
            <span class="pull-right">selected: {{ group }}</span>
        </group-title>
        <group>
            <cell>
                <radio-group v-model="group" @change="changeHandle">
                    <radio value="red">red</radio>
                    <radio value="green">green</radio>
                    <radio value="yellow">yellow</radio>
                </radio-group>
            </cell>
        </group>
        <group>
            <cell>
                <radio-group v-model="group" @change="changeHandle">
                    <radio shape="square" value="red">red</radio>
                    <radio shape="square" value="green">green</radio>
                    <radio shape="square" value="yellow">yellow</radio>
                </radio-group>
            </cell>
        </group>

        <group>
            <cell>
                <radio-group v-model="group" @change="changeHandle">
                    <radio shape="circle" value="red">red</radio>
                    <radio shape="circle" value="green">green</radio>
                    <radio shape="circle" value="yellow">yellow</radio>
                </radio-group>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                single: 'green',
                group: 'red',
            };
        },
        methods: {
            changeHandle(val) {
                this.$toast(`选中：${val}`);
            },
        },
    };
</script>
