import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import {store} from './store/index'
import {router} from './router.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
