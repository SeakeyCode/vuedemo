import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
// import kityMinder from 'vue-kityminder-editor'
// import 'vue-kityminder-editor/lib/kityMinder.css'
// Vue.use(kityMinder)
import 'tailwindcss/tailwind.css'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
