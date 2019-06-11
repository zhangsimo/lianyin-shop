<template>
  <div class="header">
    <div class="left">
      <router-link to="/home">
        <img src="../../assets/images/reture.png">
      </router-link>
    </div>
    <div class="right">
      <input type="text" placeholder="输入线路搜索" class="ipt" v-model="searchIput" autofocus>
      <div class="bgcsea"></div>
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
      if (this.searchIput.trim() === '') {
        return
      }
      let jsonstr = localStorage.getItem('search_list') || '[]'
      let arr = JSON.parse(jsonstr)
      this.$router.push({
        path: '/searchresult',
        query: { id: this.searchIput }
      })

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
      localStorage.setItem('search_list', JSON.stringify(arr))
    }
  },
  watch: {
    searchIput () {
      this.$emit('gitSearch', this.searchIput)
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
  padding-top: 0.16rem /* 24/75 */;
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
      img {
        width: 0.586667rem /* 44/75 */;
        margin-top: 0.225rem; /* 15/75 */
      }
    }
  }
  .right {
    overflow: hidden;
    height: 100%;
    padding-right: 0.48rem /* 36/75 */;
    position: relative;
    .ipt {
      position: relative;
      outline: none;
      // display: block;
      width: 80% /* 552/54 */;
      height: 0.96rem /* 72/75 */;
      background-color: #f5f5f5;
      line-height: 0.96rem;
      border: none;
      border-radius: 0.466667rem /* 35/75 */; /* 35/54 */
      font-size: 0.373333rem /* 28/75 */; /* 28/54 */
      padding-left: 0.6rem /* 60/75 */; /* 60/54 */
    }
    .righttitle {
      float: right;
      font-size: 0.426667rem /* 32/75 */; /* 32/54 */
    }
  }
}
.bgcsea {
  position: absolute;
  top: 50% /* 32/75 */ /* 30/75 */;
  transform: translateY(-50%);
  left: 0.2rem /* 15/75 */;
  width: 0.4rem /* 30/75 */;
  height: 0.4rem /* 26/75 */;
  background: url(../../assets/images/sea.png);
  background-size: 0.4rem /* 26/75 */ 0.4rem; /* 26/75 */
}
</style>
