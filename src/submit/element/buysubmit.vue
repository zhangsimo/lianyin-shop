<template>
  <div>
    <div class="submitList">
      <div class="discounts">
        <div>
          <div class="left">
            <img :src="baseURL + buy.title_image.split(',')[0]">
          </div>
          <div class="right">
            <h5 class="top">{{ buy.description }}</h5>
            <h5 class="bottom">
              <div class="discourt">
                <span style="color:#000">￥{{ buy.money }}</span> +
                <span style="color:#000">
                  {{ buy.packet }}
                  <i>淘红包</i>
                </span>
              </div>
              <!-- <div class="sales">
                <span>
                  门市价:
                  <i>￥{{ buy.all_money }}</i>
                </span>
              </div>-->
            </h5>
          </div>
        </div>
        <div class="number">
          <span>数量</span>
          <span class="right">
            <span class="iconfont less" @click="less" ref="lessbtn">&#xe60f;</span>
            <span class="num">{{ number }}</span>
            <span class="iconfont" @click="add">&#xe600;</span>
          </span>
        </div>
      </div>
    </div>
    <div class="moneyAll">
      <div>
        <span>小计</span>
        <span class="right">
          <i>￥</i>
          {{ buy.money * number }}
        </span>
      </div>
      <div>
        <span>淘红包</span>
        <span class="right dikou">
          {{ buy.packet * number }}抵扣 ￥{{
          (buy.all_money - buy.money) * number
          }}
        </span>
      </div>
      <div>
        <span>实付金额</span>
        <span class="right" style="color:red">
          <span class="shifumoney">￥</span>
          {{ buy.money * number }}
        </span>
      </div>
      <!-- 手机号码又不要了 -->
      <!-- <div>
        <span>手机号</span>
        <input
          type="text"
          placeholder="输入手机号"
          class="right phone"
          style="text-align: right"
        />
      </div>-->
    </div>
    <div class="surebtn" @click="submit">￥{{ (buy.money * number).toFixed(2) }} 提交订单</div>
  </div>
</template>

