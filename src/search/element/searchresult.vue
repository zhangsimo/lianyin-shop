<template>
  <mt-loadmore
    :bottom-method="loadBottom"
    bottomPullText
    :bottomDistance="0"
    :autoFill="false"
    ref="loadmore"
  >
    <div class="reslut">
      <ul :style="{ height: contentH + 'px' }" ref="wrapper">
        <li v-for="(item , index) in shopList" :key="index" @click="gitshop(item)">
          <span>{{item.merchant_name.slice(0,item.merchant_name.toLowerCase().indexOf(givesearch.toLowerCase()))}}</span>
          <span
            style="color:#2A70FE"
          >{{item.merchant_name.slice(item.merchant_name.toLowerCase().indexOf(givesearch.toLowerCase()),item.merchant_name.toLowerCase().indexOf(givesearch.toLowerCase())+givesearch.length)}}</span>
          <span>{{item.merchant_name.substr(item.merchant_name.toLowerCase().indexOf(givesearch.toLowerCase())+givesearch.length)}}</span>
          <span class="iconfont right">&#xe614;</span>
        </li>
      </ul>
    </div>
  </mt-loadmore>
</template>

<script>
export default {
  props: ['givesearch'],
  data () {
    return {
      page: 1,
      shopList: ''
    }
  },
  watch: {
    givesearch (n, o) {
      let lat = this.$store.state.city.let
      let lng = this.$store.state.city.lng
      this.$axios
        .post('/myapi/search_shop_list', {
          lat,
          lng,
          token: 1,
          keyword: n,
          page: this.page
        })
        .then(res => {
          this.shopList = res.data.data.shopList
        })
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.contentH =
        document.documentElement.clientHeight -
        this.$refs.wrapper.getBoundingClientRect().top
    })
  },
  methods: {
    gitshop (item) {
      console.log(item)
      this.$router.push({ path: '/merchant', query: { id: item.id } })
    },
    loadBottom () {
      console.log(123)

      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>

<style lang='less' scoped>
.reslut {
  padding: 0 0.48rem; /* 36/75 */
  box-sizing: border-box;
  li {
    line-height: 1.306667rem; /* 98/75 */
    border-bottom: 2px solid #e6e6e6;
    font-size: 0.426667rem; /* 32/75 */
  }
  .right {
    float: right;
    font-size: 0.426667rem; /* 32/75 */
  }
}
</style>
