<template>
  <mt-loadmore
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="0"
    infinite-scroll-immediate-check="fasle"
  >
    <div class="reslut">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="0"
        infinite-scroll-immediate-check="fasle"
      >
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
      shopList: '',
      keyword: ''
    }
  },
  watch: {
    givesearch (n, o) {
      this.keyword = n
      let lat = this.$store.state.city.let
      let lng = this.$store.state.city.lng
      this.$axios
        .post('/myapi/search_shop_list', {
          lat,
          lng,
          keyword: n,
          page: this.page
        })
        .then(res => {
          this.shopList = res.data.data.shopList
        })
    }
  },

  methods: {
    gitshop (item) {
      console.log(item)
      this.$router.push({ path: '/merchant', query: { id: item.id } })
    },
    loadMore () {
      // 加载更多数据

      if (this.shopList.length % 10 !== 0) {
        return
      }
      this.page++
      this.loading = true
      let lat = this.$store.state.city.let
      let lng = this.$store.state.city.lng
      this.$axios
        .post('/myapi/search_shop_list', {
          lat,
          lng,
          keyword: this.keyword,
          page: this.page
        })
        .then(res => {
          let list = JSON.parse(JSON.stringify(this.shopList))
          this.shopList = list.concat(res.data.data.shopList)
        })
      this.loading = false
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
