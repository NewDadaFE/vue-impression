<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                <stepbar :value="0">
                    <stepbar-item></stepbar-item>
                    <stepbar-item></stepbar-item>
                    <stepbar-item></stepbar-item>
                </stepbar>
            </cell>
            <cell>
                <stepbar :value="1">
                    <stepbar-item></stepbar-item>
                    <stepbar-item></stepbar-item>
                    <stepbar-item></stepbar-item>
                </stepbar>
            </cell>
            <cell>
                <stepbar :value="2">
                    <stepbar-item></stepbar-item>
                    <stepbar-item></stepbar-item>
                    <stepbar-item></stepbar-item>
                </stepbar>
            </cell>
        </group>
        <group-title>title</group-title>
        <group>
            <cell>
                <stepbar :value="0">
                    <stepbar-item>选择订单</stepbar-item>
                    <stepbar-item>填写资料</stepbar-item>
                    <stepbar-item>提交材料</stepbar-item>
                </stepbar>
            </cell>
            <cell>
                <stepbar :value="1">
                    <stepbar-item>选择订单</stepbar-item>
                    <stepbar-item>填写资料</stepbar-item>
                    <stepbar-item>提交材料</stepbar-item>
                </stepbar>
            </cell>
            <cell>
                <stepbar :value="2">
                    <stepbar-item>选择订单</stepbar-item>
                    <stepbar-item>填写资料</stepbar-item>
                    <stepbar-item>提交材料</stepbar-item>
                </stepbar>
            </cell>
        </group>
    </div>
</template>
