<template>
  <div class="header">
    <div class="left">
      <a href="javas cript:history.back(-1)">
        <img src="../../assets/images/reture.png" alt />
      </a>
    </div>
    <div class="right">
      <input
        type="text"
        placeholder="城市/拼音"
        class="ipt"
        v-model="statusIput"
      />
      <!-- @keyup.enter="addHistory" -->
      <div class="bgcsea"></div>
    </div>
  </div>
</template>

<script>
// import historyCity from '../../global-variable.js'
export default {
  data () {
    return {
      statusIput: ''
    }
  },
  methods: {
    // addHistory () {
    //   historyCity.hoistoryCity(this.statusIput)
    //   this.statusIput = ''
    // }
  },
  watch: {
    statusIput () {
      this.$emit('getSearchCity', this.statusIput)
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
    padding-top: 0.133333rem; /* 10/75 */
    box-sizing: border-box;
    margin-right: 0.133333rem /* 10/75 */;
    a {
      text-decoration: none;
      font-size: 0.333333rem /* 25/75 */;
      font-weight: 9.333333rem; /* 700/75 */
      img {
        width: 0.56rem /* 42/75 */;
      }
    }
  }
  .right {
    overflow: hidden;
    height: 100%;
    padding-right: 0.28rem /* 36/75 */;
    position: relative;
    .ipt {
      position: relative;
      outline: none;
      width: 85% /* 552/54 */;
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
    }
  }
}
.bgcsea {
  position: absolute;
  top: 0.306667rem /* 32/75 */ /* 30/75 */;
  left: 0.2rem /* 15/75 */;
  width: 0.4rem /* 30/75 */;
  height: 0.4rem /* 26/75 */;
  background: url(../../assets/images/sea.png);
  background-size: 0.4rem /* 26/75 */ 0.4rem; /* 26/75 */
}
</style>
