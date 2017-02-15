import Vue from 'vue';
import router from './router';
import Impression from './components';

Vue.use(Impression);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<router-view></router-view>',
});
