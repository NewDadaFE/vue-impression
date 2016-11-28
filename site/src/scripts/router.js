import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 创建router对象
const router = new VueRouter({
    base: __dirname,
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes: [{
        path: '/button',
        name: 'button',
        component: require('./views/button.vue'),
    }],
});

export default router;
