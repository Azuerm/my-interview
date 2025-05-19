import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

// 公共路由，所有用户都可以访问
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('../views/error/404.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/dashboard/index.vue'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  }
]

// 动态路由，根据用户角色动态加载
export const asyncRoutes = [
  // 普通用户路由
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    meta: { title: '用户页面', icon: 'user', roles: ['user', 'admin'] },
    children: [
      {
        path: 'index',
        name: 'UserPage',
        component: () => import('../views/user/index.vue'),
        meta: { title: '用户中心', icon: 'user', roles: ['user', 'admin'] }
      }
    ]
  },
  // 管理员路由
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/index',
    meta: { title: '管理员页面', icon: 'admin', roles: ['admin'] },
    children: [
      {
        path: 'index',
        name: 'AdminPage',
        component: () => import('../views/admin/index.vue'),
        meta: { title: '系统管理', icon: 'setting', roles: ['admin'] }
      }
    ]
  },
  // 404页面必须放在最后
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// 重置路由方法
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router