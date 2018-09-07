<template>
  <div id="app">
    <router-view></router-view>
    <layout></layout>
  </div>
</template>

<script>
import Layout from './views/layout/Layout'
export default {
  name: 'app',
  components: {
    Layout
  },
  data: {
    title: '软石力科技'
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
