<template>
  <div class="userBox">
    <personal-header :title="title"></personal-header>
    <div class="list">
      <p class="username">用户名</p>
      <div class="inptbox">
        <input type="text" placeholder="请输入用户名称">
      </div>
      <p class="nameMessage">以中文或英文字母开头,限4-16个字符,一个汉字为2个字符</p>
      <div class="btn">确认</div>
    </div>
  </div>
</template>

<script>
import personalHeader from '../../common/header.vue'
export default {
  data () {
    return {
      title: '修改昵称'
    }
  },
  components: {
    personalHeader
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

  .username {
    line-height: 1.2rem; /* 90/75 */
    font-size: 0.4rem /* 30/75 */;
    color: #666666;
  }
  .inptbox {
    height: 1rem /* 75/75 */;
    line-height: 1rem;
    border-bottom: 1px solid #e6e6e6;
  }
  input {
    border: none;
    outline: none;
    font-size: 0.453333rem /* 34/75 */;
    font-weight: 600;
    color: #000;
    height: 80%;
  }
}
.nameMessage {
  margin-top: 0.453333rem /* 34/75 */;
  font-size: 0.32rem /* 24/75 */;
  color: #999999;
  letter-spacing: 0.053333rem /* 4/75 */;
  line-height: 0.453333rem /* 34/75 */;
}
.btn {
  margin-top: 0.48rem /* 36/75 */;
  border-radius: 0.2rem; /* 15/75 */
  background-color: #3d45f4;
  height: 1.28rem /* 96/75 */;
  text-align: center;
  line-height: 1.28rem;
  color: #fff;
  font-size: 0.426667rem /* 32/75 */;
}
</style>
