<template>
    <div>
        <div>title</div>
        <group class="no-margin" v-for="group in groups">
            <cell v-for="cell in group.children">{{cell.name}}</cell>
        </group>
                <div>title</div>
        <group class="no-margin" v-for="group in groups">
            <cell v-for="cell in group.children">{{cell.name}}</cell>
        </group>
    </div>
</template>


<script>
    import Group from '../components/Group';
    import Cell from '../components/Cell';
    import routesConfig from '../routes.json';

    export default {
        components: {
            Group,
            Cell,
        },
        data() {
            return {
                groups: routesConfig,
            };
        },
    };
</script>
