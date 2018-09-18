<template>
  <div>
    cdoe登陆中
    <input v-model="url"/>
  </div>
</template>

<script>
import { logincode } from '@/api/login'
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
      logincode(code).then(response => {
        setToken(response.data)
      })
    }
  }
}
</script>

