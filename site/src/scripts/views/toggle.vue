<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell>
                <toggle @change="changeHandle">default</toggle>
                <toggle slot="footer" v-model="checked" @change="changeHandle">checked</toggle>
            </cell>
        </group>
        <group-title>Disabled</group-title>
        <group>
            <cell>
                <toggle disabled @change="changeHandle">default</toggle>
                <toggle disabled slot="footer" :value="true" @change="changeHandle">checked</toggle>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: true,
            };
        },
        methods: {
            changeHandle(val) {
                this.$toast(`选中：${val}`);
            },
        },
    };
</script>
