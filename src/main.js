// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'
import './assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css'
import commonJs from './assets/js/common.js'
import store from './store'
import Pyramid from './components/modules/pyramid.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.Common = commonJs
Vue.component('Pyramid', Pyramid)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
