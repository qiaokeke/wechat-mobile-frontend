<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img solt="icon" src="./logo.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img solt="icon" src="./logo.png">
        <span slot="label">订单</span>
      </tabbar-item>
       <tabbar-item>
        <img solt="icon" src="./logo.png">
        <span slot="label">活动</span>
      </tabbar-item>
       <tabbar-item>
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
  }
}
</script>