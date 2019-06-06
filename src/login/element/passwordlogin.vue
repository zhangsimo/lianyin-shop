<template>
  <div class="phonelogin">
    <div class="inputone">
      手机号
      <input type="text" placeholder="请输入手机号" v-model="mobile" />
    </div>
    <div class="inputtwo">
      密码
      <input
        type="text"
        placeholder="请输入登录密码"
        class="input"
        v-model="password"
      />
    </div>
    <div class="loginBtn" @click="sure">登录</div>
    <div class="signIn">
      <span @click="register">
        注册账号
        <i>▶</i>
      </span>
      <span>忘记密码?</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$router.push('/register1')
    },
    async sure () {
      if (this.mobile.trim() === '') {
        this.$messagebox.alert('请输入手机号码')
        return
      }
      if (!/^1(3|4|5|7|8|2)\d{9}$/.test(this.mobile)) {
        this.$messagebox.alert('请输入正确的手机号码')
        return
      }
      if (this.password.trim() === '') {
        return this.$messagebox.alert('请输入密码')
      }
      let res = await this.$axios.post('/myapi/login', {
        mobile: this.mobile,
        password: this.password
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
    input {
      border: none;
      margin-left: 0.466667rem /* 35/75 */;
      font-size: 0.373333rem /* 28/75 */;
      color: #222;
      outline: none;
    }
  }
  .inputtwo {
    padding-top: 0.133333rem /* 20/75 */;
    .input {
      margin-left: 0.8rem; /* 60/75 */
    }
  }
  .loginBtn {
    margin-top: 0.426667rem /* 32/75 */;
    width: 100%;
    height: 1.28rem /* 96/75 */;
    background-color: #037fff;
    color: #fff;
    text-align: center;
    line-height: 1.28rem;
    font-size: 0.426667rem; /* 32/75 */
    border-radius: 0.2rem; /* 15/75 */
  }
  .signIn {
    width: 100%;
    line-height: 1.6rem /* 120/75 */;
    font-size: 0.346667rem /* 26/75 */;
    i {
      font-size: 0.2rem; /* 12/75 */
    }
    span:nth-child(2) {
      float: right;
    }
  }
}
</style>
