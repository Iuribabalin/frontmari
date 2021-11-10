import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/performer',
    name: 'Performer',
    component: () => import('../views/PerformerPage.vue')
  },
  {
    path: '/case',
    name: 'Case',
    component: () => import('../views/CasePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
