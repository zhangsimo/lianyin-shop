webpackJsonp([12],{"6Jq7":function(e,t){},IYC1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Xxa5"),n=r.n(s),i=r("exGp"),a=r.n(i),o={data:function(){return{verify:"",mobile:""}},methods:{cerifyMobile:function(){var e=this;if(""!==this.mobile.trim())if(/^1(3|4|5|7|8|2)\d{9}$/.test(this.mobile)){this.$refs.down.disabled=!0,this.$refs.down.style.color="#ccc";var t=60,r=setInterval(function(){e.$refs.down.innerText=t+"S后再次发送",-1==--t&&(clearTimeout(r),e.$refs.down.disabled=!1,e.$refs.down.innerText="获取验证码",e.$refs.down.style.color="#037fff")},1e3);this.$axios.post("/myapi/get_mobile_code",{mobile:this.mobile})}else this.$messagebox.alert("请输入正确的手机号码");else this.$messagebox.alert("请输入手机号码")},register:function(){var e=this;return a()(n.a.mark(function t(){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.mobile.trim()){t.next=3;break}return e.$messagebox.alert("请输入手机号码"),t.abrupt("return");case 3:if(/^1(3|4|5|7|8|2)\d{9}$/.test(e.mobile)){t.next=6;break}return e.$messagebox.alert("请输入正确的手机号码"),t.abrupt("return");case 6:if(""!==e.verify.trim()){t.next=8;break}return t.abrupt("return",e.$messagebox.alert("请输入验证码"));case 8:return t.next=10,e.$axios.post("/myapi/login_by_code",{mobile:e.mobile,code:e.verify});case 10:"0"===(r=t.sent).data.code&&(sessionStorage.setItem("lianyin_token",r.data.data.token),e.$router.push("/home")),"-1"===r.data.code&&e.$messagebox.alert(r.data.msg);case 13:case"end":return t.stop()}},t,e)}))()}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"phonelogin"},[r("div",{staticClass:"inputone"},[e._v("\n    手机号\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"inputtwo"},[e._v("\n    验证码\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.verify,expression:"verify"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.verify},on:{input:function(t){t.target.composing||(e.verify=t.target.value)}}}),e._v(" "),r("button",{ref:"down",on:{click:e.cerifyMobile}},[e._v("获取验证码")])]),e._v(" "),r("p",[e._v("若手机号未注册,登录将自动创建账号。")]),e._v(" "),r("div",{staticClass:"loginBtn",on:{click:e.register}},[e._v("登录")])])},staticRenderFns:[]};var c={data:function(){return{mobile:"",password:""}},methods:{register:function(){this.$router.push("/register1")},sure:function(){var e=this;return a()(n.a.mark(function t(){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.mobile.trim()){t.next=3;break}return e.$messagebox.alert("请输入手机号码"),t.abrupt("return");case 3:if(/^1(3|4|5|7|8|2)\d{9}$/.test(e.mobile)){t.next=6;break}return e.$messagebox.alert("请输入正确的手机号码"),t.abrupt("return");case 6:if(""!==e.password.trim()){t.next=8;break}return t.abrupt("return",e.$messagebox.alert("请输入密码"));case 8:return t.next=10,e.$axios.post("/myapi/login",{mobile:e.mobile,password:e.password});case 10:"0"===(r=t.sent).data.code&&(sessionStorage.setItem("lianyin_token",r.data.data.token),e.$router.push("/home")),"-1"===r.data.code&&e.$messagebox.alert(r.data.msg);case 13:case"end":return t.stop()}},t,e)}))()},gorestpassword:function(){this.$router.push("/restpassword")}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"phonelogin"},[r("div",{staticClass:"inputone"},[e._v("\n    手机号\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"inputtwo"},[e._v("\n    密码\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入登录密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"loginBtn",on:{click:e.sure}},[e._v("登录")]),e._v(" "),r("div",{staticClass:"signIn"},[r("span",{on:{click:e.register}},[e._v("\n      注册账号\n      "),r("i",[e._v("▶")])]),e._v(" "),r("span",{on:{click:e.gorestpassword}},[e._v("忘记密码?")])])])},staticRenderFns:[]};var d={data:function(){return{isShow:!0}},components:{register1:r("VU/8")(o,l,!1,function(e){r("ZbVh")},"data-v-0c2dc4de",null).exports,register2:r("VU/8")(c,u,!1,function(e){r("6Jq7")},"data-v-95134798",null).exports},methods:{changelogin:function(e){if("a"===e.target.localName){for(var t=this.$refs.loginAll.children,r=0;r<t.length;r++)t[r].firstElementChild.classList.remove("bordercolor");e.target.className="bordercolor",this.isShow=!this.isShow}}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"loginnav"},[r("ul",{ref:"loginAll",on:{click:e.changelogin}},[e._m(0),e._v(" "),e._m(1)])]),e._v(" "),r("div",[e.isShow?r("register1"):e._e(),e._v(" "),e.isShow?e._e():r("register2")],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",{staticClass:"bordercolor"},[this._v("验证码登录")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("a",[this._v("密码登录")])])}]};var v=r("VU/8")(d,m,!1,function(e){r("KpMJ")},"data-v-4637b9e6",null);t.default=v.exports},KpMJ:function(e,t){},ZbVh:function(e,t){}});
//# sourceMappingURL=12.bd44af9f659f688bca43.js.map