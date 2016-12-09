<template>
    <div>
        <group-title>
            RadioGroup
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
