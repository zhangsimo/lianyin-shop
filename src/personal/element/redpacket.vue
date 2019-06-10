<template>
  <div class="userBox">
    <personal-header :title="title"></personal-header>
    <div class="list">
      <p class="title">暂无如何记录</p>
    </div>
  </div>
</template>

<script>
import personalHeader from '../../common/header.vue'
export default {
  data () {
    return {
      title: '淘红包记录'
    }
  },
  components: {
    personalHeader
  }
}
</script>

<style lang="less" scoped>
.userBox {
  padding-top: 1.333333rem; /* 100/75 */
  background-color: #fafbfb;
  // padding-bottom: 1.333333rem /* 100/75 */;
  // height: 100%;
}
.list {
  padding: 0 0.48rem /* 36/75 */;
  // height: 100px;
  // width: 100%;
  box-sizing: border-box;
  // background-color: #f99;
}
.title {
  font-size: 0.426667rem /* 32/75 */;
  color: #b4b4b4;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
}
</style>
