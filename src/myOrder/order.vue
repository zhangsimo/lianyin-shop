<template>
  <div class="orderBox">
    <order-header :title="headerTitle"></order-header>
    <order-list></order-list>
    <order-footer></order-footer>
  </div>
</template>

<script>
import orderHeader from '../common/header'
import orderList from './element/orderList.vue'
import orderFooter from './element/footer.vue'
export default {
  components: {
    orderHeader,
    orderList,
    orderFooter
  },
  data () {
    return {
      headerTitle: '我的订单'
    }
  }
}
</script>

<style lang="less" scoped>
.orderBox {
  padding-top: 1.2rem; /* 90/75 */
}
</style>
<style lang="less">
</style>
