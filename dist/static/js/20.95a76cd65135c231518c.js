webpackJsonp([20],{"+ERy":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Xxa5"),e=i.n(a),n=i("exGp"),o=i.n(n),r=i("mvHQ"),l=i.n(r),c={data:function(){return{list:[],page:0}},methods:{loadMore1:function(){var t=this;this.list.length%10==0&&(this.loading=!0,setTimeout(function(){t.page++,t.$axios.post("/myapi/order_list",{status:-2,page:t.page}).then(function(s){t.list=t.list.concat(JSON.parse(l()(s.data.date.orderList))),s.data.date.orderList.length<10&&(t.$refs.ul.style.overflowY="auto")}),t.loading=!1},0))},buy:function(t){this.$store.commit("addOneList",t),this.$router.push({path:"/submit"})},cancel:function(t){var s=this;return o()(e.a.mark(function i(){return e.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,s.$axios.post("/myapi/cancel_order",{orderNumber:t.goods.order_number});case 2:0===i.sent.data.code&&s.loadMore();case 4:case"end":return i.stop()}},i,s)}))()},use:function(){this.$router.push("/erweima")},doneagain:function(t){this.$router.push({path:"/merchant",query:{id:t.shop.id}})}}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"allOrder"},[i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore1,expression:"loadMore1"}],ref:"ul",staticClass:"listUl",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},t._l(t.list,function(s,a){return i("li",{key:a,staticClass:"allli"},[i("div",{staticClass:"title"},[i("span",{staticClass:"titleLeft"},[t._v(t._s(s.goods.goods_name))]),t._v(" "),0===s.shop.status?i("span",{staticClass:"titleright"},[t._v("待付款")]):1===s.shop.status?i("span",{staticClass:"titleright"},[t._v("待使用")]):2===s.shop.status?i("span",{staticClass:"titleright"},[t._v("已使用")]):t._e()]),t._v(" "),i("div",{staticClass:"discounts"},[i("div",[t._m(0,!0),t._v(" "),i("div",{staticClass:"right"},[i("h5",{staticClass:"top"},[t._v(t._s(s.shop.profile))]),t._v(" "),i("h5",{staticClass:"bottom"},[i("div",{staticClass:"discourt"},[i("span",[t._v("￥"+t._s(s.shop.money))])]),t._v(" "),i("div",{staticClass:"sales"},[i("span",[i("i",[t._v("X"+t._s(s.goods.goods_number))])])])])])]),t._v(" "),0===s.shop.status?i("div",[i("div",{staticClass:"buybBtn",on:{click:function(i){return t.buy(s)}}},[t._v("立即支付")]),t._v(" "),i("div",{staticClass:"canelBtn",on:{click:function(i){return t.cancel(s)}}},[t._v("取消")])]):1===s.shop.status?i("div",[i("div",{staticClass:"buybBtn",on:{click:function(i){return t.use(s)}}},[t._v("使用")])]):2===s.shop.status?i("div",[i("div",{staticClass:"buybBtn",on:{click:function(i){return t.doneagain(s)}}},[t._v("再来一单")])]):t._e()])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"left"},[s("img",{attrs:{src:i("Ij4O"),alt:""}})])}]};var d=i("VU/8")(c,u,!1,function(t){i("Jq74")},"data-v-24a8455e",null);s.default=d.exports},Jq74:function(t,s){}});
//# sourceMappingURL=20.95a76cd65135c231518c.js.map