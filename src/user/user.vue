<template>
  <div class="userBox">
    <user-header :title="title"></user-header>
    <div>
      <user-list></user-list>
    </div>
    <user-footer></user-footer>
  </div>
</template>

<script>
import userHeader from '../common/header.vue'
import userFooter from './element/footer.vue'
import userList from './element/userlist.vue'
export default {
  components: {
    userHeader,
    userFooter,
    userList
  },
  data () {
    return {
      title: '个人信息'
    }
  }
}
</script>

<style lang="less" scoped>
.userBox {
  padding-top: 1.333333rem; /* 100/75 */
  background-color: #fafbfb;
  padding-bottom: 1.333333rem /* 100/75 */;
  div {
    overflow: scroll;
  }
}
</style>
