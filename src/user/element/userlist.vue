<template>
  <div class="userlistbgc">
    <div class="userheader">
      <div>
        <div class="left">
          <img src="../../assets/images/1.png" alt>
        </div>
        <div class="right">
          <h5 class="top">123</h5>
          <h5 class="bottom">
            <div class="discourt">
              <span style="color:red">123</span>
            </div>
          </h5>
        </div>
      </div>
    </div>
    <div class="list">
      <h5>服务</h5>
      <ul>
        <li>
          <img src="../../assets/images/ren_box.png" alt class="img">
          <i>淘红包值</i>
          <span class="right" @click="goredpacket">
            2150
            <img src="../../assets/images/fh.png" alt>
          </span>
        </li>
        <li>
          <img src="../../assets/images/me-x.png" alt class="img">
          <i>个人资料</i>
          <span class="right rightwith" @click="gouserpersonal">
            <!-- eslint-disable-next-line -->
            &nbsp&nbsp&nbsp
            <img src="../../assets/images/fh.png" alt>
          </span>
        </li>
        <li>
          <img src="../../assets/images/scs.png" alt class="img">

          <i>收藏</i>
          <span class="right" @click="gocollect">
            已收藏21个
            <img src="../../assets/images/fh.png" alt>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$axios.post('/myapi/user_info').then(res => {
      console.log(res)
    })
  },
  methods: {
    gouserpersonal () {
      this.$router.push('/personal')
    },
    gocollect () {
      this.$router.push('/collect')
    },
    goredpacket () {
      this.$router.push('/redpacket')
    }
  }
}
</script>

<style lang="less" scoped>
.userlistbgc {
  height: 100%;
  background: #f7f7f8;
  padding: 0 0.48rem; /* 36/75 */
  .userheader {
    background-color: #fff;
    height: 2.266667rem /* 170/75 */;
    border-radius: 0.2rem; /* 15/75 */
  }
}
.userheader {
  overflow: hidden;

  .left {
    float: left;
    width: 1.933333rem /* 145/75 */;
    padding-top: 0.466667rem /* 35/75 */;
    text-align: center;
    img {
      width: 1.4rem /* 105/75 */;
      height: 1.4rem;
    }
  }
  .right {
    padding-top: 0.566667rem /* 35/75 */;
    overflow: hidden;
    box-sizing: border-box;
    h5 {
      font-size: 0.346667rem /* 26/75 */;
    }
    .top {
      margin-top: 0.1rem;
      margin-bottom: 0.3rem; /* 45/54 */
    }
    .bottom {
      font-size: 0.32rem /* 24/75 */;
      color: #999999;
      .discourt {
        float: left;
      }
    }
  }
}
.list {
  height: 7.333333rem /* 550/75 */;
  width: 100%;
  background-color: #fff;
  border-radius: 0.2rem /* 15/75 */;
  margin-top: 0.266667rem; /* 20/75 */
  padding: 0 0.266667rem; /* 20/75 */
  box-sizing: border-box;
  h5 {
    line-height: 1.266667rem; /* 95/75 */
    font-size: 0.373333rem; /* 28/75 */
    font-weight: 500;
  }
  li {
    line-height: 2.133333rem; /* 160/75 */
    font-size: 0.373333rem; /* 28/75 */
    position: relative;
    // padding-left: 0.96rem /* 72/75 */;
    // box-sizing: border-box;
    .img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 0.64rem /* 48/75 */;
      height: 0.64rem /* 48/75 */;
      // margin-right: 0.32rem /* 24/75 */;
    }
    i {
      margin-left: 0.96rem; /* 72/75 */
    }
    .rightwith {
      width: 0.4rem /* 30/75 */;
    }
    .right {
      float: right;
      padding-right: 0.333333rem /* 10/75 */;
      color: #999999;
      height: 100%;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -0.133333rem /* 10/75 */;
        width: 0.38rem /* 18/75 */;
        height: 0.38rem /* 18/75 */;
      }
    }
  }
}
</style>
