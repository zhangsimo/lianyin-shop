webpackJsonp([8],{EmKp:function(t,e){},ICz9:function(t,e){},X0jh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),i=s.n(a),n={data:function(){return{searchIput:""}},methods:{addHistory:function(){if(""!==this.searchIput.trim()){var t=localStorage.getItem("search_list")||"[]",e=JSON.parse(t);this.$router.push({path:"/searchresult",query:{id:this.searchIput}});var s=e.indexOf(this.searchIput);s>-1&&e.splice(s,1),e.length>=10&&e.pop(),e.unshift(this.searchIput),this.searchIput="",localStorage.setItem("search_list",i()(e))}}},watch:{searchIput:function(){this.$emit("gitSearch",this.searchIput)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"left"},[s("router-link",{staticClass:"iconfont",attrs:{to:"/"}},[t._v("")])],1),t._v(" "),s("div",{staticClass:"right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchIput,expression:"searchIput"}],staticClass:"ipt",attrs:{type:"text",placeholder:"输入线路搜索",autofocus:""},domProps:{value:t.searchIput},on:{input:function(e){e.target.composing||(t.searchIput=e.target.value)}}}),t._v(" "),s("span",{staticClass:"righttitle",on:{click:t.addHistory}},[t._v("搜索")])])])},staticRenderFns:[]};var o={data:function(){return{list:[{id:1,name:"兰州拉面"}]}},created:function(){this.getHistory()},methods:{getHistory:function(){var t=localStorage.getItem("search_list")||"[]",e=JSON.parse(t);this.list=e},trashAll:function(){localStorage.removeItem("search_list"),this.getHistory()}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mayibox"},[s("div",{staticClass:"history"},[s("span",{staticClass:"left"},[t._v("历史搜索")]),t._v(" "),s("span",{staticClass:"right iconfont",on:{click:t.trashAll}},[t._v("")])]),t._v(" "),s("div",[s("ul",{staticClass:"listUl"},t._l(t.list,function(e,a){return s("li",{key:a,staticClass:"listOne"},[t._v(t._s(e))])}),0)])])},staticRenderFns:[]};var l={props:["givesearch"],data:function(){return{page:1,shopList:""}},watch:{givesearch:function(t,e){var s=this,a=this.$store.state.city.let,i=this.$store.state.city.lng;this.$axios.post("/myapi/search_shop_list",{lat:a,lng:i,token:1,keyword:t,page:this.page}).then(function(t){s.shopList=t.data.data.shopList})}},mounted:function(){this.$nextTick(function(){this.contentH=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top})},methods:{gitshop:function(t){console.log(t),this.$router.push({path:"/merchant",query:{id:t.id}})},loadBottom:function(){console.log(123),this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded()}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,bottomPullText:"",bottomDistance:0,autoFill:!1}},[s("div",{staticClass:"reslut"},[s("ul",{ref:"wrapper",style:{height:t.contentH+"px"}},t._l(t.shopList,function(e,a){return s("li",{key:a,on:{click:function(s){return t.gitshop(e)}}},[s("span",[t._v(t._s(e.merchant_name.slice(0,e.merchant_name.toLowerCase().indexOf(t.givesearch.toLowerCase()))))]),t._v(" "),s("span",{staticStyle:{color:"#2A70FE"}},[t._v(t._s(e.merchant_name.slice(e.merchant_name.toLowerCase().indexOf(t.givesearch.toLowerCase()),e.merchant_name.toLowerCase().indexOf(t.givesearch.toLowerCase())+t.givesearch.length)))]),t._v(" "),s("span",[t._v(t._s(e.merchant_name.substr(e.merchant_name.toLowerCase().indexOf(t.givesearch.toLowerCase())+t.givesearch.length)))]),t._v(" "),s("span",{staticClass:"iconfont right"},[t._v("")])])}),0)])])},staticRenderFns:[]};var u={components:{mayiHeader:s("VU/8")(n,r,!1,function(t){s("lHsg")},"data-v-15c55590",null).exports,mayiHistory:s("VU/8")(o,c,!1,function(t){s("ICz9")},"data-v-38e67184",null).exports,searchResult:s("VU/8")(l,h,!1,function(t){s("oeHB")},"data-v-6af6f541",null).exports},data:function(){return{list:[],concent:""}},created:function(){this.getHistory()},methods:{getHistory:function(){var t=localStorage.getItem("search_list")||"[]",e=JSON.parse(t);this.list=e},gitSearch:function(t){this.concent=t}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("mayi-header",{on:{gitSearch:this.gitSearch}}),this._v(" "),e("mayi-history",{directives:[{name:"show",rawName:"v-show",value:""===this.concent,expression:"concent === '' ? true :false "}]}),this._v(" "),e("search-result",{directives:[{name:"show",rawName:"v-show",value:""!==this.concent,expression:"concent === '' ? false : true"}],attrs:{givesearch:this.concent}})],1)},staticRenderFns:[]};var p=s("VU/8")(u,d,!1,function(t){s("EmKp")},"data-v-ef08244c",null);e.default=p.exports},lHsg:function(t,e){},oeHB:function(t,e){}});
//# sourceMappingURL=8.e11d5969814b88abf5dd.js.map