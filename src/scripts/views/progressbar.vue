<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                <progressbar :value="progress">
                    60%
                </progressbar>
            </cell>
            <cell>
                <progressbar :value="progress" theme="success">
                    60%
                </progressbar>
            </cell>
            <cell>
                <progressbar :value="progress" theme="warning">
                    60%
                </progressbar>
            </cell>
            <cell>
                <progressbar :value="progress" theme="danger">
                    60%
                </progressbar>
            </cell>
        </group>
        <group-title>sm</group-title>
        <group>
            <cell>
                <progressbar size="sm" :value="progress">
                    60%
                </progressbar>
            </cell>
            <cell>
                <progressbar size="sm" :value="progress" theme="success">
                    60%
                </progressbar>
            </cell>
            <cell>
                <progressbar size="sm" :value="progress" theme="warning">
                    60%
                </progressbar>
            </cell>
            <cell>
                <progressbar size="sm" :value="progress" theme="danger">
                    60%
                </progressbar>
            </cell>
        </group>
        <group-title>不等分区间<br />
            BASE<br />必传参数：<br />nodeDataList--节点数据list<br />currentData--当前数值<br /> currentData={{currentData}}
        </group-title>
        <group>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData">
                </progressbars>
            </cell>
        </group>

        <group-title>
            backgroundColor--进度条背景色<br />foregroundColor--进度条前景色<br /> currentData={{currentData}}
        </group-title>
        <group>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData">
                </progressbars>
            </cell>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars>
            </cell>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    foregroundColor="#30BE71">
                </progressbars>
            </cell>
        </group>

        <group-title>
            size: xsm / sm / lg<br /> currentData={{currentData}}
        </group-title>
        <group>
            <cell>
                <progressbars
                    size="xsm"
                    :nodeDataList="nodeDataList"
                    :nodeInfoList="nodeInfoList"
                    :currentData="currentData"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars></cell>
            </cell>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :nodeInfoList="nodeInfoList"
                    :currentData="currentData"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars></cell>
            </cell>
            <cell>
                <progressbars
                    size="lg"
                    :nodeDataList="nodeDataList"
                    :nodeInfoList="nodeInfoList"
                    :currentData="currentData"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars></cell>
            </cell>
        </group>

        <group-title>
            nodeShape: dot / circle / checkCircle<br /> currentData={{currentData}}
        </group-title>
        <group>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    :nodeInfoList="nodeInfoList"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars></cell>
            </cell>
            <cell>
                <progressbars
                    nodeShape="circle"
                    :nodeDataList="nodeDataList"
                    :nodeInfoList="nodeInfoList"
                    :currentData="currentData"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars></cell>
            </cell>
            <cell>
                <progressbars
                    nodeShape="checkCircle"
                    :nodeDataList="nodeDataList"
                    :nodeInfoList="nodeInfoList"
                    :currentData="currentData"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71">
                </progressbars></cell>
            </cell>
        </group>
        <group-title>
            复写progressbars的font-size，进度条可以等比缩放<br /> currentData={{currentData}}
        </group-title>
        <group>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    :nodeInfoList="nodeInfoList"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71"
                    style="font-size: 15px;">
                </progressbars>
            </cell>
            <cell>
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    :nodeInfoList="nodeInfoList"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71"
                    style="font-size: 25px;">
                </progressbars>
            </cell>
            <cell style="width: 200px; margin: 0 auto;">
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    :nodeInfoList="nodeInfoList"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71"
                    style="font-size: 35px;">
                </progressbars>
            </cell>
        </group>
        <group-title>
            文案<br /> currentData={{currentData}}
        </group-title>
        <group>
            <cell style="padding-bottom: 50px; margin: 0 auto; overflow: visible;">
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    :nodeInfoList="nodeInfoList"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71"
                    style="font-size: 15px;">
                    <div v-for="(info, index) in nodeInfoList"
                         :key="index"
                         :slot="`infoSlot${index}`">
                         <div>
                             {{info}}<br />unit
                         </div>
                     </div>
                </progressbars>
            </cell>
            <cell style="padding-bottom: 100px; margin: 0 auto; overflow: visible;">
                <progressbars
                    :nodeDataList="nodeDataList"
                    :currentData="currentData"
                    :nodeInfoList="nodeInfoList"
                    backgroundColor="#f4f4f4"
                    foregroundColor="#30BE71"
                    style="font-size: 25px;">
                    <div v-for="(info, index) in nodeInfoList"
                         :key="index"
                         :slot="`infoSlot${index}`">
                         <div>
                             {{info}}<br />unit
                         </div>
                     </div>
                </progressbars>
            </cell>
        </group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress: 0.6,
                nodeDataList: [0, 10, 100],
                nodeInfoList: [0, 10, 100],
                currentData: 99,
            };
        },
    };
</script>
