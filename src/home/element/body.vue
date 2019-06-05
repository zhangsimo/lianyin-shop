<template>
  <div class="classify">
    <div class="food" v-for="(item, index) in value" :key="index" @click="gofood(item)">
      <div class="img">
        <img :src="Url + item.image_url" alt>
        <p>{{ item.category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Url from '../../global-variable.js'
export default {
  props: ['value'],
  data () {
    return {
      Url: Url.baseURL
    }
  },
  methods: {
    gofood (res) {
      this.$router.push({ path: '/classfiy', query: { id: res.category_id } })
    }
  }
}
</script>

<style lang="less" scoped>
.classify {
  width: 100%;
  padding-left: 0.48rem /* 36/75 */;
  padding-right: 0.48rem /* 36/75 */;
  overflow: hidden;
  margin-top: 0.613333rem /* 46/75 */;
  box-sizing: border-box;

  .food,
  .retail,
  .play,
  .live {
    width: 25%;
    // height: 1.733333rem /* 130/75 */;
    // height: 1.8rem /* 135/75 */;
    float: left;
    a {
      text-decoration: none;
    }
    .img {
      width: 100%;
      // height: 1.481481rem; /* 80/54 */
      text-align: center;
      img {
        width: 1.066667rem /* 80/75 */;
        height: 1.066667rem /* 80/75 */;
      }
      p {
        font-size: 0.373333rem /* 28/75 */;
        margin: 0;
        margin-top: 0.266667rem; /* 20/75 */
        height: 0.46667rem /* 32/75 */;
      }
    }
  }
}
</style>
