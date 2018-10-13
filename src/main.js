// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VuexStore from './vuex/store.js'
import LoginInterceptors from './components/Login/interceptors'
import VueFlashMessage from 'vue-flash-message'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFlashMessage)

Vue.http.options.root = process.env.SERVER

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

LoginInterceptors.check_auth()
LoginInterceptors.check_empty_token(router)

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
