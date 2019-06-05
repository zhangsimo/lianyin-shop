<template>
  <div class="footer">
    <ul>
      <li>
        <router-link to="/">
          <img src="../../assets/images/home-w.png" alt>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <img src="../../assets/images/dd-w.png" alt>
          <p>订单</p>
        </router-link>
      </li>
      <li>
        <router-link to="/user" class="color">
          <img src="../../assets/images/me-blue.png" alt>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    // addColor (e) {
    //   if (e.target.localName === 'p' || e.target.localName === 'i') {
    //     let res = e.target.parentNode.parentNode.parentNode.children
    //     for (let i = 0; i < res.length; i++) {
    //       res[i].firstElementChild.className = ''
    //     }
    //   }
    // }
  }
}
</script>

<style lang="less" scoped>
.footer {
  height: 1.266667rem /* 95/75 */;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  font-size: 0.4rem /* 30/75 */;
  ul {
    li {
      padding-top: 0.213333rem /* 16/75 */;
      box-sizing: border-box;
      float: left;
      width: 33%;
      text-align: center;
      height: 1.266667rem /* 95/75 */;

      img {
        width: 0.613333rem /* 46/75 */; /* 36/75 */
      }
      p {
        font-size: 0.32rem /* 24/75 */;
        z-index: -5;
      }
    }
  }
}
a {
  text-decoration: none;
  color: #000;
}
.color {
  color: #037fff;
}
</style>
