<template>
    <div>
        <group-title>base</group-title>
        <tabbar class="no-margin" @change="changeHandle">
            <tabbar-item>Sports</tabbar-item>
            <tabbar-item>Finance</tabbar-item>
            <tabbar-item>Science</tabbar-item>
            <tabbar-item>Military</tabbar-item>
        </tabbar>
        <group-title>activeKey="3"</group-title>
        <tabbar class="no-margin" activeKey="Science" @change="changeHandle">
            <tabbar-item eventKey="Sports">Sports</tabbar-item>
            <tabbar-item eventKey="Finance">Finance</tabbar-item>
            <tabbar-item eventKey="Science">Science</tabbar-item>
            <tabbar-item eventKey="Military">Military</tabbar-item>
        </tabbar>
        <group-title>dynamic</group-title>
        <tabbar class="no-margin" activeKey="Finance" @change="changeHandle">
            <tabbar-item v-for="item in tabs" :eventKey="item.name">{{item.name}}</tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: [{
                    name: 'Sports',
                }, {
                    name: 'Finance',
                }, {
                    name: 'Science',
                }, {
                    name: 'Military',
                }],
            };
        },
        methods: {
            changeHandle(val) {
                this.$toast(`选择了:${val}`);
            },
        },
    };
</script>
