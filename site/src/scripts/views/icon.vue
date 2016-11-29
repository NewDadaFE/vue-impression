<template>
    <div>
        <group>
            <cell>cell one</cell>
            <cell>cell two</cell>
            <cell>cell three</cell>
        </group>
    </div>
</template>


<script>
    import Group from '../components/Group';
    import Cell from '../components/Cell';

    export default {
        components: {
            Group,
            Cell,
        },
    };
</script>
