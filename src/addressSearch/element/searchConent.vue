<template>
  <div class="conent">
    <div class="conentTitle">{{this.value}}</div>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang='less' scoped>
.conent {
  width: 100%;
  height: 100%;
  background: #ffffff;
  .conentTitle {
    height: 1.333333rem /* 100/75 */;
    padding-left: 0.48rem /* 36/75 */;
    line-height: 1.333333rem; /* 100/75 */
    font-size: 0.4rem /* 30/75 */;
    background-color: #ffffff;
    border-bottom: 2px solid #e6e6e6;
  }
}
</style>
