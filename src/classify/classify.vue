<template>
  <div class="classifyFather">
    <mayi-header :title="classifyTitle"></mayi-header>
    <mayi-image></mayi-image>
    <mayi-list :shoplist="shoplist"></mayi-list>
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
      shoplist: ''
    }
  },
  components: {
    mayiHeader: header,
    mayiImage: image,
    mayiList: list
  },
  async created () {
    let id = location.href.split('=')[1]
    let latX = this.$store.state.city.let
    let lngY = this.$store.state.city.lng
    let res = await this.$axios.post('/myapi/shop_list', {
      lat: latX,
      lng: lngY,
      categoryId: id,
      page: this.page
    })
    console.log(res)
    this.classifyTitle = res.data.data.categoryInfo.name
    this.shoplist = res.data.data.shopList
  }
}
</script>

<style lang="less" scoped>
.classifyFather {
  padding-top: 1.2rem; /* 90/75 */
}
</style>
