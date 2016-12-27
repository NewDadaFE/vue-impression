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
        <group>
            <cell>
                impression
                <span slot="footer">0.1.0</span>
            </cell>
        </group>
    </div>
</template>


<script>
    import routesConfig from '../routes.json';

    export default {
        data() {
            return {
                groups: routesConfig,
            };
        },
    };
</script>
