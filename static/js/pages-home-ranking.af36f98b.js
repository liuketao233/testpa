(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-ranking"],{"06e2":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={tips:a("e730").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page bg-liner"},[a("cu-custom",{attrs:{bgColor:"bg-blackblueplus",isHome:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("home.Commissionranking")))])],2),a("v-uni-scroll-view",{staticClass:"nav text-center bg-liner1",attrs:{"scroll-x":!0}},t._l(t.ranking_type,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item text-white",class:i==t.TabCur?"cur":"",attrs:{"data-type":e.value,"data-id":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.label))])})),1),a("v-uni-view",{staticClass:"grid padding col-3 text-white margin-lr-lg text-sm"},[a("v-uni-view",[t._v(t._s(t.$t("home.No")))]),a("v-uni-view",{staticClass:"text-center"},[t._v(t._s(t.$t("home.Name")))]),a("v-uni-view",{staticClass:"text-right"},[t._v(t._s(t.$t("home.Amount")))])],1),t._l(t.ranking_list,(function(e,i){return a("v-uni-view",{staticClass:"grid padding col-3 text-white margin-lr-lg text-sm"},[a("v-uni-view",[i<3?a("v-uni-view",[a("v-uni-image",{staticStyle:{width:"60upx"},attrs:{src:"../../static/home/r"+(i+1)+".png",mode:"widthFix"}})],1):a("v-uni-view",{staticClass:"padding-left-sm"},[t._v(t._s(i+1)+".")])],1),a("v-uni-view",{staticClass:"padding-left-sm",class:i<3?"top3":""},[t._v(t._s(e.username?e.username:e.user_id))]),a("v-uni-view",{staticClass:"text-orange text-right",class:i<3?"top3":""},[t._v(t._s(e.total))])],1)})),a("tips",{attrs:{thisPos:t.thisPos},on:{hideModal:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}})],2)},s=[]},"148b":function(t,e,a){"use strict";(function(t){a("7a82");var i=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("e730")),s={data:function(){return{type:"total",TabCur:1,ranking_type:[{value:"week",label:this.$t("home.Weekly")},{value:"total",label:this.$t("home.Total")},{value:"month",label:this.$t("home.Monthly")}],ranking_list:[],thisPos:""}},onLoad:function(){this.getranking(),this.$nextTick((function(){this.thisPos="rank"}))},components:{tips:n.default},methods:{tabSelect:function(e){t.log(e),this.TabCur=e.currentTarget.dataset.id,this.type=e.currentTarget.dataset.type,this.getranking()},getranking:function(){var t=this,e=this.$config.baseUrl+"operation/get_ranking";this.$new_request(e,{type:this.type}).then((function(e){t.ranking_list=e.data}))},hideModal:function(){this.thisPos=""}}};e.default=s}).call(this,a("5a52")["default"])},"216b":function(t,e,a){"use strict";a.r(e);var i=a("148b"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"39c4":function(t,e,a){var i=a("daab");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5f0cc010",i,!0,{sourceMap:!1,shadowMode:!1})},8898:function(t,e,a){"use strict";var i=a("39c4"),n=a.n(i);n.a},"9d4a":function(t,e,a){"use strict";a.r(e);var i=a("06e2"),n=a("216b");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("8898");var r=a("f0c5"),o=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"052fa4ee",null,!1,i["a"],void 0);e["default"]=o.exports},daab:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".page[data-v-052fa4ee]{min-height:calc(100vh)}.bg-liner[data-v-052fa4ee]{background-image:linear-gradient(#182230,#036)}.bg-liner1[data-v-052fa4ee]{background-image:linear-gradient(#036,#182230)}.top3[data-v-052fa4ee]{line-height:%?80?%;font-size:%?32?%}",""]),t.exports=e}}]);