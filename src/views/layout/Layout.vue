<template>
  <div>
    <tabbar>
      <tabbar-item @on-item-click="gotoView('home')">
        <img solt="icon" src="./logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item @on-item-click="gotoView('order')">
        <img solt="icon" src="./logo.png">
        <span slot="label">订单</span>
      </tabbar-item>
       <tabbar-item @on-item-click="gotoView('activity')">
        <img solt="icon" src="./logo.png">
        <span slot="label">活动</span>
      </tabbar-item>
       <tabbar-item @on-item-click="gotoView('mine')">
        <img solt="icon" src="./logo.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    gotoView (view) {
      this.$router.push(view)
    }
  }
}
</script>