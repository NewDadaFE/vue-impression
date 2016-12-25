import Vue from 'vue';
import VueRouter from 'vue-router';
import routesConfig from './routes.json';

Vue.use(VueRouter);

// 提取路由
const extractRoutes = config => {
    const routes = [],
        children = [];

    routes.push({
        path: '/',
        component: require('./containers/layout'),
        children,
    });

    config.forEach(group => {
        group.children.forEach(item => {
            const { path, name } = item;

            children.push({
                path,
                name,
                component: require(`./views${path}`),
            });
        });
    });

    return routes;
};

const routes = extractRoutes(routesConfig);

// 创建router对象
const router = new VueRouter({
    base: __dirname,
    routes,
});

export default router;
