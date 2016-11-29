<template>
    <div>
        <div v-for="group in groups">
            <group-title v-if="group.title">{{group.title}}</group-title>
            <group>
                <cell v-for="cell in group.children">{{cell.name}}</cell>
            </group>
        </div>
    </div>
</template>


<script>
    import Group from '../components/Group';
    import GroupTitle from '../components/GroupTitle';
    import Cell from '../components/Cell';
    import routesConfig from '../routes.json';

    export default {
        components: {
            Group,
            GroupTitle,
            Cell,
        },
        data() {
            return {
                groups: routesConfig,
            };
        },
    };
</script>
