import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Main from './components/Main.vue'
import Step1 from './components/Step1.vue'
import ChoosePlat from './components/ChoosePlat.vue'
import config from './config'

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
    {
      name: 'step1',
      path: '/step1',
      component: Step1,
    },
  ]
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});


