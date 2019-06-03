<template>
  <div>
    <mt-header title="商家详情" class="merchantHeader" :fixed="isFixed">
      <router-link to="/" slot="left">
        <i class="iconfont merchantBack">&#xe62e;</i>
      </router-link>
      <div slot="right" class="right">
        <router-link to="/" slot="left">
          <i class="iconfont merchantBack">&#xe629;</i>
        </router-link>
        <router-link to="/" slot="left">
          <i class="iconfont merchantBack">&#xe6ae;</i>
        </router-link>
        <router-link to="/" slot="left">
          <i class="iconfont merchantBack">&#xe626;</i>
        </router-link>
      </div>
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

<style lang="less" scoped>
.merchantHeader {
  height: 1.2rem /* 90/75 */;
  color: #000;
  font-size: 0.48rem; /* 36/75 */
  padding-left: 0.48rem /* 36/75 */;
  padding-right: 0.48rem /* 36/75 */;
  background-color: #fff;
  box-sizing: border-box;
  .right {
    .iconfont {
      color: #000;
      margin-left: 0.133333rem /* 10/75 */;
    }
  }

  a {
    // height: 0.346667rem /* 26/75 */;
    text-decoration: none;
    font-size: 0.48rem; /* 36/75 */
    .merchantBack {
      font-size: 0.48rem;
    }
  }
}
</style>
<style lang="less">
.merchantHeader {
  .mint-header-title {
    height: 0.5rem;
  }
}
</style>
