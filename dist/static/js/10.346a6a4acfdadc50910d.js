webpackJsonp([10],{"Js/O":function(t,s){},nJuU:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("PBVb"),n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer"},[e("ul",{on:{click:t.addColor}},[e("li",[e("router-link",{attrs:{to:"/"}},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),e("p",[t._v("首页")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"/order"}},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),e("p",[t._v("订单")])])],1),t._v(" "),e("li",[e("router-link",{staticClass:"color",attrs:{to:"/"}},[e("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),e("p",[t._v("我的")])])],1)])])},staticRenderFns:[]};var a=e("VU/8")({methods:{addColor:function(t){if("p"===t.target.localName||"i"===t.target.localName)for(var s=t.target.parentNode.parentNode.parentNode.children,e=0;e<s.length;e++)s[e].firstElementChild.className=""}}},n,!1,function(t){e("Js/O")},"data-v-625ff004",null).exports,r={created:function(){this.$axios.post("/myapi/user_info",{token:1}).then(function(t){console.log(t)})}},o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"userlistbgc"},[i("div",{staticClass:"userheader"},[i("div",[i("div",{staticClass:"left"},[i("img",{attrs:{src:e("Txl5"),alt:""}})]),t._v(" "),i("div",{staticClass:"right"},[i("h5",{staticClass:"top"},[t._v("123")]),t._v(" "),i("h5",{staticClass:"bottom"},[i("div",{staticClass:"discourt"},[i("span",{staticStyle:{color:"red"}},[t._v("123")])])])])])]),t._v(" "),i("div",{staticClass:"list"},[i("h5",[t._v("服务")]),t._v(" "),i("ul",[i("li",[t._v("\n        淘红包\n        "),i("span",[t._v("123")])]),t._v(" "),i("li",[t._v("\n        个人资料\n        "),i("span",[t._v("123")])]),t._v(" "),i("li",[t._v("\n        收藏\n        "),i("span",[t._v("123")])])])])])}]};var l=e("VU/8")(r,o,!1,function(t){e("w6nW")},"data-v-221757f1",null).exports,c={components:{userHeader:i.a,userFooter:a,userList:l},data:function(){return{title:"个人信息"}}},v={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"userBox"},[s("user-header",{attrs:{title:this.title}}),this._v(" "),s("user-list"),this._v(" "),s("user-footer")],1)},staticRenderFns:[]};var u=e("VU/8")(c,v,!1,function(t){e("yZPs")},"data-v-16962f20",null);s.default=u.exports},w6nW:function(t,s){},yZPs:function(t,s){}});
//# sourceMappingURL=10.346a6a4acfdadc50910d.js.map