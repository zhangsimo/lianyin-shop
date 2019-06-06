<template>
  <div>
    <mt-header
      :title="title.goods.title"
      class="classifyHeader"
      :fixed="isFixed"
    >
      <router-link to="/home" slot="left">
        <i class="iconfont classifyBack">&#xe62e;</i>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      isFixed: true
    }
  }
}
</script>

<style lang="less" scoped>
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
<style lang="less">
.classifyHeader {
  .mint-header-title {
    height: 0.5rem;
  }
}
</style>
