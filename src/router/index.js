import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Table from '../views/Table.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/advert',
    name: 'advert',
    component: () => import('../views/Advert.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue')
  },

  {
    path: '/formview',
    name: 'formview',
    component: () => import('../views/FormView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
