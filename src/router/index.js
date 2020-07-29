import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../pages/Landing'
import Trick from '../pages/Trick'
import Reveal from '../pages/Reveal'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },

  {
    path: '/trick',
    name: 'Trick',
    component: Trick
  },

  {
    path: '/reveal',
    name: 'Reveal',
    component: Reveal
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
