<template>
  <div class="userBox">
    <personal-header :title="title"></personal-header>
    <div class="list">
      <div class="headerimg">
        <p>
          头像
          <img src="../assets/images/3.png" alt>
        </p>
      </div>
      <ul class="userlist">
        <li>
          <i>昵称</i>
          <span class="right">
            <i @click="gochangename">123</i>
            <img src="../assets/images/fh.png" alt>
          </span>
        </li>
        <li>
          <i>生日</i>
          <span class="right" @click="gobirthday">
            未设置
            <img src="../assets/images/fh.png" alt>
          </span>
        </li>
        <li>
          <i>收货地址</i>
          <span class="right">
            添加/修改
            <img src="../assets/images/fh.png" alt>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import personalHeader from '../common/header.vue'
export default {
  data () {
    return {
      title: '个人信息'
    }
  },
  components: {
    personalHeader
  },
  methods: {
    gochangename () {
      this.$router.push('/changename')
    },
    gobirthday () {
      this.$router.push('/birthday')
    }
  }
}
</script>

<style lang='less' scoped>
.userBox {
  padding-top: 1.333333rem; /* 100/75 */
  background-color: #fafbfb;
  padding-bottom: 1.333333rem /* 100/75 */;
}
.list {
  padding: 0 0.48rem /* 36/75 */;

  .headerimg {
    border-radius: 0.266667rem /* 20/75 */;
    padding: 0 0.266667rem /* 20/75 */;
    p {
      line-height: 1.706667rem /* 128/75 */;
      position: relative;
      border-bottom: 1px solid #e6e6e6;
      font-size: 0.4rem /* 30/75 */;
      font-weight: 600;
      img {
        height: 1.066667rem /* 80/75 */;
        width: 1.066667rem /* 80/75 */;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
  }
}
.userlist {
  padding: 0 0.266667rem /* 20/75 */;
  li {
    line-height: 1.253333rem /* 94/75 */;
    font-size: 0.373333rem; /* 28/75 */
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    // padding-left: 0.96rem /* 72/75 */;
    // box-sizing: border-box;
    .img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 0.64rem /* 48/75 */;
      height: 0.64rem /* 48/75 */;
      // margin-right: 0.32rem /* 24/75 */;
    }
    i {
      color: #000;
      font-weight: 600;
    }
    .right {
      float: right;
      padding-right: 0.333333rem /* 10/75 */;
      color: #999999;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -0.133333rem /* 10/75 */;
        width: 0.38rem /* 18/75 */;
        height: 0.38rem /* 18/75 */;
      }
    }
  }
}
</style>
