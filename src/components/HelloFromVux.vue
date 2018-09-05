<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
     <tabbar>
        <tabbar-item link="/index" :selected="$route.path == '/index'">
            <span slot="icon" class="iconfont icon-home"></span>
            <span slot="label">首页</span>
        </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
