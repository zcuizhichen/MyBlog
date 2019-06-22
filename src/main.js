import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import './element-variables.scss'

import './assets/css/global.styl'
import './assets/css/layout.css'
import './assets/css/universal.css'

import axios from './lib/axios'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')