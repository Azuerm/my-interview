import { param2Obj } from '@/utils'

// 用户列表
const users = {
  'admin': {
    token: 'admin-token',
    roles: ['admin'],
    introduction: '超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '超级管理员'
  },
  'user': {
    token: 'user-token',
    roles: ['user'],
    introduction: '普通用户',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    name: '普通用户'
  }
}

export default {
  // 用户登录
  login: config => {
    const { username } = JSON.parse(config.body)
    const token = users[username].token

    // 模拟登录失败
    if (!token) {
      return {
        code: 401,
        message: '账号或密码不正确'
      }
    }

    return {
      code: 200,
      data: { token }
    }
  },

  // 获取用户信息
  getInfo: config => {
    const { token } = param2Obj(config.url)
    const info = Object.values(users).find(user => user.token === token)

    // 模拟获取用户信息失败
    if (!info) {
      return {
        code: 401,
        message: '获取用户信息失败，请重新登录'
      }
    }

    return {
      code: 200,
      data: info
    }
  },

  // 用户登出
  logout: () => {
    return {
      code: 200,
      data: 'success'
    }
  }
}