<template>
  <div class="box">
    <status-header @getSearchCity="getSearchCity"></status-header>
    <search-city v-show="searchCity === '' ? true :false "></search-city>
    <search-roulter v-show="searchCity === '' ? false : true" :giveresult="searchCity"></search-roulter>
  </div>
</template>

<script>
import statusHeader from './element/header.vue'
import searchCity from './element/searchCity.vue'
import searchRoulter from './element/searchrulter.vue'

export default {
  components: {
    statusHeader,
    searchCity,
    searchRoulter
  },
  data () {
    return {
      searchCity: ''
    }
  },
  methods: {
    getSearchCity (res) {
      this.searchCity = res
    }
  }
}
</script>

<style lang='less' scoped>
.box {
  padding-top: 1.466667rem /* 110/75 */;
  background-color: #ffffff;
}
</style>
