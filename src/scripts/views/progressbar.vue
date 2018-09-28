<template>
    <div>
        <group-title>base</group-title>
        <group>
            <cell>
                <progressbars
                    :dotDataList="dotDataList"
                    :currentData="currentData">
                </progressbars>
            </cell>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress: 0.6,
                dotDataList: [0, 10, 50, 100, 200],
                currentData: 20,
            };
        },
    };
</script>
