<template>
  <div class="payment">
    <erweima-header></erweima-header>
    <erweima-payment></erweima-payment>
  </div>
</template>

<script>
import erweimaHeader from './element/header.vue'
import erweimaPayment from './element/payment.vue'
export default {
  components: {
    erweimaHeader,
    erweimaPayment
  }
}
</script>

<style lang='less' scoped>
.payment {
  padding-top: 1.2rem /* 90/75 */;
}
</style>
