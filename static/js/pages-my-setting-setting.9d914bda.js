(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting-setting"],{"03b9":function(t,e,n){var i=n("6388");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("08c2200d",i,!0,{sourceMap:!1,shadowMode:!1})},"0801":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[n("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("my.setting.Setting")))])],2),n("v-uni-view",{staticClass:"cu-list menu margin-top"},[n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoogleAuth.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text-grey margin-lr"},[t._v(t._s(t.$t("google.title")))])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toChangePwd.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text-grey margin-lr"},[t._v(t._s(t.$t("my.setting.Changepassword")))])],1)],1),n("v-uni-view",{staticClass:"cu-item arrow",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toTelegram.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text-grey margin-lr"},[t._v(t._s(t.$t("my.Customerservice")))])],1)],1)],1),n("v-uni-view",{staticClass:"padding flex flex-direction"},[n("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}},[t._v(t._s(t.$t("my.setting.LOGOUT")))])],1)],1)},o=[]},"4aef":function(t,e,n){"use strict";var i=n("03b9"),o=n.n(i);o.a},6388:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".page[data-v-e3b93d94]{height:calc(100vh - 45px - env(safe-area-inset-bottom) / 2)}",""]),t.exports=e},"6b43":function(t,e,n){"use strict";n.r(e);var i=n("e394"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c280:function(t,e,n){"use strict";n.r(e);var i=n("0801"),o=n("6b43");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("4aef");var s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"e3b93d94",null,!1,i["a"],void 0);e["default"]=u.exports},e394:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},onLoad:function(){document.querySelector("html").setAttribute("lang",this._i18n.locale),"ar"==this._i18n.locale?document.querySelector("html").setAttribute("dir","rtl"):document.querySelector("html").removeAttribute("dir")},methods:{logout:function(){this.$store.commit("logout"),uni.showToast({title:this.$t("my.setting.Logoutsuccessful"),icon:"success"}),setTimeout((function(){uni.reLaunch({url:"/pages/index/index"})}),2e3)},toChangeUsername:function(){uni.navigateTo({url:"/pages/my/setting/username"})},toChangePwd:function(){uni.navigateTo({url:"/pages/my/setting/pwd"})},toGoogleAuth:function(){uni.navigateTo({url:"/pages/my/setting/google_auth"})},toTelegram:function(){window.location.href="https://t.me/PEAKARENA"}}};e.default=i}}]);