<template>
  <div class="phonelogin">
    <div class="inputone">
      手机号
      <input type="text" placeholder="请输入手机号" v-model="mobile">
    </div>
    <div class="inputtwo">
      验证码
      <input type="text" placeholder="请输入验证码" v-model="verify">
      <button @click="cerifyMobile" ref="down">获取验证码</button>
    </div>
    <p>若手机号未注册,登录将自动创建账号。</p>
    <div class="loginBtn" @click="register">登录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      verify: '',
      mobile: ''
    }
  },
  /* eslint-disable */
  methods: {
    cerifyMobile() {
      if (this.mobile.trim() === '') {
        this.$messagebox.alert('请输入手机号码')
        return
      }
      if (!/^1(3|4|5|7|8|2)\d{9}$/.test(this.mobile)) {
        this.$messagebox.alert('请输入正确的手机号码')
      } else {
        this.$refs.down.disabled = true
        this.$refs.down.style.color = '#ccc'
        var time = 10
        let timeout = setInterval(() => {
          this.$refs.down.innerText = time + '秒后再次发送'
          time--
          if (time == -1) {
            clearTimeout(timeout)
            this.$refs.down.disabled = false
            this.$refs.down.innerText = '获取验证码'
            this.$refs.down.style.color = '#037fff'
          }
        }, 1000)
        this.$axios.post('/myapi/get_mobile_code', {
          mobile: this.mobile
        })
      }
    },
    async register() {
      if (this.mobile.trim() === '') {
        this.$messagebox.alert('请输入手机号码')
        return
      }
      if (!/^1(3|4|5|7|8|2)\d{9}$/.test(this.mobile)) {
        this.$messagebox.alert('请输入正确的手机号码')
        return
      }
      if (this.verify.trim() === '') {
        return this.$messagebox.alert('请输入验证码')
      }
      let res = await this.$axios.post('/myapi/login_by_code', {
        mobile: this.mobile,
        code: this.verify
      })
      if (res.data.code === '0') {
        sessionStorage.setItem('lianyin_token', res.data.data.token)
        this.$router.push('/home')
      }
      if (res.data.code === '-1') {
        this.$messagebox.alert(res.data.msg)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.phonelogin {
  padding: 0 0.48rem /* 36/75 */;
  margin-top: 0.533333rem; /* 40/75 */
  .inputone,
  .inputtwo {
    border-bottom: 1px solid #cccccc;
    line-height: 1.24rem /* 93/75 */;
    font-size: 0.373333rem /* 28/75 */;
    height: 1.24rem;
    input {
      border: none;
      margin-left: 0.466667rem /* 35/75 */;
      font-size: 0.373333rem /* 28/75 */;
      color: #222;
      outline: none;
      height: 80%;
    }
  }
  .inputtwo {
    margin-top: 0.133333rem /* 10/75 */;
    position: relative;
    button {
      background-color: transparent;
      border: none;
      outline: none;
      // float: right;
      color: #037fff;
      font-size: 0.373333rem /* 28/75 */;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  p {
    line-height: 1.333333rem; /* 100/75 */
    font-size: 0.346667rem /* 26/75 */;
    color: #999999;
  }
  .loginBtn {
    width: 100%;
    height: 1.28rem /* 96/75 */;
    background-color: #037fff;
    color: #fff;
    text-align: center;
    line-height: 1.28rem;
    font-size: 0.426667rem; /* 32/75 */
    border-radius: 0.2rem; /* 15/75 */
  }
}
</style>
