import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Main from './components/Main.vue';
import config from './config';

window.version = config.version;
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'main',
      },
    },
    {
      name: 'main',
      path: '/main',
      component: Main,
    },
  ],
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App },
});


