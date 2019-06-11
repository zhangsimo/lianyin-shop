<template>
  <div>
    <div class="logintitle">
      <h3>重置密码</h3>
    </div>
    <h2 class="logintitleshop">新设置密码</h2>
    <div class="phonelogin">
      <div class="inputone">
        密码
        <input type="text" placeholder="请输入登录密码" v-model="password1">
      </div>
      <div class="inputtwo">
        密码
        <input type="text" placeholder="请重新输入登录密码" v-model="password2">
      </div>
      <div class="loginBtn" @click="register">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password2: '',
      password1: ''
    }
  },
  /* eslint-disable */
  methods: {
    async register() {
      if (this.password1.trim() === '') {
        return this.$messagebox.alert('请输入密码')
      }
      if (this.password1 !== this.password2) {
        return this.$messagebox.alert('密码输入不一致')
      }
      if (!/^[0-9a-zA-Z]{6,12}$/.test(this.password1)) {
        return this.$messagebox.alert('密码长度为6-12之间')
      }

      let obj = this.$store.state.loginCode
      let res = await this.$axios.post('/myapi/register', {
        mobile: obj.mobile,
        code: obj.code,
        password: this.password1
      })
      // console.log(res)

      // if (res.data.code === '0') {
      //   sessionStorage.setItem('lianyin_token', res.data.token)
      //   this.$messagebox.alert('注册成功').then(() => {
      //     this.$router.push('/login')
      //   })
      // }
      // if (res.data.code === '-1') {
      //   this.$messagebox.alert(res.data.msg).then(() => {
      //     this.$router.push('/register1')
      //   })
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.logintitleshop {
  padding: 0 0.48rem /* 36/75 */;
  line-height: 2rem; /* 150/75 */
  font-size: 0.533333rem /* 40/75 */;
  font-weight: 600;
}
.logintitle {
  h3 {
    width: 100%;
    line-height: 1.28rem; /* 96/75 */
    text-align: center;
    font-size: 0.453333rem; /* 34/75 */
  }
}
.phonelogin {
  padding: 0 0.48rem /* 36/75 */;

  .inputone,
  .inputtwo {
    border-bottom: 1px solid #e6e6e6;
    line-height: 1.24rem /* 93/75 */;
    font-size: 0.373333rem /* 28/75 */;
    height: 1.24rem;
    input {
      border: none;
      margin-left: 0.466667rem /* 35/75 */;
      font-size: 0.373333rem /* 28/75 */;
      color: #000;
      outline: none;
    }
  }
  .inputtwo {
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
    margin-top: 0.733333rem /* 55/75 */;
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
