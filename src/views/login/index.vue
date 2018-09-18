<template>
  <div>
    登陆中
    <input v-model="url"/>
  </div>
</template>

<script>
import { login } from '@/api/login'
import { setToken } from '@/utils/auth'
export default {
  data () {
    return {
      url: 'url'
    }
  },
  created () {
    this.handleLogin()
  },
  methods: {
    getQueryString (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    },
    handleLogin () {
      let u = window.location.href
      this.url = u
      let code = this.getQueryString('code')
      console.log(code)
      login(code).then(response => {
        console.log('respnse')
        console.log(response.data)
        setToken(response.data)
        this.$router.push({ path: '/home' })
      })
    }
  }
}
</script>

