<template>
  <div class="submitFather">
    <submit-header :title="oneList"></submit-header>
    <buy-submint :buy="oneList.goods"></buy-submint>
  </div>
</template>

<script>
import submitHeader from './element/header.vue'
import buySubmint from './element/buysubmit.vue'
export default {
  components: {
    submitHeader,
    buySubmint
  },
  data () {
    return {
      oneList: ''
    }
  },
  created () {
    this.buyNew()
  },
  methods: {
    buyNew () {
      this.oneList = this.$store.state.one
    }
  }
}
</script>

<style>
.submitFather {
  margin-top: 1.2rem /* 90/75 */;
}
</style>
