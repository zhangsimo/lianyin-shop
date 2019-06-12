<template>
  <div class="CityFather" @click="openCity">
    <mt-index-list>
      <h3 class="title">
        您正在看:
        <span>{{ this.$store.state.city.name }}</span>
      </h3>
      <div class="lately">
        <p>定位/最近访问</p>
        <div class="hoistory">
          <ul>
            <li>
              <span class="nowcity">{{ this.$store.state.city.name }}</span>
            </li>
            <li v-for="(item, index) in historyCity" :key="index" @click="history(item)">
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="hotCity">
        <p>热门城市</p>
        <div class="hoistory">
          <ul>
            <li
              v-for="(item, index) in this.$store.state.hotCity"
              :key="index"
              @click="history(item.name)"
            >
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <mt-index-section v-for="(item, index) in block" :index="item.title" :key="index">
        <mt-cell v-for="(item2, index2) in item.city" :key="index2" :title="item2"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
/* eslint-disable */
import historyCity from '../../global-variable.js'
//引入插件
import pyjs from 'js-pinyin'
export default {
  data() {
    return {
      cityList: [],
      block: [],
      historyCity: '',
      hotCity: ''
    }
  },
  created() {
    this.getHistory()
  },
  //处理获取到的城市按顺序排名
  async beforeMount() {
    if (this.$store.state.cityList !== '') {
      this.cityList = this.$store.state.cityList
      let res = JSON.parse(localStorage.getItem('mayi_allcity'))
      this.block = res
      return
    }
    let p,
      c,
      blocks = [],
      d = {}
    let res = await this.$axios.post('/myapi/city_lists')
    if (res.data.code === '0') {
      this.$store.commit('gethotCity', res.data.data.hotCityList)
      // this.hotCity = res.data.data.hotCityList
      this.cityList = res.data.data.list
      this.$store.commit('getAllCity', res.data.data.list)
      this.cityList.forEach(item => {
        p = pyjs
          .getFullChars(item.name)
          .toLocaleLowerCase()
          .slice(0, 1)
        c = p.charCodeAt(0)
        if (c > 96 && c < 123) {
          if (!d[p]) {
            d[p] = []
          }
          d[p].push(item.name)
        }
      })
      for (let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        })
      }
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      this.block = blocks
      localStorage.setItem('mayi_allcity', JSON.stringify(blocks))
    }
  },
  methods: {
    openCity(e) {
      if (e.target.className === 'mint-cell-title') {
        let city = e.target.firstElementChild.innerText
        city = this.cityList.filter(item => item.name === city)[0]

        historyCity.hoistoryCity(city.name)
        this.$store.commit('changeCity', city)
        // 跳转首页
        this.$router.push('/home')
      }
    },
    getHistory() {
      // 如果读取不出来数据, 默认初始化为 '[]'
      var history = localStorage.getItem('status_list') || '[]' // 得到历史
      var arr = JSON.parse(history) // 转成数组
      this.historyCity = arr
    },
    history(item) {
      let city = this.cityList.filter(ele => ele.name === item)[0]
      historyCity.hoistoryCity(city.name)
      this.$store.commit('changeCity', city)
      // 跳转首页
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 0.453333rem; /* 34/75 */
  line-height: 1.28rem; /* 96/75 */
}
.lately {
  overflow: hidden;
  p {
    line-height: 1.24rem; /* 93/75 */
    font-size: 0.346667rem /* 26/75 */;
    color: #999999;
  }
  ul {
    li {
      float: left;
      width: 30%;
      height: 1.266667rem /* 95/75 */;
      box-shadow: 0px 0px 5px 10px #f6f6f7;
      line-height: 1.26666rem;
      text-align: center;
      // padding: 0.373333rem /* 28/75 */ 0.6rem /* 45/75 */;
      font-size: 0.373333rem /* 28/75 */;
      // margin-bottom: 0.066667rem; /* 5/75 */
      border-radius: 0.066667rem; /* 5/75 */
    }
  }

  .hoistory {
    overflow: hidden;
    background-color: #fff;
    .nowcity {
      color: #037fff;
      background: url(../../assets/images/定位.png) no-repeat 0 0;
      background-size: 0.48rem /* 26/75 */ 0.48rem /* 36/75 */;
      padding-left: 0.566667rem; /* 20/75 */
    }
  }
}
.CityFather {
  padding-left: 0.48rem /* 36/75 */;
  box-sizing: border-box;
}
.aaa {
  z-index: 999;
}
</style>
<style lang="less">
.mint-indexlist-nav {
  border: none;
  top: -0.666667rem; /* 50/75 */
}
.mint-indexlist-navlist {
  margin-top: 0.8rem /* 60/75 */;
  box-sizing: border-box;

  li {
    font-size: 0.266667rem; /* 20/75 */
    padding-right: 0.373333rem; /* 28/75 */
    margin-bottom: 0.133333rem; /* 10/75 */
  }
}
.mint-cell {
  height: 1.24rem /* 93/75 */;
  border-bottom: 1px solid #dfdfe0;
  .mint-cell-wrapper {
    line-height: 1.24rem; /* 9/75 */
    // line-height:
  }
  .mint-cell-text {
    font-size: 0.4rem; /* 30/75 */
  }
}
.mint-indexsection-index {
  font-size: 0.32rem; /* 24/75 */
  color: #999999;
  height: 1.293333rem /* 97/75 */;
  line-height: 1.293333rem; /* 97/75 */
  box-sizing: border-box;
  // box-shadow: -1px 1px 0px 0px red;
  border-bottom: 2px solid #f8f8f9;
}
.hotCity {
  overflow: hidden;
  p {
    line-height: 1.24rem; /* 93/75 */
    font-size: 0.346667rem /* 26/75 */;
    color: #999999;
  }
  .hoistory {
    overflow: hidden;
    background-color: #fff;
    ul {
      li {
        float: left;
        width: 30%;
        height: 1.266667rem /* 95/75 */;
        box-shadow: 0px 0px 5px 10px #f6f6f7;
        line-height: 1.26666rem;
        text-align: center;
        font-size: 0.373333rem /* 28/75 */;
        border-radius: 0.066667rem; /* 5/75 */
      }
    }
  }
}
</style>
