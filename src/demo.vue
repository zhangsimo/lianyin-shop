<template>
  <div>
    <!-- <mt-loadmore :bottom-method="loadBottom" ref="loadmore">
      <ul class="box" :style="{height: contentH + 'px'}" ref="wrapper">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
    </mt-loadmore>-->
    <ul class="box">
      <li
        v-for="(item ,index) in list"
        :key="index"
        :aa="item.conount.split('.')[1]"
      >{{item.conount.split('.')[1]}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contentH: '',
      list: [
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' },
        { name: 'zs', conount: 'wqweqwe.212313123' }
      ]
    }
  }
  // mounted () {
  //   this.$nextTick(function () {
  //     this.contentH =
  //       document.documentElement.clientHeight -
  //       this.$refs.wrapper.getBoundingClientRect().top
  //   })
  // },
  // methods: {
  //   loadBottom () {
  //     // 加载更多数据
  //     console.log(123)

  //     this.allLoaded = true // 若数据已全部获取完毕
  //     this.$refs.loadmore.onBottomLoaded()
  //     // console.log(12313)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.box {
  li {
    line-height: 0.666667rem; /* 50/75 */
  }
}
</style>
