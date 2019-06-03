<template>
  <div class="box">
    <mayi-header></mayi-header>
    <mayi-history></mayi-history>
    <!-- <mayi-resule></mayi-resule> -->
  </div>
</template>

<script>
import header from '../common/header/header.vue'
// import result from './element/result.vue'
import history from './element/history.vue'
export default {
  components: {
    mayiHeader: header,
    mayiHistory: history
    // mayiResule: result
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getHistory()
  },
  methods: {
    getHistory () {
      // 如果读取不出来数据, 默认初始化为 '[]'
      let history = localStorage.getItem('search_list') || '[]' // 得到历史
      let arr = JSON.parse(history) // 转成数组
      this.list = arr
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-top: 1.333333rem /* 100/75 */; /* 100/54 */
  background-color: #f8f8f9;
}
</style>
