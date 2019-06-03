<template>
  <div class="classfigBox">
    <img src="../../assets/swpit.png" class="classfigImage">
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: ''
    }
  }
}
</script>

<style lang='less' scoped>
.classfigBox {
  padding: 0 0.48rem /* 36/75 */;
  box-sizing: border-box;
  .classfigImage {
    width: 100%;
    box-shadow: 0 0.533333rem /* 40/75 */ 0.266667rem /* 20/75 */ -0.266667rem /* 20/75 */
      #dadbfd;
  }
}
</style>