<script>
/* eslint-disable */
import url from '../../global-variable.js'
export default {
  props: ['buy'],
  data() {
    return {
      number: 1,
      baseURL: url.baseURL
    }
  },
  methods: {
    add() {
      this.number++
      if (this.number > 1) {
        this.$nextTick(function() {
          this.$refs.lessbtn.style.color = 'black'
          this.$refs.lessbtn.style.pointerEvents = 'auto'
        })
      }
    },
    less() {
      this.number--
      if (this.number === 1) {
        this.$refs.lessbtn.style.color = '#b4b4b4'
        this.$refs.lessbtn.style.pointerEvents = 'none'
      }
    },
    submit() {
      function isWeiXin() {
        //此处是一段ua判断
        var ua = window.navigator.userAgent.toLowerCase()
        console.log(ua)
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
          return true
        } else {
          return false
        }
      }
      if (isWeiXin()) {
        // alert("微信"); 根据前面的此处可以判断是在微信内打开的
        //后端返回所需数据
        this.$axios({
          method: 'post',
          url: '', //你的接口地址
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
          .then(res => {
            //console.log(res);
            var that = this
            if (res.data.status == 1) {
              function onBridgeReady() {
                // const pay_params = JSON.parse(params);
                var str =
                  'appId=' +
                  res.data.data.appId +
                  '&timeStamp=' +
                  res.data.data.timeStamp +
                  '&nonceStr=' +
                  res.data.data.nonceStr +
                  '&prepay_id=' +
                  res.data.data.package +
                  '&signType=' +
                  res.data.data.signType +
                  '&paySign=' +
                  res.data.data.sign
                console.log(str)
                WeixinJSBridge.invoke(
                  'getBrandWCPayRequest',
                  {
                    appId: res.data.data.appId, //公众号名称，由商户传入
                    timeStamp: res.data.data.timeStamp, //时间戳，自1970年以来的秒数
                    nonceStr: res.data.data.nonceStr, //随机串
                    package: res.data.data.package,
                    signType: res.data.data.signType, //微信签名方式：
                    paySign: res.data.data.sign //微信签名sign
                  },
                  function(res) {
                    if (res.err_msg == 'get_brand_wcpay_request:ok') {
                      //此处是调起微信支付成功的回调，可以在此处跳转支付成功的页面，和你的业务逻辑
                      that.paymentData = '支付成功'
                      // 使用以上方式判断前端返回,微信团队郑重提示：
                      //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    } else if (
                      res.err_msg == 'get_brand_wcpay_request:cancel'
                    ) {
                      //此处是调起取消微信支付的回调，可以在此处跳转您已取消支付的页面，和你的业务逻辑
                    } else if (res.err_msg == 'get_brand_wcpay_request:fail') {
                      //此处是调起微信支付失败的回调
                    }

                    // alert(JSON.stringify(res));   //此处可以弹出调起微信支付的失败或成功的信息
                  }
                )
              }
              onBridgeReady()
            }
          })
          .catch(function(error) {
            console.log(error)
          })
      } else {
        // alert('微信外')  根据前面的ua判断，可以判断出是在微信外调起的微信支付
        //向后台请求相关的数据
        // this.$axios({
        //     method: "post",
        //     url: "", 你的接口地址
        //     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        //   })
        //   .then(res => {
        //       console.log(res)
        //   })
        // console.log(this.$refs.link)  返回支付路径
        // this.$refs.link.href = "";   跳转支付页面
      }
    }
  }
}
</script>

<style lang="less" scoped>
.submitList {
  background-color: #fdfdfd;
  padding: 0 0.48rem /* 36/75 */;
  box-sizing: border-box;
}
.discounts {
  overflow: hidden;
  background-color: #ffffff;
  padding: 0.453333rem /* 34/75 */ 0.32rem /* 24/75 */;
  box-sizing: border-box;
  // border: 2px solid #f5f6f6;
  // box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;
  border-bottom: 1px solid #000;

  border-radius: 0.2rem /* 15/75 */ 0.2rem 0 0;
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
        i {
          font-size: 0.24rem /* 18/75 */;
        }
      }
      .sales {
        float: right;
      }
    }
  }
}
.number {
  margin-top: 0.466667rem; /* 35/75 */
  font-size: 0.373333rem /* 28/75 */;
  .right {
    .less {
      color: #b4b4b4;
    }
    float: right;
    border: 1px solid #999999;
    padding: 0.16rem 0.2rem /* 15/75 */; /* 12/75 */
    border-radius: 0.4rem; /* 30/75 */
    .iconfont {
      font-size: 0.346667rem; /* 26/75 */
    }
    .num {
      margin: 0 0.133333rem; /* 10/75 */
    }
  }
}
.moneyAll {
  padding: 0 0.48rem /* 36/75 */;
  background-color: #fff;
  div {
    margin-bottom: 0.06666rem /* 10/75 */;
    height: 1.333333rem /* 100/75 */;
    width: 100%;
    // background-color: #f99;
    font-size: 0.4rem /* 30/75 */;
    line-height: 1.333333rem; /* 100/75 */
    padding: 0 0.333333rem /* 25/75 */;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;
  }
  div:nth-child(1) {
    margin-bottom: 0.2rem; /* 15/75 */
  }
  .right {
    float: right;
  }
  .dikou {
    color: #ff4e4e;
    font-size: 0.346667rem; /* 26/75 */
  }
  .shifumoney {
    font-size: 0.24rem; /* 18/75 */
  }
  .phone {
    display: line-block;
    font-size: 0.373333rem; /* 28/75 */
    width: 2.933333rem /* 220/75 */;
    outline: none;
    border: none;
    margin-top: 0.4rem /* 30/75 */;
    // text-align: 'right';
  }
}
.surebtn {
  width: 100%;
  height: 1.266667rem /* 95/75 */;
  background-color: #037fff;
  line-height: 1.26666rem;
  text-align: center;
  font-size: 0.426667rem /* 32/75 */;
  color: #ffff;
  position: fixed;
  bottom: 0;
}
</style>
