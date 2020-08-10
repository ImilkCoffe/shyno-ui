import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const muneData = require('@/assets/js/mune.js')
let routes = []
muneData.forEach(item => {
  routes.push({
    path: '/',
    component: () => import(`@/components/index`)
  })
  item.moduleList.forEach(item1 => {
    routes.push({
      path: `/${item1.component}`,
      name: item1.component,
      component: () => import(`@/components/${item1.component}`)
    })
  })
})
export default new Router({
  routes
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
