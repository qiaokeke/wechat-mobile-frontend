import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'
import Tab from '@/components/Tab'
import Tabbar from '@/components/Tabbar'
import Home from '@/views/home/Home'
import Order from '@/views/order/Order'
import Activity from '@/views/activity/Activity'
import Mine from '@/views/mine/Mine'
import Login from '@/views/login/index'
import Code from '@/views/login/code'
import Detail from '@/views/detail/Detail'
Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: Login, hidden: true },
  { path: '/code', component: Code, hidden: true },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  {
    path: '/tab',
    name: 'tab',
    component: Tab
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: Tabbar
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout
  }
]

export default new Router({
  routes: constantRouterMap
})
