<template>
    <div>
        <tabbar v-model="newsType" class="no-margin">
            <tabbar-item value="1">体育</tabbar-item>
            <tabbar-item value="2">财经</tabbar-item>
            <tabbar-item value="3">科技</tabbar-item>
            <tabbar-item value="4">军事</tabbar-item>
        </tabbar>
        <group-title>Dynamic</group-title>
        <tabbar v-model="tab" class="no-margin">
            <tabbar-item v-for="item in tabs" :value="item.value">{{item.name}}</tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsType: '1',
                tab: '1',
                tabs: [{
                    name: 'Overview',
                    value: '1',
                }, {
                    name: 'Stars',
                    value: '2',
                }, {
                    name: 'Followers',
                    value: '3',
                }, {
                    name: 'Following',
                    value: '4',
                }],
            };
        },
    };
</script>
