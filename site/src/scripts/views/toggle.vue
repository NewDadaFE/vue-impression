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
                <toggle disabled slot="footer" v-model="checked" @change="changeHandle">checked</toggle>
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
            };
        },
        methods: {
            changeHandle(event) {
                Vue.$toast(`选中：${event.target.checked}`);
            },
        },
    };
</script>
