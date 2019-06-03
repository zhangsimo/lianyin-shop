<template>
  <div class="merchant">
    <h3>附近商家</h3>
    <ul>
      <li v-for="(item ,index) in shoplist" :key="index" @click="gomerchant(item.id)">
        <div class="merchantlist">
          <div class="title">
            <h2>{{item.merchant_name}}</h2>
            <p>{{item.distance}}km</p>
          </div>
          <div>
            <p class="explain">
              <span class="titleft">简介:</span>
              <span v-html="item.description" class="titleft"></span>
            </p>
          </div>
          <div class="img">
            <img :src="baseURL + item.header_image_url.split(',')[0]" alt>
            <img :src="baseURL + item.header_image_url.split(',')[1]" alt>
            <img :src="baseURL + item.header_image_url.split(',')[2]" alt>
            <!-- <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>-->
          </div>
          <div class="discounts" v-if="item.goods !== null">
            <p>商家优惠</p>
            <div>
              <div class="left">
                <img :src="baseURL + item.goods.title_image.split(',')[0]" alt>
              </div>
              <div class="right">
                <h5 class="top">{{ item.goods.description }}</h5>
                <h5 class="bottom">
                  <div class="discourt">
                    <span style="color:red">￥{{ item.goods.money }}</span> +
                    <span style="color:red">{{ item.goods.packet }}红包值</span>
                  </div>
                  <div class="sales">
                    <span>
                      门市价:
                      <i>￥{{ item.goods.all_money }}</i>
                    </span>
                  </div>
                </h5>
              </div>
            </div>
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
import variable from '../../global-variable.js'
export default {
  props: ['shoplist'],
  data () {
    return {
      baseURL: variable.baseURL
    }
  },
  methods: {
    gomerchant (id) {
      this.$router.push({ path: '/merchant', query: { id: id } })
    }
  }
}
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
    .titleft {
      float: left;
    }
    .img {
      margin-top: 0.466667rem /* 35/75 */;
      img {
        width: 31% /* 205/54 */;
        height: 2.72rem /* 204/75 */;
        // height: 3.396296rem /* 205/54 */;
      }
      img:nth-child(2) {
        margin: 0 0.133333rem /* 10/75 */; /* 15/75 */
      }
    }
  }
}
.discounts {
  overflow: hidden;
  margin-top: 0.4rem /* 30/75 */;
  p {
    font-size: 0.373333rem /* 28/75 */;
    margin-bottom: 0.407407rem /* 22/54 */;
  }
  .left {
    float: left;
    img {
      width: 1.4rem /* 105/75 */;
      height: 1.4rem;
    }
  }
  .right {
    overflow: hidden;
    padding-left: 0.407407rem /* 22/54 */;
    box-sizing: border-box;
    h5 {
      font-size: 0.346667rem /* 26/75 */;
    }
    .top {
      margin-top: 0.1rem;
      margin-bottom: 0.6rem; /* 45/54 */
    }
    .bottom {
      font-size: 0.32rem /* 24/75 */;
      color: #999999;
      .discourt {
        float: left;
      }
      .sales {
        float: right;
      }
    }
  }
}
</style>
