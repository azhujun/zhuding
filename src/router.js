import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/About.vue'
import JoinUs from './views/Joinus.vue'
import Cooperation from './views/Cooperation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: JoinUs
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: Cooperation
    },
    {
      path: '/download',
      name: 'download',
      component: Home
    }
  ]
})
