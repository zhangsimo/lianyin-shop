<template>
  <div class="box">
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="baseURL + item.image_url" class="img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import variable from '../../global-variable.js'
export default {
  props: ['banner'],

  data () {
    return {
      listImgs: this.banner,
      baseURL: variable.baseURL
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 3.8rem /* 240/75 */;
  width: 100%;
  padding: 0 0.48rem /* 36/75 */;
  margin-top: 0.48rem /* 36/75 */;
  box-sizing: border-box;
  .img {
    width: 100%;
    height: 3.2rem /* 240/75 */;
    box-shadow: 0 0.533333rem /* 40/75 */ 0.266667rem /* 20/75 */ -0.266667rem /* 20/75 */
      #dadbfd;

    // box-shadow: 0 0.462963rem /* 25/54 */ blur spread #d9dbfd inset;
  }
}
</style>
