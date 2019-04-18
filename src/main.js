import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import remconfig from './assets/js/rem.js'
import Vesource from 'vue-resource'
remconfig();

Vue.use(Vesource)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
