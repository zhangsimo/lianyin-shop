<template>
  <div class="allOrder">
    <ul
      class="listUl"
      ref="ul"
      v-infinite-scroll="loadMore1"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="0"
    >
      <li class="allli" v-for="(item, index) in list" :key="index">
        <div class="title">
          <span class="titleLeft">{{ item.goods.goods_name }}</span>
          <span class="titleright" v-if="item.shop.status === 0">待付款</span>
          <span class="titleright" v-else-if="item.shop.status === 1">待使用</span>
          <span class="titleright" v-else-if="item.shop.status === 2">已使用</span>
        </div>
        <div class="discounts">
          <div>
            <div class="left">
              <img src="../../assets/shop3.png" alt>
            </div>
            <div class="right">
              <h5 class="top">{{ item.shop.profile }}</h5>
              <h5 class="bottom">
                <div class="discourt">
                  <span>￥{{ item.shop.money }}</span>
                </div>
                <div class="sales">
                  <span>
                    <i>X{{ item.goods.goods_number }}</i>
                  </span>
                </div>
              </h5>
            </div>
          </div>
          <div v-if="item.shop.status === 1">
            <div class="buybBtn" @click="buy(item)">立即支付</div>
            <div class="canelBtn" @click="cancel(item)">取消</div>
          </div>
          <div v-else-if="item.shop.status === 0">
            <div class="buybBtn" @click="use(item)">使用</div>
          </div>
          <div v-else-if="item.shop.status === 2">
            <div class="buybBtn" @click="doneagain(item)">再来一单</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      page: 0
    }
  },
  methods: {
    loadMore1 () {
      if (this.list.length % 10 !== 0) {
        return
      }

      this.loading = true
      setTimeout(() => {
        this.page++
        this.$axios
          .post('/myapi/order_list', {
            status: 1,
            page: this.page
          })
          .then(res => {
            this.list = this.list.concat(
              JSON.parse(JSON.stringify(res.data.date.orderList))
            )
            if (res.data.date.orderList.length < 10) {
              this.$refs.ul.style.overflowY = 'auto'
            }
          })
        this.loading = false
      }, 0)
    },
    buy (item) {
      this.$store.commit('addOneList', item)
      this.$router.push({ path: '/submit' })
    },
    async cancel (item) {
      let res = await this.$axios.post('/myapi/cancel_order', {
        orderNumber: item.goods.order_number
      })
      if (res.data.code === 0) {
        this.loadMore()
      }
    },
    use () {
      this.$router.push('/erweima')
    },
    doneagain (item) {
      this.$router.push({ path: '/merchant', query: { id: item.shop.id } })
    }
  }
}
</script>

<style lang="less" scoped>
.allOrder {
  margin-top: 0.146667rem; /* 26/75 */
  max-height: 100vh; //与屏幕一样高度
  overflow-y: auto;
}
.listUl {
  height: 100%;
  margin-bottom: 1.333333rem; /* 100/75 */
}
.title {
  overflow: hidden;
  // border-bottom: 1px sloid #000;
  line-height: 1.226667rem; /* 92/75 */
  background-color: #fff;
}
.allli {
  padding-left: 0.346667rem; /* 26/75 */
  padding-bottom: 0.266667rem /* 20/75 */;
  border-radius: 0.2rem /* 15/75 */;
  margin-bottom: 0.32rem /* 24/75 */;
  .titleLeft {
    font-size: 0.48rem /* 36/75 */;
    float: left;
  }
  .titleright {
    float: right;
    font-size: 0.373333rem; /* 28/75 */
    color: #037fff;
    padding-right: 0.346667rem; /* 26/75 */
  }
  .discounts {
    border-top: 1px solid #e6e6e6;
    overflow: hidden;
    background-color: #ffffff;
    padding: 0.453333rem /* 34/75 */ 0.32rem /* 24/75 */ 0;
    box-sizing: border-box;
    // border: 2px solid #f5f6f6;
    // box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;

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
        font-size: 0.346667rem /* 26/75 */;
        margin-bottom: 0.6rem; /* 45/54 */
        padding-top: 0.066667rem /* 5/75 */;
        height: 0.5rem /* 30/75 */;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
      }
      .bottom {
        font-size: 0.32rem /* 24/75 */;

        .discourt {
          float: left;
        }
        .sales {
          float: right;
        }
      }
    }
    .canelBtn,
    .buybBtn {
      /* width: 1.866667rem 140/75; */
      padding: 0 0.56rem /* 42/75 */;
      height: 0.8rem /* 60/75 */;
      box-sizing: border-box;
      border: 1px solid #037fff;
      color: #037fff;
      border-radius: 0.4rem; /* 15/75 */
      text-align: center;
      // eslint-disable
      float: right;
      line-height: 0.8rem;
      font-size: 0.373333rem; /* 28/75 */
      margin-top: 0.533333rem; /* 40/75 */
      margin-bottom: 0.266667rem; /* 20/75 */
    }
    .canelBtn {
      border: 1px solid #999999;
      margin-right: 0.373333rem /* 28/75 */;
      color: #222222;
    }
  }
}
</style>
