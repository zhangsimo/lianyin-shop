<template>
  <div class="home">
    <mayi-header></mayi-header>
    <div class="prdListWrap">
      <mt-loadmore
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        immediate-check="false"
      >
        <mayi-body :categoryList="categoryList"></mayi-body>
        <mayi-swipe :banner="BannerList"></mayi-swipe>
        <mayi-merchant :shop="shopList"></mayi-merchant>
      </mt-loadmore>
    </div>
    <mayi-footer></mayi-footer>
  </div>
</template>

<script>
import header from './element/header.vue'
import body from './element/body.vue'
import swipe from './element/swipe.vue'
import merchant from './element/merchant.vue'
import footer from './element/footer.vue'
export default {
  /* eslint-disable */
  components: {
    mayiHeader: header,
    mayiBody: body,
    mayiSwipe: swipe,
    mayiMerchant: merchant,
    mayiFooter: footer
  },
  data() {
    return {
      let: 119.946973,
      lng: 31.772752,
      BannerList: '',
      shopList: '',
      contentH: '',
      page: 1,
      categoryList: ''
    }
  },
  created() {
    if (this.$store.state.city === '') {
      this.maker()
    } else {
      this.let = this.$store.state.city.let
      this.lng = this.$store.state.city.lng
      this.gitcity()
    }
  },
  methods: {
    maker() {
      // let mapObj = new AMap.Map('iCenter')
      // let geolocation
      // let that = this
      // mapObj.plugin('AMap.Geolocation', function() {
      //   geolocation = new AMap.Geolocation({
      //     enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      //     timeout: 10000, // 超过10秒后停止定位，默认：无穷大
      //     maximumAge: 100000, // 定位结果缓存0毫秒，默认：0
      //     convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
      //     showButton: true, // 显示定位按钮，默认：true
      //     buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
      //     buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      //     showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
      //     showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
      //     panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
      //     zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      //   })
      //   mapObj.addControl(geolocation)
      //   geolocation.getCurrentPosition()
      // console.log(mapObj)
      //   AMap.event.addListener(geolocation, 'complete', function(res) {
      //     let lat = res.position.getLng() // 定位成功返回的经度
      //     let lng = res.position.getLat() // 定位成功返回的纬度
      //     that.city = res.addressComponent.city
      //     that.$store.commit('getCity', {
      //       x: lat,
      //       y: lng,
      //       name: res.addressComponent.city
      //     })
      //     that.let = lat
      //     that.lng = lng
      //     that.$axios
      //       .post('/myapi/index', {
      //         lat,
      //         lng,
      //         token: 1
      //       })
      //       .then(res => {
      //         that.categoryList = res.data.data.categoryList
      //         that.BannerList = res.data.data.bannerList
      //         that.shopList = res.data.data.shopList
      //       })
      //   }) // 返回定位信息

      //   AMap.event.addListener(geolocation, 'error', function(res) {
      //     if (res.info == 'FAILED') {
      //       // alert('获取您当前位置失败！')
      //     }
      //   }) // 返回定位出错信息
      // })
      var that = this
      var map = new AMap.Map('container', {
        resizeEnable: true
      })
      map.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete(data) {
          // data是具体的定位信息
          // console.log(data.position.lat, data.position.lng)

          var lat = data.position.lat
          var lng = data.position.lng
          that.city = data.addressComponent.city

          that.$store.commit('getCity', {
            x: lat,
            y: lng,
            name: data.addressComponent.city
          })
          that.let = lat
          that.lng = lng

          that.$axios
            .post('/myapi/index', {
              lat,
              lng,
              token: 1
            })
            .then(res => {
              console.log(res)

              that.categoryList = res.data.data.categoryList
              that.BannerList = res.data.data.bannerList
              that.shopList = res.data.data.shopList
            })
        }

        function onError(data) {
          // 定位出错
          console.log(data)
        }
      })
    },
    loadMore() {
      // 加载更多数据

      this.loading = true
      this.$axios
        .post('/myapi/index', {
          lat: this.let,
          lng: this.lng,
          page: this.page,
          token: 1
        })
        .then(res => {
          let list = JSON.parse(JSON.stringify(this.shopList))
          this.shopList = list.concat(res.data.data.shopList)
        })

      // this.allLoaded = true // 若数据已全部获取完毕
      // this.$nextTick(function() {
      //   this.$refs.loadmore.onBottomLoaded()
      // })
      this.loading = false
      this.page++
    },
    async gitcity() {
      let res = await this.$axios.post('/myapi/index', {
        lat: this.let,
        lng: this.lng,
        token: 1
      })
      this.categoryList = res.data.data.categoryList
      this.BannerList = res.data.data.bannerList
      this.shopList = res.data.data.shopList
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 1.466667rem /* 110/75 */; /* 90/54 */
  height: 100%;
  box-sizing: border-box;
}
.prdListWrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 1.333333rem /* 100/75 */;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}
</style>
<style lang="less">
.footer {
  .router-link-exact-active {
    color: #3d45f4;
  }
}
</style>
