<template>
  <div class="father">
    <result-header :title="title"></result-header>
    <resukt :shopList="shopList"></resukt>
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
    }
  }
}
</script>

<style scoped>
.father {
  padding-top: 1.333333rem; /* 100/75 */
}
</style>
