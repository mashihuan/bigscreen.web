import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/default'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard')
      },
      {
        path: 'dashboard/person',
        name: 'DashboardPerson',
        component: () => import('@/views/dashboard/person'),
        meta: {activeMenu: '/'}
      },
      {
        path: 'dashboard/enterprise',
        name: 'DashboardEnterprise',
        component: () => import('@/views/dashboard/enterprise'),
        meta: {activeMenu: '/'}
      },
      {
        path: '/assets',
        name: 'Assets',
        component: () => import('@/views/assets'),
        meta: {activeMenu: '/assets'}
      }
    ]
  },

  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
