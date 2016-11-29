import Vue from 'vue';
import VueRouter from 'vue-router';
import routesConfig from './routes.json';

Vue.use(VueRouter);

// 提取路由
const extractRoutes = (config) => {
    const routes = [];

    config.forEach((group) => {
        group.children.forEach((item) => {
            const { path, name } = item;

            routes.push({
                path,
                name,
                component: require(`./views${path}`),
            });
        });
    });

    return routes;
};

const routes = extractRoutes(routesConfig);

// demo首页
routes.push({
    path: '/',
    component: require('./views/index'),
});

// 创建router对象
const router = new VueRouter({
    base: __dirname,
    routes,
});

export default router;
