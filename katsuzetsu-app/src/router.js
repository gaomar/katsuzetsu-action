import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Katsuzetsu from './views/Katsuzetsu.vue'
import Congratulation from './views/Congratulation.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/katsuzetsu',
      name: 'katsuzetsu',
      component: Katsuzetsu
    },
    {
      path: '/congratulation',
      name: 'congratulation',
      component: Congratulation
    }
  ]
})