import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Videos },
  { path: '/mealplans', component: Videos },
  { path: '/bookonline', component: Videos },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
