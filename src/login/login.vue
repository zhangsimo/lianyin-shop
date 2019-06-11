<template>
  <div>
    <!-- <div class="logintitle">
      <h3>登录</h3>
    </div>-->
    <div class="loginnav">
      <ul ref="loginAll" @click="changelogin">
        <li>
          <a class="bordercolor">验证码登录</a>
        </li>
        <li>
          <a>密码登录</a>
        </li>
      </ul>
    </div>
    <div>
      <!-- <router-view></router-view> -->
      <!-- eslint-disable  -->
      <register1 v-if="isShow"></register1>
      <register2 v-if="!isShow"></register2>
    </div>
  </div>
</template>

<script>
import register1 from './element/phonelogin.vue'
import register2 from './element/passwordlogin.vue'
export default {
  data () {
    return {
      isShow: true
    }
  },
  components: {
    register1,
    register2
  },
  /* eslint-disable */

  methods: {
    changelogin(e) {
      if (e.target.localName === 'a') {
        let list = this.$refs.loginAll.children
        for (let i = 0; i < list.length; i++) {
          list[i].firstElementChild.classList.remove('bordercolor')
        }
        e.target.className = 'bordercolor'
        this.isShow = !this.isShow
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
      background-color: #fff;
      box-shadow: 0 0 0.066667rem /* 5/75 */ #e6e6e6;
      a {
        text-decoration: none;
        padding-bottom: 0.25rem /* 15/75 */;
        line-height: 1.066667rem; /* 80/75 */
        color: #666666;
        // border-bottom: 0.053333rem solid #ccc; /* 4/75 */
      }
      .bordercolor {
        border-bottom: 0.053333rem /* 4/75 */ solid #037fff;
        color: #037fff;
        font-weight: 600;
      }
    }
  }
}
</style>
