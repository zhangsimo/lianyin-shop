<template>
  <div class="collectbox">
    <collect-header></collect-header>
    <collect-list :list="shoplist"></collect-list>
  </div>
</template>

<script>
import collectHeader from './element/header.vue'
import collectList from './element/list.vue'
export default {
  components: {
    collectHeader,
    collectList
  },
  data () {
    return {
      page: 1,
      shoplist: ''
    }
  },
  created () {
    this.collectshoplist()
  },
  methods: {
    async collectshoplist () {
      let res = await this.$axios.post('/myapi/collect_shop_list')
      if (res.data.code === '0') {
        this.shoplist = res.data.list
      }
      console.log(this.shoplist)
    }
  }
}
</script>

<style scoped>
.collectbox {
  padding-top: 1.333333rem /* 100/75 */;
}
</style>
