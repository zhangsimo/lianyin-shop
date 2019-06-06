<template>
  <div class="merchantFather">
    <mayi-header></mayi-header>
    <mayi-details :shoplist="shopList"></mayi-details>
  </div>
</template>

<script>
import header from './element/header.vue'
import details from './element/details.vue'
export default {
  components: {
    mayiHeader: header,
    mayiDetails: details
  },
  data () {
    return {
      shopList: ''
    }
  },
  created () {
    this.getShop()
  },
  methods: {
    async getShop () {
      let id = location.href.split('=')[1]
      let res = await this.$axios.post('/myapi/shop_detail', {
        id: id
      })

      this.shopList = res.data.data.shopDetail
    }
  }
}
</script>
<style lang="less" scoped>
.merchantFather {
  padding-top: 1.2rem; /* 90/75 */
}
</style>
