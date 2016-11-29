<template>
    <div>
        <div v-for="group in groups">
            <group-title v-if="group.title"><strong>{{group.title}}</strong></group-title>
            <group>
                <cell v-for="cell in group.children">
                    <icon size="lg" left :name="cell.icon"></icon>
                    {{cell.name}}
                </cell>
            </group>
        </div>
    </div>
</template>


<script>
    import Group from '../components/Group';
    import GroupTitle from '../components/GroupTitle';
    import Cell from '../components/Cell';
    import Icon from '../components/Icon';
    import routesConfig from '../routes.json';

    export default {
        components: {
            Group,
            GroupTitle,
            Cell,
            Icon,
        },
        data() {
            return {
                groups: routesConfig,
            };
        },
    };
</script>
