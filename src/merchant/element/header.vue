<template>
  <div>
    <mt-header title="商家详情" class="merchantHeader" :fixed="isFixed">
      <router-link to="/home" slot="left">
        <i class="iconfont merchantBack">&#xe62e;</i>
      </router-link>
      <div slot="right" class="right">
        <a slot="left">
          <i class="iconfont merchantBack">&#xe629;</i>
        </a>
        <a @click="collect">
          <i class="iconfont merchantBack">&#xe6ae;</i>
        </a>
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
  },
  methods: {
    collect () {
      let id = location.href.split('=')[1]
      this.$messagebox.confirm('确定要收藏此商家?').then(() => {
        this.$axios
          .post('/myapi/collect_shop', {
            shopId: id,
            type: 1
          })
          .then(res => {
            this.$messagebox.alert('收藏成功')
          })
      })
    }
    // share(){
    //    this.$messagebox.confirm('')
    // }
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
    height: 0.6rem;
  }
}
</style>
