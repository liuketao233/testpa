(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-maildetail"],{"22e0":function(t,i,e){"use strict";e.r(i);var n=e("b6aa"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"842f":function(t,i,e){"use strict";e.r(i);var n=e("b6bf"),a=e("22e0");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);var s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"68ae5089",null,!1,n["a"],void 0);i["default"]=u.exports},b6aa:function(t,i,e){"use strict";(function(t){e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{id:0,detail:{}}},onLoad:function(t){this.id=t.id,this.getDetail()},methods:{getDetail:function(){var i=this;uni.showLoading({title:this.$t("common.loading")});var e=this.$config.baseUrl+"notice/detail";this.$new_request(e,{id:this.id}).then((function(e){uni.hideLoading(),t.log(e.data),1==e.code?i.detail=e.data:i.$util.msg(e.msg,{duration:4e3})}))},goWeb:function(){window.location.href=this.detail.url}}};i.default=n}).call(this,e("5a52")["default"])},b6bf:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("my.MessageDetail")))])],2),e("v-uni-view",{staticClass:"margin padding bg-white radius"},[e("v-uni-view",{staticClass:"text-lg text-bold"},[t._v(t._s(t.detail.title))]),e("v-uni-view",{staticClass:"text-grey margin-top"},[t._v(t._s(t.detail.createtime))]),e("v-uni-view",{staticClass:"margin-top",staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:t._s(t.detail.content)}})],1)],1)},a=[]}}]);