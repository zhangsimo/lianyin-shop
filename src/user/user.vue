<template>
  <div class="userBox">
    <user-header></user-header>
    <user-footer></user-footer>
  </div>
</template>

<script>
import userHeader from '../common/header.vue'
import userFooter from './element/footer.vue'
export default {
  components: {
    userHeader,
    userFooter
  }
}
</script>

<style lang='less' scoped>
.userBox {
  padding-top: 1.333333rem; /* 100/75 */
}
</style>
