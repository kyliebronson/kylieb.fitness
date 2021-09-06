import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Bookonline from '@/components/Bookonline'
import Contact from '@/components/Contact'

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About},
  { path: '/contact', component: Contact },
  { path: '/bookonline', component: Bookonline },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
