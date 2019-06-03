<template>
  <div class="classify">
    <div class="food" @click="gofood(categoryList[0])">
      <div class="img">
        <img src="../../assets/images/1.png" alt>
        <p>{{categoryList[0].category.name}}</p>
      </div>
    </div>
    <div class="retail" @click="gofood(categoryList[1])">
      <div class="img">
        <img src="../../assets/images/2.png" alt>
        <p>{{categoryList[1].category.name}}</p>
      </div>
    </div>
    <div class="play" @click="gofood(categoryList[2])">
      <div class="img">
        <img src="../../assets/images/3.png" alt>
        <p>{{categoryList[2].category.name}}</p>
      </div>
    </div>
    <div class="live" @click="gofood(categoryList[3])">
      <div class="img">
        <img src="../../assets/images/4.png" alt>
        <p>{{categoryList[3].category.name}}</p>
      </div>
    </div>
    <!-- 暂时取消 -->
    <!-- <div class="travel">
      <div class="img">
        <img src="../../assets/images/4.png" alt />
        <p>旅行</p>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ['categoryList'],
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
