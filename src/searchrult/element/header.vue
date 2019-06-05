<template>
  <div class="header">
    <div class="left">
      <a href="javascript:history.back(-1)">
        <img src="../../assets/images/reture.png" alt />
      </a>
    </div>
    <div class="right">
      <a href="javascript:history.back(-1)">
        <input
          type="text"
          placeholder="输入线路搜索"
          class="ipt"
          v-model="searchIput"
          autofocus
        />
        <div class="bgcsea"></div>
        <span class="righttitle">搜索</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      searchIput: this.title
    }
  },
  methods: {},
  watch: {
    searchIput () {
      this.$emit('gitSearch', this.searchIput)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.96rem /* 72/75 */;
  width: 100%;
  line-height: 0.96rem /* 72/75 */;
  padding-top: 0.32rem /* 24/75 */;
  z-index: 999;
  background-color: #fff;

  .left {
    padding-left: 0.48rem /* 36/75 */;
    float: left;
    width: 1.173333rem /* 88/75 */;
    font-size: 0.373333rem /* 28/75 */;
    box-sizing: border-box;
    a {
      text-decoration: none;
      font-size: 0.333333rem /* 25/75 */;
      font-weight: 9.333333rem; /* 700/75 */
      img {
        width: 0.56rem /* 42/75 */;
        margin-top: 0.266667rem; /* 20/75 */
      }
    }
  }
  .right {
    overflow: hidden;
    height: 100%;
    padding-right: 0.48rem /* 36/75 */;
    position: relative;
    .ipt {
      position: relative;
      outline: none;
      // display: block;
      width: 75% /* 552/54 */;
      height: 100% /* 72/54 */;
      background-color: #f5f5f5;
      border: none;
      border-radius: 0.466667rem /* 35/75 */; /* 35/54 */
      font-size: 0.373333rem /* 28/75 */; /* 28/54 */
      padding-left: 0.6rem /* 60/75 */; /* 60/54 */
    }
    .righttitle {
      float: right;
      font-size: 0.426667rem /* 32/75 */; /* 32/54 */
      color: #000;
    }
  }
}
.bgcsea {
  position: absolute;
  top: 0.326667rem /* 32/75 */ /* 30/75 */;
  left: 0.2rem /* 15/75 */;
  width: 0.4rem /* 30/75 */;
  height: 0.4rem /* 26/75 */;
  background: url(../../assets/images/sea.png);
  background-size: 0.4rem /* 26/75 */ 0.4rem; /* 26/75 */
}
</style>
