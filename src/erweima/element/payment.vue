<template>
  <div>
    <div class="submitList">
      <div class="discounts">
        <div>
          <div class="shoptitle">
            <h4>
              好吃不上火
              <span>
                <img src="../../assets/images/fh.png" alt>
              </span>
            </h4>
          </div>
          <div class="left">
            <img src="../../assets/shop1.png" alt>
          </div>
          <div class="right">
            <h5 class="top">周末3小时xx123131231312313123123xxxx</h5>
            <h5 class="bottom">
              <div class="discourt">
                <span>￥69.00</span>
              </div>
              <div class="sales">
                <span>
                  <i>×1</i>
                </span>
              </div>
            </h5>
          </div>
        </div>
        <div class="verification">
          <p>验证码</p>
        </div>
        <div class="verificationNumber">
          <p>123123131231</p>
        </div>
        <div style="text-align: center">
          <div class="verificationImage">
            <div id="qrcode" ref="qrcode"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  data () {
    return {
      numberlist: 123456,
      token: ''
    }
  },
  mounted () {
    this.token = sessionStorage.getItem('lianyin_token')
    this.qrcodeScan()
  },
  methods: {
    qrcodeScan () {
      // 生成二维码
      /* eslint-disable */
      let qrcode = new QRCode('qrcode', {
        width: '200', // 二维码宽度
        height: '200', // 二维码高度
        text: `http://ant-www.9vdata.com/#/check?token=${
          this.tkne
        }&couponCode=${this.numberlist}`
      })
      console.log(qrcode._oDrawing._elImage)
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
  padding: 0.453333rem /* 34/75 */ 0.32rem /* 24/75 */ 0;
  box-sizing: border-box;
  // border: 2px solid #f5f6f6;
  box-shadow: 0px 0px 10px 5px /* 20/75 */ #f5f6f6;

  border-radius: 0.2rem /* 15/75 */;
  margin-bottom: 1.333333rem /* 100/75 */;
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
      margin-top: 0.05667rem /* 0.2/75 */;
      font-size: 0.346667rem /* 26/75 */;
      margin-bottom: 0.65rem; /* 45/54 */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
}
.verification {
  margin-top: 0.6rem /* 45/75 */;
  border-top: 2px dashed #b4b4b4;
  text-align: center;
  font-size: 0.373333rem /* 28/75 */;
  line-height: 1.266667rem /* 95/75 */;
}
.verificationNumber {
  background-color: #f99;
  line-height: 1.666667rem /* 125/75 */;
  border-radius: 0.2rem /* 15/75 */;
  text-align: center;
  font-size: 0.586667rem; /* 44/75 */
  color: #037fff;
  background-color: #f8f8f8;
}
.verificationImage {
  // margin-top: 1.333333rem /* 100/75 */;
  margin: 1.333333rem auto;
  display: inline-block;
  padding: 0.293333rem /* 22/75 */ 0.213333rem /* 16/75 */;
  box-sizing: border-box;
  border: 2px solid #e6e6e6;
  border-radius: 0.2rem /* 15/75 */;
}
.shoptitle {
  h4 {
    font-size: 0.453333rem; /* 34/75 */
    line-height: 1.28rem; /* 96/75 */
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 0.48rem; /* 36/75 */
    span {
      float: right;
      img {
        width: 0.48rem /* 36/75 */;
        height: 0.48rem /* 36/75 */;
      }
    }
  }
}
</style>
