webpackJsonp([6],{"3dKX":function(t,s){},T2YF:function(t,s,e){t.exports=e.p+"static/img/shop1.ced33b2.png"},dRCH:function(t,s){},"uNO+":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Xxa5"),a=e.n(i),n=e("exGp"),c=e.n(n),o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("mt-header",{staticClass:"classifyHeader",attrs:{title:"收藏",fixed:this.isFixed}},[s("a",{attrs:{slot:"left",href:"javascript:history.back(-1)"},slot:"left"},[s("i",{staticClass:"iconfont classifyBack"},[this._v("")])])])],1)},staticRenderFns:[]};var l=e("VU/8")({data:function(){return{isFixed:!0}}},o,!1,function(t){e("dRCH"),e("3dKX")},"data-v-460eec86",null).exports,r=e("23Vp"),d={props:["list"],data:function(){return{baseURL:r.a.baseURL}},methods:{goshop:function(t){this.$router.push({path:"/merchant",query:{id:t.id}})}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"merchant"},[e("ul",t._l(t.list,function(s,i){return e("li",{key:i},[e("div",{staticClass:"merchantlist"},[e("div",{staticClass:"title"},[e("h2",[t._v(t._s(s.shop.merchant_name))]),t._v(" "),e("p",[t._v("4.0km")])]),t._v(" "),e("div",[e("p",{staticClass:"explain"},[t._v("简介: "+t._s(s.shop.profile))])]),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:t.baseURL+s.shop.header_image_url.split(",")[0],alt:""}}),t._v(" "),e("img",{attrs:{src:t.baseURL+s.shop.header_image_url.split(",")[1],alt:""}})]),t._v(" "),null!==s.shop.goods?e("div",{staticClass:"merchantList"},[e("h2",[t._v("商家优惠")]),t._v(" "),e("div",{staticClass:"discounts"},[e("div",[t._m(0,!0),t._v(" "),e("div",{staticClass:"right"},[e("h5",{staticClass:"top"},[t._v(t._s(s.shop.goods.title))]),t._v(" "),e("h5",{staticClass:"bottom"},[e("div",{staticClass:"discourt"},[e("span",{staticStyle:{color:"red"}},[t._v("￥"+t._s(s.shop.goods.money))]),t._v(" +\n                    "),e("span",{staticStyle:{color:"red"}},[t._v(t._s(s.shop.goods.packet)+"积分")])]),t._v(" "),e("div",{staticClass:"sales"},[e("span",[t._v("\n                      门市价:\n                      "),e("i",[t._v("￥"+t._s(s.shop.goods.all_money))])])])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"listCollect"},[t._m(1,!0),t._v(" "),e("span",{staticClass:"right",on:{click:function(e){return t.goshop(s.shop)}}},[t._v("\n            进店逛逛\n            "),e("i",{staticClass:"iconfont"},[t._v("")])])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"left"},[s("img",{attrs:{src:e("T2YF"),alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"left"},[s("i",{staticClass:"iconfont"},[this._v("")]),this._v("已收藏\n          ")])}]};var v={components:{collectHeader:l,collectList:e("VU/8")(d,h,!1,function(t){e("yw+1")},"data-v-566a0076",null).exports},data:function(){return{page:1,shoplist:""}},created:function(){this.collectshoplist()},methods:{collectshoplist:function(){var t=this;return c()(a.a.mark(function s(){var e;return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$axios.post("/myapi/collect_shop_list");case 2:"0"===(e=s.sent).data.code&&(t.shoplist=e.data.list),console.log(t.shoplist);case 5:case"end":return s.stop()}},s,t)}))()}}},p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"collectbox"},[s("collect-header"),this._v(" "),s("collect-list",{attrs:{list:this.shoplist}})],1)},staticRenderFns:[]};var _=e("VU/8")(v,p,!1,function(t){e("ytpj")},"data-v-302e30be",null);s.default=_.exports},ytpj:function(t,s){},"yw+1":function(t,s){}});
//# sourceMappingURL=6.0a3ba866e66d074b8bad.js.map