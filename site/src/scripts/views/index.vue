<template>
    <div>
        <div v-for="group in groups">
            <group-title v-if="group.title"><strong>{{group.title}}</strong></group-title>
            <group>
                <cell v-for="cell in group.children" :to="{path: cell.path}">
                    <icon size="lg" left :name="cell.icon"></icon>
                    {{cell.name}}
                </cell>
            </group>
        </div>
        <group-title ><strong>说明</strong></group-title>
        <group>
            <cell :click="clickHandle">
                impression
                <span slot="footer">0.1.0</span>
            </cell>
        </group>
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
        methods: {
            clickHandle() {
                alert(1);
            }
        },
    };
</script>
