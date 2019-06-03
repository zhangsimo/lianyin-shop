import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    cityList: '',
    one: '',
    city: '',
    changeCity: ''
  },
  mutations: {
    // 获取购买商品的信息
    addOneList (state, one) {
      state.one = one
      // console.log(this.one)
    },
    // 首页获取到的城市
    getCity (state, city) {
      state.city = city
      // console.log(state.city)
    },
    // 获取全部城市
    getAllCity (state, list) {
      state.cityList = list
      // console.log(list)
    },
    // 改变城市
    changeCity (state, city) {
      state.city = city
    }
  }
})
export default store
