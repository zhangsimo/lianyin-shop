<template>
  <div class="orderListBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <router-link to="/allorderlist" @click="changecolor">全部</router-link>
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link to="/staybuy">代付款</router-link>
      </mt-tab-item>
      <mt-tab-item id="3">
        <router-link to="/stayuse">待使用</router-link>
      </mt-tab-item>
      <mt-tab-item id="4">
        <router-link to="/done">已完成</router-link>
      </mt-tab-item>
    </mt-navbar>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import allOrderList from './allorderlist.vue'
// import stayUse from './stayuse.vue'
// import stayBuy from './staybuy.vue'
// import done from './done.vue'
export default {
  components: {
    // allOrderList,
    // stayUse,
    // stayBuy,
    // done
  },
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    changecolor () {
      console.log(123)
    }
  }
}
</script>

<style lang="less" scoped>
.orderListBox {
  padding: 0 0.48rem /* 36/75 */;
  box-sizing: border-box;
  background-color: #fafafa;
  a {
    text-decoration: none;
    color: #222222;
  }
}
</style>
<style lang="less">
.mint-navbar {
  height: 1.066667rem; /* 80/75 */
  .mint-tab-item-label {
    font-size: 0.373333rem; /* 28/75 */
  }
}
</style>
