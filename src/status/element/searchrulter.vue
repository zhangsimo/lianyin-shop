<template>
  <div class="rulterbox">
    <h5
      class="title"
      v-for="(item ,index) in cityList"
      :key="index"
      @click="gethome(item)"
    >{{item.name}}</h5>
  </div>
</template>

<script>
import historyCity from '../../global-variable.js'
export default {
  props: ['giveresult'],
  data () {
    return {
      cityList: ''
    }
  },
  methods: {
    gethome (item) {
      historyCity.hoistoryCity(item.name)
      this.$store.commit('changeCity', item)
      // 跳转首页
      this.$router.push('/home')
    }
  },
  watch: {
    giveresult (n, o) {
      let list = JSON.parse(JSON.stringify(this.$store.state.cityList))
      this.cityList = list.filter(item => {
        return item.name.search(n) !== -1
      })
    }
  }
}
</script>

<style lang='less' scoped>
.rulterbox {
  background-color: #ffffff;
  .title {
    font-size: 0.426667rem; /* 32/75 */
    padding: 0 0.48rem; /* 36/75 */
    line-height: 1.253333rem; /* 94/75 */
    border-bottom: 2px solid #e6e6e6;
  }
}
</style>
