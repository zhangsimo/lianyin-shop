<template>
  <div class="merchant">
    <ul>
      <li v-for="(item ,index) in list" :key="index">
        <div class="merchantlist">
          <div class="title">
            <h2>{{item.shop.merchant_name}}</h2>
            <p>4.0km</p>
          </div>
          <div>
            <p class="explain">简介: {{item.shop.profile}}</p>
          </div>
          <div class="img">
            <!-- <span v-for="(item2 ,index2) in item.shop.header_image_url.split(',')" :key="index2"> -->
            <img :src="baseURL + item.shop.header_image_url.split(',')[0]" alt>
            <img :src="baseURL + item.shop.header_image_url.split(',')[1]" alt>
            <!-- <img src="../../assets/shop1.png" alt>
            <img src="../../assets/shop1.png" alt>-->
            <!-- </span> -->
          </div>
          <!-- 判断优惠信息 -->
          <div class="merchantList" v-if="item.shop.goods !== null">
            <h2>商家优惠</h2>
            <div class="discounts">
              <div>
                <div class="left">
                  <img src="../../assets/shop1.png" alt>
                </div>
                <div class="right">
                  <h5 class="top">{{item.shop.goods.title}}</h5>
                  <h5 class="bottom">
                    <div class="discourt">
                      <span style="color:red">￥{{item.shop.goods.money}}</span> +
                      <span style="color:red">{{item.shop.goods.packet}}积分</span>
                    </div>
                    <div class="sales">
                      <span>
                        门市价:
                        <i>￥{{item.shop.goods.all_money}}</i>
                      </span>
                    </div>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <!-- 收藏 -->
          <div class="listCollect">
            <span class="left">
              <i class="iconfont">&#xe60e;</i>已收藏
            </span>
            <span class="right" @click="goshop(item.shop)">
              进店逛逛
              <i class="iconfont">&#xe614;</i>
            </span>
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
  props: ['list'],
  data () {
    return {
      baseURL: variable.baseURL
    }
  },
  methods: {
    goshop (shop) {
      this.$router.push({ path: '/merchant', query: { id: shop.id } })
      // console.log(shop)
    }
  }
}
</script>

<style lang="less" scoped>
.merchant {
  margin-top: 0.333333rem /* 25/75 */;
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
      margin-top: 0.266667rem;
      img {
        width: 48% /* 205/54 */;
        height: 2.226667rem /* 167/75 */;
        border-radius: 0.133333rem; /* 10/75 */
        // height: 3.396296rem /* 205/54 */;
      }
      img:nth-child(1) {
        margin-right: 2%;
      }
    }
  }
}
.listCollect {
  height: 1.466667rem /* 110/75 */;
  line-height: 1.466667rem /* 110/75 */;
  font-size: 0.426667rem; /* 32/75 */
  .iconfont {
    font-size: 0.426667rem; /* 32/75 */
  }
  .right {
    float: right;
  }
  .left {
    .iconfont {
      color: red;
      margin-right: 0.133333rem; /* 10/75 */
    }
  }
}
.merchantList {
  background-color: #fdfdfd;
  box-sizing: border-box;
  h2 {
    font-size: 0.373333rem /* 28/75 */;
    line-height: 1.333333rem /* 100/75 */;
  }
}
.discounts {
  overflow: hidden;
  background-color: #ffffff;
  // padding: 0.453333rem /* 34/75 */ 0.32rem /* 24/75 */;
  box-sizing: border-box;
  // border: 2px solid #f5f6f6;
  // box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;

  .left {
    float: left;
    img {
      border-radius: 0.2rem /* 15/75 */;
      width: 1.4rem /* 105/75 */;
      height: 1.4rem;
    }
  }
  .right {
    overflow: hidden;
    padding-left: 0.407407rem /* 22/54 */;
    box-sizing: border-box;

    .top {
      margin-top: 0.09667rem /* 0.2/75 */;
      font-size: 0.346667rem /* 26/75 */;
      margin-bottom: 0.7rem; /* 45/54 */
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
