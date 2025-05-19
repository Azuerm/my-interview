import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from './utils/auth'

// 白名单路由
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  // 获取token
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // 已登录，跳转到首页
      next({ path: '/' })
    } else {
      // 确定用户是否已获得角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息
          const { roles } = await store.dispatch('user/getInfo')

          // 根据角色生成可访问路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // 动态添加可访问路由
          router.addRoutes(accessRoutes)

          // 确保addRoutes完成
          next({ ...to, replace: true })
        } catch (error) {
          // 移除token并跳转登录页
          await store.dispatch('user/resetToken')
          Message.error(error || '验证失败，请重新登录')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单中，直接进入
      next()
    } else {
      // 其他无权访问的页面将重定向到登录页面
      next(`/login?redirect=${to.path}`)
    }
  }
})