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
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('../views/ClientPage.vue')
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/AddressPage.vue')
  },
  {
    path: '/evidence',
    name: 'Evidence',
    component: () => import('../views/EvidencePage.vue')
  },
  {
    path: '/suspect',
    name: 'Suspect',
    component: () => import('../views/SuspectPage.vue')
  },
  {
    path: '/source',
    name: 'Source',
    component: () => import('../views/SourcePage.vue')
  },
  {
    path: '/criminal',
    name: 'Criminal',
    component: () => import('../views/CriminalPage.vue')
  },
  {
    path: '/punishment',
    name: 'Punishment',
    component: () => import('../views/PunishmentPage.vue')
  },
  {
    path: '/crimetype',
    name: 'CrimeType',
    component: () => import('../views/CrimeTypePage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
