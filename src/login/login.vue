<template>
  <div>
    <div class="logintitle">
      <h3>登录</h3>
    </div>
    <div class="loginnav">
      <ul ref="loginAll" @click="changelogin">
        <li>
          <router-link class="bordercolor" to="/phonelogin"
            >验证码登录</router-link
          >
        </li>
        <li>
          <router-link to="/passwordlogin">密码登录</router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changelogin (e) {
      if (e.target.localName === 'a') {
        let list = this.$refs.loginAll.children
        for (let i = 0; i < list.length; i++) {
          list[i].firstElementChild.classList.remove('bordercolor')
        }
        e.target.className = 'bordercolor'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.logintitle {
  background-color: #fff;
  h3 {
    width: 100%;
    line-height: 1.28rem; /* 96/75 */
    text-align: center;
    font-size: 0.453333rem; /* 34/75 */
  }
}
.loginnav {
  ul {
    width: 100%;
    overflow: hidden;
    li {
      width: 50%;
      float: left;
      text-align: center;
      font-size: 0.373333rem /* 28/75 */;
      color: #666666;
      a {
        text-decoration: none;
        padding-bottom: 0.25rem /* 15/75 */;
        line-height: 1.066667rem; /* 80/75 */
        color: #666666;
        // border-bottom: 0.053333rem solid #ccc; /* 4/75 */
      }
      .bordercolor {
        border-bottom: 0.053333rem solid #037fff;
        color: #037fff;
        font-weight: 600;
      }
    }
  }
}
</style>
