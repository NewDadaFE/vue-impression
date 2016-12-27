<template>
    <sidelip v-model="currentValue">
        <flex direction="column" :style="{backgroundColor: '#f0eff5'}">
            <navbar theme="primary">
                <h5>Impression</h5>
            </navbar>
            <flex-item>
                <div v-for="group in groups">
                    <group-title v-if="group.title"><strong>{{group.title}}</strong></group-title>
                    <group>
                        <cell
                            v-for="cell in group.children"
                            :to="{path: cell.path}">
                            <icon size="lg" left :name="cell.icon"></icon>
                            {{cell.name}}
                        </cell>
                    </group>
                </div>
            </flex-item>
            <group>
                <cell>
                    NewDadaFE©️所有
                </cell>
            </group>
        </flex>
    </sidelip>
</template>

<script>
    import routesConfig from '../routes.json';

    export default {
        props: {
            value: {},
            disabled: Boolean,
        },
        data() {
            return {
                currentValue: this.value,
                groups: routesConfig,
            };
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.$emit('input', val);
            },
            $route() {
                this.currentValue = false;
            },
        },
    };
</script>
