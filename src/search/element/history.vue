<template>
  <div class="mayibox">
    <div class="history">
      <span class="left">历史搜索</span>
      <span class="right iconfont" @click="trashAll">&#xe637;</span>
    </div>
    <div>
      <ul class="listUl">
        <li v-for="(item, index) in list" :key="index" class="listOne">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          name: '兰州拉面'
        }
      ]
    }
  },
  created () {
    this.getHistory()
  },
  methods: {
    getHistory () {
      // 如果读取不出来数据, 默认初始化为 '[]'
      var history = localStorage.getItem('search_list') || '[]' // 得到历史
      var arr = JSON.parse(history) // 转成数组
      this.list = arr
      console.log(arr)
    },
    trashAll () {
      localStorage.removeItem('search_list')
      this.getHistory()
    }
  }
}
</script>

<style lang="less" scoped>
.mayibox {
  margin-top: 0.106667rem; /* 8/75 */
  .history {
    height: 1rem /* 75/75 */;
    width: 100%;
    line-height: 1rem;
    padding: 0 0.48rem /* 36/75 */;
    box-sizing: border-box;
    font-size: 0.373333rem /* 28/75 */;
    color: #999999;
    .left {
      float: left;
    }
    .right {
      float: right;
      font-size: 0.426667rem /* 32/75 */;
    }
  }
  .listUl {
    overflow: hidden;
  }
  .listOne {
    float: left;
    margin-left: 0.293333rem; /* 22/75 */
    padding: 0.4rem /* 30/75 */ 0.48rem; /* 36/75 */
    background-color: #fff;
    border-radius: 0.2rem /* 15/75 */;
    font-size: 0.373333rem; /* 28/75 */
    margin-bottom: 0.32rem /* 24/75 */;
    border: 2px solid #f6f6f6;
  }
}
</style>
