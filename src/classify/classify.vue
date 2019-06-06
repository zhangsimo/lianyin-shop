<template>
  <div class="classifyFather">
    <mayi-header :title="classifyTitle"></mayi-header>
    <mt-loadmore
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
      infinite-scroll-immediate-check="fasle"
    >
      <mayi-image></mayi-image>
      <mayi-list :shoplist="shoplist"></mayi-list>
    </mt-loadmore>
  </div>
</template>

<script>
import header from '../common/header.vue'
import image from './element/body.vue'
import list from './element/list.vue'
export default {
  data () {
    return {
      classifyTitle: '美食',
      page: 1,
      shoplist: '',
      id: '',
      latX: '',
      lngY: ''
    }
  },
  components: {
    mayiHeader: header,
    mayiImage: image,
    mayiList: list
  },
  async created () {
    this.id = location.href.split('=')[1]
    this.latX = this.$store.state.city.let
    this.lngY = this.$store.state.city.lng
    let res = await this.$axios.post('/myapi/shop_list', {
      lat: this.latX,
      lng: this.lngY,
      categoryId: this.id,
      page: this.page
    })
    this.classifyTitle = res.data.data.categoryInfo.name
    this.shoplist = res.data.data.shopList
  },
  methods: {
    loadMore () {
      // 加载更多数据
      if (this.shopList.length % 10 !== 0) {
        return
      }
      this.loading = true
      this.page++
      this.$axios
        .post('/myapi/index', {
          lat: this.let,
          lng: this.lng,
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

<style lang="less" scoped>
.classifyFather {
  padding-top: 1.2rem; /* 90/75 */
}
</style>
