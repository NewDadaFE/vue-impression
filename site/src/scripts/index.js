import Vue from 'vue';
import router from './router';
import App from './App';
import Impression from './components';

Vue.use(Impression);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
