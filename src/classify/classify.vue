<template>
  <div class="classifyFather">
    <mayi-header :title="classifyTitle"></mayi-header>
    <mayi-image></mayi-image>
    <mayi-list></mayi-list>
  </div>
</template>

<script>
import header from '../common/header.vue'
import image from './element/body.vue'
import list from './element/list.vue'
export default {
  data () {
    return {
      classifyTitle: '美食'
    }
  },
  components: {
    mayiHeader: header,
    mayiImage: image,
    mayiList: list
  }
}
</script>

<style lang="less" scoped>
.classifyFather {
  padding-top: 1.2rem; /* 90/75 */
}
</style>
