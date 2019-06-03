<template>
  <div class="orderListBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待付款</mt-tab-item>
      <mt-tab-item id="3">待使用</mt-tab-item>
      <mt-tab-item id="4">已完成</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <all-order-list></all-order-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <stay-buy></stay-buy>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <stay-use></stay-use>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <done></done>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import allOrderList from './allorderlist.vue'
import stayUse from './stayuse.vue'
import stayBuy from './staybuy.vue'
import done from './done.vue'
export default {
  components: {
    allOrderList,
    stayUse,
    stayBuy,
    done
  },
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style lang="less" scoped>
.orderListBox {
  padding: 0 0.48rem /* 36/75 */;
  box-sizing: border-box;
  background-color: #fafafa;
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
