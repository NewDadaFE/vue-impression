import Vue from 'vue';
import router from './router';
import App from './App';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
