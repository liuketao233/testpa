(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting-forget_pwd"],{"12dd":function(t,e,n){"use strict";n.r(e);var i=n("d3a8"),s=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=s.a},"33af":function(t,e,n){"use strict";n.r(e);var i=n("f8f1"),s=n("12dd");for(var o in s)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return s[t]}))}(o);var a=n("f0c5"),r=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"d7e1160a",null,!1,i["a"],void 0);e["default"]=r.exports},d3a8:function(t,e,n){"use strict";(function(t){n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("5319");var i={data:function(){return{newpwd:"",renewpwd:"",username:"",code:""}},onLoad:function(){document.querySelector("html").setAttribute("lang",this._i18n.locale),"ar"==this._i18n.locale?document.querySelector("html").setAttribute("dir","rtl"):document.querySelector("html").removeAttribute("dir")},methods:{getClip:function(){var e=this;t.log("getClip"),navigator.clipboard.readText().then((function(n){t.log("clipText",n),e.code=n})).catch((function(e){t.log("getErr",e)}))},onKeyVinInput:function(t){var e=this,n=t.detail.value;if(!n||" "==n)return"";var i=/[^0-9A-Za-z]/g,s=new RegExp(i);s.test(n)&&uni.showToast({title:this.$t("my.setting.symbolsCharacters"),duration:3e3}),this.$nextTick((function(){e.newpwd=n.replace(i,"")}))},doChange:function(){var t=this;if(""==this.username)return this.$util.msg(this.$t("register.plsEnterUsername")),!1;if(""==this.newpwd)return this.$util.msg(this.$t("my.setting.enternewpassword")),!1;if(""==this.renewpwd)return this.$util.msg(this.$t("my.setting.enterconfirmnewpassword")),!1;if(this.renewpwd!=this.newpwd)return this.$util.msg(this.$t("my.setting.newpasswordsinconsistent")),!1;if(""==this.code)return this.$util.msg(this.$t("google.pleaseentergooglecode")),!1;uni.showLoading({title:this.$t("common.loading")});var e=this.$config.baseUrl+"user/changepwdbycode";this.$new_request(e,{username:this.username,pwd:this.newpwd,code:this.code}).then((function(e){uni.hideLoading(),1==e.code?(uni.showToast({title:t.$t("common.success"),icon:"success",duration:3500}),setTimeout((function(){uni.reLaunch({url:"/pages/my/login"})}),3500)):uni.showToast({title:e.msg,icon:"error"})}))}}};e.default=i}).call(this,n("5a52")["default"])},f8f1:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("google.ForgetPwdTitle")))])],2),n("v-uni-view",{staticClass:"padding"},[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title",staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.$t("my.setting.username")))]),n("v-uni-input",{attrs:{placeholder:t.$t("my.setting.username"),type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("my.setting.newpassword")))]),n("v-uni-input",{attrs:{placeholder:t.$t("my.setting.newpassword"),type:"text",password:"true"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onKeyVinInput.apply(void 0,arguments)}},model:{value:t.newpwd,callback:function(e){t.newpwd=e},expression:"newpwd"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("my.setting.confirmpassword")))]),n("v-uni-input",{attrs:{placeholder:t.$t("my.setting.confirmpassword"),type:"text",password:"true"},model:{value:t.renewpwd,callback:function(e){t.renewpwd=e},expression:"renewpwd"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.$t("google.GoogleCode")))]),n("v-uni-input",{attrs:{placeholder:t.$t("google.GoogleCode"),type:"digit"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),n("v-uni-button",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getClip.apply(void 0,arguments)}}},[t._v(t._s(t.$t("google.Paste")))])],1)],1),n("v-uni-view",{staticClass:"padding-lr flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-blue margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.doChange.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.OK")))])],1)],1)},s=[]}}]);