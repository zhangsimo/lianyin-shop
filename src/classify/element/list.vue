<template>
  <div class="merchant">
    <h3>附近商家</h3>
    <ul>
      <li>
        <div class="merchantlist">
          <div class="title">
            <h2>香满楼XXX</h2>
            <p>4.0km</p>
          </div>
          <div>
            <p class="explain">简介: 1231这里有个12231231231231231231231321</p>
          </div>
          <div class="img">
            <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>
          </div>
        </div>
      </li>
      <li>
        <div class="merchantlist">
          <div class="title">
            <h2>香满楼XXX</h2>
            <p>4.0km</p>
          </div>
          <div>
            <p class="explain">简介: 1231这里有个12231231231231231231231321</p>
          </div>
          <div class="img">
            <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>
          </div>
        </div>
      </li>
    </ul>
    <!-- <ul>
        <li v-for="item in list">
          <img v-lazy="item">
        </li>
    </ul>-->
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.merchant {
  margin-top: 0.533333rem /* 25/75 */;
  background-color: #f7f7f8;
  padding: 0 0.48rem /* 36/75 */;
  ul {
    margin-bottom: 1.759259rem /* 95/54 */;
    li {
      margin-bottom: 0.333333rem /* 25/75 */;
    }
  }
  h3 {
    font-size: 0.48rem /* 36/75 */;
    margin-bottom: 0.333333rem; /* 25/75 */
  }
  .merchantlist {
    width: 100%;
    padding-left: 0.444444rem; /* 24/54 */
    padding-right: 0.333333rem /* 18/54 */;
    box-sizing: border-box;
    background-color: #fff;
    .title {
      height: 0.933333rem /* 70/75 */;
      width: 100%;
      // background-color: #ffffff;
      h2 {
        float: left;
        margin-top: 0.633333rem;
        font-size: 0.453333rem /* 34/75 */;
      }
      p {
        float: right;
        margin-top: 0.933333rem;
        font-size: 0.293333rem /* 22/75 */;
        color: #666666;
      }
    }
    .explain {
      font-size: 0.32rem /* 24/75 */;
      color: #666666;
      margin-top: 0.462963rem; /* 25/54 */
      height: 0.518519rem /* 28/54 */;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .img {
      margin-top: 0.466667rem /* 35/75 */;
      img {
        width: 31% /* 205/54 */;
        // height: 3.396296rem /* 205/54 */;
      }
      img:nth-child(2) {
        margin: 0 0.133333rem /* 10/75 */; /* 15/75 */
      }
    }
  }
}
</style>
