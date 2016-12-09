<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell class="text-center">
                <segmented-control @change="changeHandle">
                    <segmented-control-item>分组</segmented-control-item>
                    <segmented-control-item>全部</segmented-control-item>
                </segmented-control>
            </cell>
        </group>
        <group-title>eventKey</group-title>
        <group>
            <cell class="text-center">
                <segmented-control activeKey="未接来电" @change="changeHandle">
                    <segmented-control-item eventKey="所有通话">所有通话</segmented-control-item>
                    <segmented-control-item eventKey="未接来电">未接来电</segmented-control-item>
                </segmented-control>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        methods: {
            changeHandle(val) {
                this.$toast(`切换至【${val}】`);
            },
        },
    };
</script>
