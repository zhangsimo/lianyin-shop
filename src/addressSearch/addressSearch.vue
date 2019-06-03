<template>
  <div class="box">
    <address-search-header @gainInput="gaininput"></address-search-header>
    <search-conent v-model="this.input"></search-conent>
  </div>
</template>

<script>
import addressSearchHeader from './element/header.vue'
import searchConent from './element/searchConent.vue'
export default {
  components: {
    addressSearchHeader,
    searchConent
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
    gaininput (res) {
      this.input = res
    }
  }
}
</script>

<style lang='less' scoped>
.box {
  padding-top: 1.333333rem /* 100/75 */;
}
</style>
