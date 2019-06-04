<template>
  <div class="header">
    <div class="left" @click="changeCity">
      {{ this.$store.state.city.name }}
      <i>∨</i>
    </div>
    <div class="right">
      <input type="text" placeholder="输入线路搜索" class="ipt" @click="tosearch">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      city: '常州'
    }
  },

  methods: {
    changeCity() {
      this.$router.push({ path: '/status' })
    },
    tosearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 1.333333rem /* 100/75 */ /* 72/75 */;
  width: 100%;
  line-height: 1.333333rem /* 100/75 */;
  // padding-top: 0.rem /* 24/75 */;
  z-index: 999;
  background-color: #fff;
  box-sizing: border-box;
  .left {
    padding-left: 0.48rem /* 36/75 */;
    float: left;
    // width: 2.186667rem /* 164/75 */;
    font-size: 0.426667rem; /* 32/75 */
    box-sizing: border-box;
  }
  .right {
    overflow: hidden;
    height: 100%;

    .ipt {
      position: relative;
      outline: none;
      // display: block;
      width: 90% /* 552/54 */;
      height: 0.96rem /* 72/75 */;
      background-color: #f5f5f5;
      border: none;
      border-radius: 0.648148rem; /* 35/54 */
      font-size: 0.373333rem /* 28/75 */;
      padding-left: 0.32rem /* 24/75 */;
    }
  }
}
</style>
