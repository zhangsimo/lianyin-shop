<template>
  <div class="merchant">
    <h3>附近商家</h3>

    <ul>
      <li v-for="(item, index) in shop" :key="index">
        <div class="merchantlist">
          <div @click="goMerchant(item.id)">
            <div class="title">
              <h2>{{ item.merchant_name }}</h2>
              <span class="leave">{{ item.distance }}km</span>
            </div>
            <div class="jianjie">
              <p class="explain">简介: {{ item.profile }}</p>
            </div>
            <div class="img">
              <!-- <span v-for="(item2 ,index2) in item.header_image_url.split(',')" :key="index2"> -->
              <img :src="baseURL + item.header_image_url.split(',')[0]" alt>
              <img :src="baseURL + item.header_image_url.split(',')[1]" alt>

              <!-- </span> -->
            </div>
          </div>
          <!-- 商家优惠进行显示判断 -->
          <div class="discounts" v-if="item.goods !== null" @click="goshop(item)">
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
          <!-- <div class="more">
            <h3>
              更多优惠
              <i class="iconfont iconxiangxia"></i>
            </h3>
          </div>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import variable from '../../global-variable.js'

export default {
  props: ['shop'],
  data () {
    return {
      baseURL: variable.baseURL,
      contentH: ''
    }
  },
  methods: {
    goMerchant (id) {
      this.$router.push({ path: '/merchant', query: { id: id } })
    },
    goshop (res) {
      this.$store.commit('addOneList', res)
      this.$router.push({ path: '/submit' })
    }
  }
}
</script>

<style lang="less" scoped>
.merchant {
  margin-top: 0.333333rem /* 25/75 */;
  // background-color: #f7f7f8;
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
    font-weight: 600;
  }
  .merchantlist {
    width: 100%;
    padding-left: 0.444444rem; /* 24/54 */
    padding-right: 0.333333rem /* 18/54 */;
    box-sizing: border-box;
    background-color: #fff;

    .leave {
      position: absolute;
      right: 0;
      bottom: 0;
      left: right;
      font-size: 0.293333rem /* 22/75 */;
      color: #666666;
    }
    .title {
      position: relative;
      overflow: hidden;
      width: 100%;
      h2 {
        float: left;
        margin-top: 0.633333rem;
        font-size: 0.453333rem /* 34/75 */;
        font-weight: 600;
        height: 0.556667rem /* 38/75 */;
      }
    }
    .explain {
      font-size: 0.32rem /* 24/75 */;
      color: #666666;
      margin-top: 0.266667rem /* 20/75 */; /* 25/54 */
      height: 0.518519rem /* 28/54 */;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 80%;
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
    .discounts {
      overflow: hidden;
      margin-top: 0.4rem /* 30/75 */;
      margin-bottom: 0.32rem /* 24/75 */;
      p {
        height: 0.4rem /* 30/75 */;
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
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-top: 0.1rem;
          margin-bottom: 0.45rem; /* 45/54 */
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
    .more {
      text-align: center;
      margin-top: 0.466667rem /* 35/75 */ /* 35/54 */;
      margin-bottom: 0.373333rem /* 28/75 */;
      h3 {
        font-size: 0.4rem; /* 30/75 */
      }
    }
  }
}
.iconxiangxia {
  font-size: 0.4rem /* 30/75 */;
}
</style>
