<template>
    <div>
        <group-title>Base</group-title>
        <group>
            <cell>
                <radio @change.native="changeHandle">default</radio>
                <radio slot="footer" :value="checked" @change.native="changeHandle">checked</radio>
            </cell>
        </group>
        <group-title>Disabled</group-title>
        <group>
            <cell>
                <radio disabled @change.native="changeHandle">default</radio>
                <radio disabled slot="footer" :value="checked" @change.native="changeHandle">checked</radio>
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
