webpackJsonp([5],{"6/SS":function(t,s){},ApIi:function(t,s){},"CQ+g":function(t,s){},qwyU:function(t,s){},xOPP:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("mt-header",{staticClass:"classifyHeader",attrs:{title:this.title.goods.title,fixed:this.isFixed}},[s("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[s("i",{staticClass:"iconfont classifyBack"},[this._v("")])])],1)],1)},staticRenderFns:[]};var i=e("VU/8")({props:["title"],data:function(){return{isFixed:!0}}},n,!1,function(t){e("qwyU"),e("CQ+g")},"data-v-7f8a07fa",null).exports,a=e("Xxa5"),r=e.n(a),o=e("exGp"),c=e.n(o),u=e("23Vp"),l={props:["buy"],data:function(){return{number:1,baseURL:u.a.baseURL}},methods:{add:function(){this.number++,this.number>1&&this.$nextTick(function(){this.$refs.lessbtn.style.color="black",this.$refs.lessbtn.style.pointerEvents="auto"})},less:function(){this.number--,1===this.number&&(this.$refs.lessbtn.style.color="#b4b4b4",this.$refs.lessbtn.style.pointerEvents="none")},submit:function(){var t=this;return c()(r.a.mark(function s(){return r.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.$axios.post("/myapi/create_order",{token:1,goodsId:t.buy.id,skuId:t.buy.uid,number:t.number});case 2:s.sent;case 3:case"end":return s.stop()}},s,t)}))()}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"submitList"},[e("div",{staticClass:"discounts"},[e("div",[e("div",{staticClass:"left"},[e("img",{attrs:{src:t.baseURL+t.buy.title_image.split(",")[0]}})]),t._v(" "),e("div",{staticClass:"right"},[e("h5",{staticClass:"top"},[t._v(t._s(t.buy.description))]),t._v(" "),e("h5",{staticClass:"bottom"},[e("div",{staticClass:"discourt"},[e("span",{staticStyle:{color:"red"}},[t._v("￥"+t._s(t.buy.money))]),t._v(" +\n              "),e("span",{staticStyle:{color:"red"}},[t._v(t._s(t.buy.packet)+"积分")])]),t._v(" "),e("div",{staticClass:"sales"},[e("span",[t._v("\n                门市价:\n                "),e("i",[t._v("￥"+t._s(t.buy.all_money))])])])])])]),t._v(" "),e("div",{staticClass:"number"},[e("span",[t._v("数量")]),t._v(" "),e("span",{staticClass:"right"},[e("span",{ref:"lessbtn",staticClass:"iconfont less",on:{click:t.less}},[t._v("")]),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.number))]),t._v(" "),e("span",{staticClass:"iconfont",on:{click:t.add}},[t._v("")])])])])]),t._v(" "),e("div",{staticClass:"moneyAll"},[e("div",[e("span",[t._v("小计")]),t._v(" "),e("span",{staticClass:"right"},[e("i",[t._v("￥")]),t._v("\n        "+t._s(t.buy.money*t.number)+"\n      ")])]),t._v(" "),e("div",[e("span",[t._v("淘红包")]),t._v(" "),e("span",{staticClass:"right dikou"},[t._v("\n        "+t._s(t.buy.packet*t.number)+"抵扣 ￥"+t._s((t.buy.all_money-t.buy.money)*t.number)+"\n      ")])]),t._v(" "),e("div",[e("span",[t._v("实付金额")]),t._v(" "),e("span",{staticClass:"right",staticStyle:{color:"red"}},[e("span",{staticClass:"shifumoney"},[t._v("￥")]),t._v("\n        "+t._s(t.buy.money*t.number)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"surebtn",on:{click:t.submit}},[t._v("￥"+t._s((t.buy.money*t.number).toFixed(2))+" 提交订单")])])},staticRenderFns:[]};var d={components:{submitHeader:i,buySubmint:e("VU/8")(l,v,!1,function(t){e("6/SS")},"data-v-3d4a5852",null).exports},data:function(){return{oneList:""}},created:function(){this.buyNew()},methods:{buyNew:function(){this.oneList=this.$store.state.one,console.log(this.oneList)}}},b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"submitFather"},[s("submit-header",{attrs:{title:this.oneList}}),this._v(" "),s("buy-submint",{attrs:{buy:this.oneList.goods}})],1)},staticRenderFns:[]};var _=e("VU/8")(d,b,!1,function(t){e("ApIi")},null,null);s.default=_.exports}});
//# sourceMappingURL=5.4c119b20e995d4c11504.js.map