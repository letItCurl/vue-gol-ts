import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2TouchEvents from 'vue2-touch-events'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)
Vue.use(PerfectScrollbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
