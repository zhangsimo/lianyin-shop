webpackJsonp([3],{BjFu:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("PBVb"),a={components:{},data:function(){return{selected:"1"}},methods:{changecolor:function(){console.log(123)}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orderListBox"},[r("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[r("mt-tab-item",{attrs:{id:"1"}},[r("router-link",{attrs:{to:"/allorderlist"},on:{click:t.changecolor}},[t._v("全部")])],1),t._v(" "),r("mt-tab-item",{attrs:{id:"2"}},[r("router-link",{attrs:{to:"/staybuy"}},[t._v("代付款")])],1),t._v(" "),r("mt-tab-item",{attrs:{id:"3"}},[r("router-link",{attrs:{to:"/stayuse"}},[t._v("待使用")])],1),t._v(" "),r("mt-tab-item",{attrs:{id:"4"}},[r("router-link",{attrs:{to:"/done"}},[t._v("已完成")])],1)],1),t._v(" "),r("div",[r("router-view")],1)],1)},staticRenderFns:[]};var i=r("VU/8")(a,n,!1,function(t){r("hKUm"),r("ksxH")},"data-v-7a73e96b",null).exports,s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("ul",{on:{click:t.addColor}},[r("li",[r("router-link",{attrs:{to:"/"}},[r("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),r("p",[t._v("首页")])])],1),t._v(" "),r("li",[r("router-link",{staticClass:"color",attrs:{to:"/order"}},[r("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),r("p",[t._v("订单")])])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/user"}},[r("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),r("p",[t._v("我的")])])],1)])])},staticRenderFns:[]};var l=r("VU/8")({methods:{addColor:function(t){if("p"===t.target.localName||"i"===t.target.localName)for(var e=t.target.parentNode.parentNode.parentNode.children,r=0;r<e.length;r++)e[r].firstElementChild.className=""}}},s,!1,function(t){r("GHPm")},"data-v-e7945fd8",null).exports,c={components:{orderHeader:o.a,orderList:i,orderFooter:l},data:function(){return{headerTitle:"我的订单"}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"orderBox"},[e("order-header",{attrs:{title:this.headerTitle}}),this._v(" "),e("order-list"),this._v(" "),e("order-footer")],1)},staticRenderFns:[]};var u=r("VU/8")(c,d,!1,function(t){r("f7rL"),r("Ik0X")},"data-v-7e95e9c1",null);e.default=u.exports},GHPm:function(t,e){},Ik0X:function(t,e){},f7rL:function(t,e){},hKUm:function(t,e){},ksxH:function(t,e){}});
//# sourceMappingURL=3.9d805d5591aff08f7a92.js.map