import Vue from 'vue/dist/vue'
import GAuth from 'vue-google-oauth2'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import router from './router/routes'
import './styles/index.css'

import App from './App.js'

Vue.use(VueCookies)

Vue.config.productionTip = false
const gauthOption = {
  clientId: `${process.env.VUE_APP_GOOGLE_ID}.apps.googleusercontent.com`,
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
