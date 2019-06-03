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
          淘红包
          <span>123</span>
        </li>
        <li>
          个人资料
          <span>123</span>
        </li>
        <li>
          收藏
          <span>123</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$axios
      .post('/myapi/user_info', {
        token: 1
      })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style lang='less' scoped>
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
    span {
      float: right;
    }
  }
}
</style>
