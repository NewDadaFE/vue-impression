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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                progress: 0.6,
            };
        },
    };
</script>
