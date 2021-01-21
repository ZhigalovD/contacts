import Vue from 'vue'
import  store from './store'
import App from './App.vue'
import router from './router'
import 'normalize.less'
import UUID from 'vue-uuid'

Vue.use(UUID);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
