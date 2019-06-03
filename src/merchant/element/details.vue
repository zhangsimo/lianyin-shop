<template>
  <div class="detailsbox">
    <!-- 滚动图片 -->
    <div class="imageList">
      <ul>
        <li>
          <img :src="Url.baseURL + shoplist.goods.title_image.split(',')[0]" alt>
        </li>
        <li>
          <img :src="Url.baseURL + shoplist.goods.title_image.split(',')[1]" alt>
        </li>
        <li>
          <img :src="Url.baseURL + shoplist.goods.title_image.split(',')[2]" alt>
        </li>
      </ul>
    </div>
    <!-- 商店详情 -->
    <div class="address">
      <h3>{{ shoplist.merchant_name }}</h3>
      <div>
        地址:
        <span>{{ shoplist.address_info }}</span>
        <span class="iconfont">&#xe632;</span>
      </div>
      <div>
        电话:
        <span>{{ shoplist.mobile }}</span>
        <span class="iconfont">&#xe63e;</span>
      </div>
    </div>
    <!-- 优惠信息 -->
    <div class="merchantList" v-if="shoplist.goods !== null">
      <h2>优惠信息</h2>
      <div class="discounts">
        <div>
          <div class="left">
            <img :src="Url.baseURL + shoplist.goods.title_image.split(',')[0]" alt>
          </div>
          <div class="right">
            <h5 class="top">{{ shoplist.goods.title }}</h5>
            <h5 class="bottom">
              <div class="discourt">
                <span style="color:red">￥{{ shoplist.goods.money }}</span> +
                <span style="color:red">{{ shoplist.goods.packet }}积分</span>
              </div>
              <div class="sales">
                <span>
                  门市价:
                  <i>￥{{ shoplist.goods.all_money }}</i>
                </span>
              </div>
            </h5>
          </div>
        </div>
        <div class="buybBtn" @click="buyNew(shoplist)">立即购买</div>
      </div>
    </div>
    <!-- 商户简介 -->
    <h3 class="merchanttell">商户简介</h3>
    <div class="merchantitle">
      <div class="merchantitleConent">
        <p v-html="shoplist.description"></p>
        <!-- <p>{{ shoplist.description }}</p> -->
        <!-- <img src="../../assets/phone.png" alt> -->
      </div>
    </div>
  </div>
</template>

<script>
import baseUrl from '../../global-variable.js'
export default {
  props: ['shoplist'],
  data () {
    return {
      Url: baseUrl
    }
  },
  methods: {
    buyNew (shoplist) {
      this.$store.commit('addOneList', shoplist)
      this.$router.push({ path: '/submit' })
    }
  }
}
</script>

<style lang="less" scoped>
.detailsbox {
  .imageList {
    overflow: hidden;
    text-align: center;

    overflow: scroll;

    ul {
      // overflow-x: hidden;
      width: 150%;
      overflow: hidden;
    }
    li {
      float: left;
      img {
        width: 4rem /* 300/75 */;
        height: 2.4rem /* 180/75 */;
      }
    }
    li:nth-child(1) {
      margin-left: 0.48rem /* 36/75 */;
    }
  }
  .address {
    margin-top: 0.773333rem /* 58/75 */;
    padding: 0 0.48rem /* 36/75 */;
    // padding-bottom: 0.48rem /* 36/75 */;
    box-sizing: border-box;
    // border: 2px solid #e6e6e6;

    h3 {
      text-align: center;
      font-size: 0.586667rem /* 44/75 */;
      margin-bottom: 0.6rem /* 45/75 */;
    }
    div {
      font-size: 0.346667rem /* 26/75 */;
      color: #222222;
      line-height: 0.72rem /* 54/75 */;
      .iconfont {
        float: right;
        font-size: 0.72rem /* 54/75 */;
        color: #0266ff;
        font-weight: 300;
      }
    }
    div:nth-child(2) {
      margin-bottom: 0.44rem /* 33/75 */;
    }
    div:nth-child(3) {
      padding-bottom: 0.44rem /* 33/75 */;
      border-bottom: 2px solid #e6e6e6;
      box-sizing: border-box;
    }
  }
  .merchantList {
    background-color: #fdfdfd;
    padding: 0 0.48rem /* 36/75 */;
    box-sizing: border-box;
    h2 {
      font-size: 0.506667rem /* 38/75 */;
      line-height: 1.333333rem /* 100/75 */;
    }
  }
  .discounts {
    overflow: hidden;
    background-color: #ffffff;
    padding: 0.453333rem /* 34/75 */ 0.32rem /* 24/75 */ 0;
    box-sizing: border-box;
    // border: 2px solid #f5f6f6;
    box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;

    border-radius: 0.2rem /* 15/75 */;
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
  .buybBtn {
    width: 100%;
    height: 1.266667rem; /* 95/75 */
    text-align: center;
    line-height: 1.2666rem;
    margin-top: 0.48rem /* 36/75 */;
    border-top: 2px solid #e6e6e6;
    font-size: 0.346667rem /* 26/75 */;
    color: #0266ff;
  }
  .merchanttell {
    font-size: 0.533333rem /* 40/75 */;
    padding-left: 0.48rem /* 36/75 */;
    box-sizing: border-box;
    margin-top: 0.96rem; /* 72/75 */
  }
  .merchantitle {
    margin-top: 0.293333rem /* 22/75 */;
    padding: 0 0.48rem /* 36/75 */;

    p {
      line-height: 0.72rem /* 54/75 */;
      font-size: 0.346667rem /* 26/75 */;
    }
    .merchantitleConent {
      background-color: #fff;
      border-radius: 0.2rem /* 15/75 */;
      box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;
      padding: 0.506667rem /* 38/75 */ 0.346667rem /* 26/75 */;
      overflow: hidden;
      p {
        width: 100%;
        word-wrap: break-word;
      }
      img {
        width: 100%;
        margin-top: 0.2rem /* 15/75 */;
      }
    }
  }
}
</style>
