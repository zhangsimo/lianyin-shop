webpackJsonp([18],{D2tZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Xxa5"),r=s.n(a),n=s("exGp"),o=s.n(n),i={data:function(){return{password2:"",password1:""}},methods:{register:function(){var e=this;return o()(r.a.mark(function t(){var s,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.password1.trim()){t.next=2;break}return t.abrupt("return",e.$messagebox.alert("请输入密码"));case 2:if(e.password1===e.password2){t.next=4;break}return t.abrupt("return",e.$messagebox.alert("密码输入不一致"));case 4:if(/^[0-9a-zA-Z]{6,12}$/.test(e.password1)){t.next=6;break}return t.abrupt("return",e.$messagebox.alert("密码长度为6-12之间"));case 6:return s=e.$store.state.loginCode,t.next=9,e.$axios.post("/myapi/register",{mobile:s.mobile,code:s.code,password:e.password1});case 9:a=t.sent,console.log(a),"0"===a.data.code&&(sessionStorage.setItem("lianyin_token",a.data.token),e.$messagebox.alert("注册成功").then(function(){e.$router.push("/login")})),"-1"===a.data.code&&e.$messagebox.alert(a.data.msg).then(function(){e.$router.push("/register1")});case 13:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),e._v(" "),s("h2",{staticClass:"logintitleshop"},[e._v("欢迎使用蚂蚁商城")]),e._v(" "),s("div",{staticClass:"phonelogin"},[s("div",{staticClass:"inputone"},[e._v("\n      密码\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"text",placeholder:"请输入登录密码"},domProps:{value:e.password1},on:{input:function(t){t.target.composing||(e.password1=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"inputtwo"},[e._v("\n      密码\n      "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"text",placeholder:"请重新输入登录密码"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"loginBtn",on:{click:e.register}},[e._v("确认")]),e._v(" "),s("div",{staticClass:"goback"},[s("router-link",{attrs:{to:"/login"},on:{click:e.register}},[e._v("\n        已有账号, 去登陆\n        "),s("i",[e._v("▶")])])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logintitle"},[t("h3",[this._v("手机注册")])])}]};var l=s("VU/8")(i,c,!1,function(e){s("pTJt")},"data-v-34762f2e",null);t.default=l.exports},pTJt:function(e,t){}});
//# sourceMappingURL=18.0fd033abcbbe6676f993.js.map