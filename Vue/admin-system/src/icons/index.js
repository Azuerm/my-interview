// 导入SVG图标
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

// 全局注册SvgIcon组件
Vue.component('svg-icon', SvgIcon)

// 自动导入所有svg图标
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)