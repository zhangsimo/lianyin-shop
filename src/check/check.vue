<template>
  <div>
    <mt-header title="券码核销" class="classifyHeader"></mt-header>
    <div class="box">
      <div class="btn" @click="check">使用该券</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    check () {
      let token = decodeURIComponent(location.href.split('=')[1])
      console.log(token)

      this.$messagebox.confirm('确定使用此券码?').then(() => {})
    }
  }
}
</script>

<style lang='less' scoped>
.classifyHeader {
  height: 1.2rem /* 90/75 */;
  color: #000;
  font-size: 0.48rem; /* 36/75 */
  padding-left: 0.48rem /* 36/75 */;
  background-color: #fff;

  a {
    // height: 0.346667rem /* 26/75 */;
    text-decoration: none;
    font-size: 0.48rem; /* 36/75 */
    .classifyBack {
      font-size: 0.48rem;
    }
  }
}
.box {
  margin: 1.333333rem /* 100/75 */ auto;
  padding: 0 0.48rem /* 36/75 */;
  .btn {
    width: 100%;
    height: 1.333333rem /* 100/75 */;
    text-align: center;
    line-height: 1.333333rem /* 100/75 */;
    background-color: #037ffe;
    border-radius: 0.2rem; /* 15/75 */
    color: #fff;
    font-size: 0.48rem; /* 36/75 */
  }
}
</style>
<style lang='less'>
.classifyHeader {
  .mint-header-title {
    height: 0.5rem;
  }
}
</style>
