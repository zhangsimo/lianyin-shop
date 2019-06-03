<template>
  <div class="header">
    <div class="left">
      <a href="javas cript:history.back(-1)" class="iconfont">&#xe62e;</a>
    </div>
    <div class="right">
      <input type="text" placeholder="输入线路搜索" class="ipt" v-model="searchIput">
      <span class="righttitle" @click="addHistory">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchIput: ''
    }
  },
  methods: {
    addHistory () {
      let jsonstr = localStorage.getItem('search_list') || '[]'
      let arr = JSON.parse(jsonstr)

      let index = arr.indexOf(this.searchIput)
      if (index > -1) {
        // 已经存在, 删除该项
        arr.splice(index, 1)
      }
      // 2. 不能超过10个
      if (arr.length >= 10) {
        arr.pop()
      }
      arr.unshift(this.searchIput)
      this.searchIput = ''

      // let id = arr[arr.length].id === 0 ? 1 : arr[arr.length].id + 1

      //   arr.push({
      //     id,
      //     name: this.searchIput
      //   })
      // }

      localStorage.setItem('search_list', JSON.stringify(arr))
    }
    // gaininput () {
    //   this.$emit('gainInput', this.searchIput)
    // }
  },
  watch: {
    searchIput: function (newQuestion) {
      this.$emit('gainInput', this.searchIput)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.96rem /* 72/75 */;
  width: 100%;
  line-height: 0.96rem /* 72/75 */;
  padding-top: 0.32rem /* 24/75 */;
  z-index: 999;
  background-color: #fff;

  .left {
    padding-left: 0.48rem /* 36/75 */;
    float: left;
    width: 1.173333rem /* 88/75 */;
    font-size: 0.373333rem /* 28/75 */;
    box-sizing: border-box;
    a {
      text-decoration: none;
      font-size: 0.333333rem /* 25/75 */;
      font-weight: 9.333333rem; /* 700/75 */
    }
  }
  .right {
    overflow: hidden;
    height: 100%;
    padding-right: 0.48rem /* 36/75 */;

    .ipt {
      position: relative;
      outline: none;
      // display: block;
      width: 75% /* 552/54 */;
      height: 100% /* 72/54 */;
      background-color: #f5f5f5;
      border: none;
      border-radius: 0.466667rem /* 35/75 */; /* 35/54 */
      font-size: 0.373333rem /* 28/75 */; /* 28/54 */
      padding-left: 0.8rem /* 60/75 */; /* 60/54 */
    }
    .righttitle {
      float: right;
      font-size: 0.426667rem /* 32/75 */; /* 32/54 */
    }
  }
}
</style>
