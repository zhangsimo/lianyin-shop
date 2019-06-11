<template>
  <div class="father">
    <result-header :title="title"></result-header>
    <mt-loadmore
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="fasle"
    >
      <resukt :shopList="shopList"></resukt>
    </mt-loadmore>
  </div>
</template>

<script>
import resultHeader from './element/header.vue'
import resukt from './element/result.vue'
export default {
  components: {
    resultHeader,
    resukt
  },
  data () {
    return {
      page: 1,
      shopList: '',
      title: ''
    }
  },
  created () {
    this.shop()
  },
  methods: {
    shop () {
      let lat = this.$store.state.city.let
      let lng = this.$store.state.city.lng
      let name = decodeURI(location.href.split('=')[1])
      this.title = name
      this.$axios
        .post('/myapi/search_shop_list', {
          lat,
          lng,
          keyword: name,
          page: this.page
        })
        .then(res => {
          this.shopList = res.data.data.shopList
        })
    },
    loadMore () {
      // 加载更多数据
      if (this.shopList.length % 10 !== 0) {
        return
      }
      console.log(123)

      this.loading = true
      this.page++
      let lat = this.$store.state.city.let
      let lng = this.$store.state.city.lng
      let name = decodeURI(location.href.split('=')[1])
      this.title = name
      this.$axios
        .post('/myapi/search_shop_list', {
          lat,
          lng,
          keyword: name,
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

<style scoped>
.father {
  padding-top: 1.333333rem; /* 100/75 */
}
</style>
