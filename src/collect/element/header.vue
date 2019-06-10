<template>
  <div>
    <mt-header title="收藏" class="classifyHeader" :fixed="isFixed">
      <a href="javascript:history.back(-1)" slot="left">
        <i class="iconfont classifyBack">&#xe62e;</i>
      </a>
    </mt-header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFixed: true
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
</style>
<style lang='less'>
.classifyHeader {
  .mint-header-title {
    height: 0.5rem;
  }
}
</style>
