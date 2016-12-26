<template>
    <flex direction="column">
        <navbar theme="default">
            <icon name="bars" size="lg" @click="showMenubar = true" />
            <h5 slot="body">{{$route.name || 'Impression'}}</h5>
        </navbar>
        <flex-item>
            <router-view></router-view>
        </flex-item>
        <menubar v-model="showMenubar" />
    </flex>
</template>

<script>
    import menubar from './menubar';

    export default {
        components: {
            menubar,
        },
        data() {
            return {
                showMenubar: false,
            };
        },
    };
</script>
