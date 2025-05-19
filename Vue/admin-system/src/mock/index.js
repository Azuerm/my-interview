import Mock from 'mockjs'
import { param2Obj } from '@/utils'

// 用户相关接口
import user from './user'

// 设置延迟时间
Mock.setup({
  timeout: '300-600'
})

// 用户相关
// 用户登录
Mock.mock(/\/user\/login/, 'post', user.login)
// 获取用户信息
Mock.mock(/\/user\/info\.*/, 'get', user.getInfo)
// 用户登出
Mock.mock(/\/user\/logout/, 'post', user.logout)

export default Mock