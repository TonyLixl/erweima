(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/classify/classify"],{"7b79":function(t,e,s){"use strict";s("ecea");var i=n(s("b13b")),a=n(s("3a53"));function n(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page";var c=new a.default(i.default);c.$mount()},"9ed7":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content fml-flex",attrs:{_hid:0}},[s("view",{staticClass:"class-menu",style:{height:t.height},attrs:{_hid:1}},[s("view",{staticClass:"fml-flex flex-1 menu-title",class:{active:"zz"==t.state},attrs:{_hid:2},on:{click:function(e){t.classHandle("zz")}}},[s("image",{attrs:{src:"../../static/images/icon/zzrz.png",_hid:3}}),s("view",{attrs:{_hid:4}},[])]),s("view",{staticClass:"fml-flex flex-1 menu-title",class:{active:"tx"==t.state},attrs:{_hid:6},on:{click:function(e){t.classHandle("tx")}}},[s("image",{attrs:{src:"../../static/images/icon/txrz.png",_hid:7}}),s("view",{attrs:{_hid:8}},[])]),s("view",{staticClass:"fml-flex flex-1 menu-title",class:{active:"zh"==t.state},attrs:{_hid:10},on:{click:function(e){t.classHandle("zh")}}},[s("image",{attrs:{src:"../../static/images/icon/zhfw.png",_hid:11}}),s("view",{attrs:{_hid:12}},[])])]),s("view",{staticClass:"class-detail flex-1 text-center   animated fadeInRight",attrs:{_hid:14}},t._l(t.classList,function(e,i,a){var n=void 0!==a?a:i;return s("view",{key:e,staticClass:"detail-info  ",attrs:{_hid:15,_fid:n,_fk:"item"}},[s("view",{staticClass:"info-list",attrs:{_hid:16,_fid:n}},[t._v(t._s(e),17,n)])])},15,t._self))])},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},a091:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={zz:["AAA级信用企业","中国绿色环保产品","中国高新技术企业","中国著名品牌","AAA级资信等级企业","AAA级信用等级企业","企业信用资信等级AAA级","安全生产标准化生产企业","AAA级重合同守信用企业","AAA级质量、服务诚信单位","AAA级重服务守信用单位","AAA级诚信经营示范单位","政府采购优秀供应商","全国质量信得过产品","中国著名品牌","全国餐饮行业最具竞争力百强企业"],zh:["软件著作权","软件测试报告","软件产品登记","发明专利","公司网站建设","企业小程序建设"],tx:["ISO9001 质量管理体系","ISO14001 环境管理体系","OHSAS18001 职业健康安全管理体系","ISO13485 医疗器械质量体系","ISO20000 信息技术服务管理体系","ISO27000 信息安全管理体系","ISO22000食品认证","HACCP 危害分析和关键控制点体系","GB/T50430工程建筑施工企业质量规范认证","HSE健康、安全与环境管理体系","五星售后服务体系认证","五星品牌认证","有机产品认证"]},i={data:function(){return{classList:[],height:"100%",state:"zz"}},onLoad:function(){this.getPhoneH()},onShow:function(){var e=t.getStorageSync("classify")||"zz";this.classHandle(e)},methods:{getPhoneH:function(){var e=this;t.getSystemInfo({success:function(s){e.height=t.upx2px(2*s.windowHeight)+"px"}})},classHandle:function(t){this.state=t,this.classList=s[t]}}};e.default=i}).call(this,s("c11b")["default"])},a8d0:function(t,e,s){"use strict";s.r(e);var i=s("a091"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},b13b:function(t,e,s){"use strict";s.r(e);var i=s("9ed7"),a=s("a8d0");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("c72f");var c=s("2877"),l=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);l.options.__file="classify.vue",e["default"]=l.exports},c72f:function(t,e,s){"use strict";var i=s("f01e"),a=s.n(i);a.a},f01e:function(t,e,s){}},[["7b79","common/runtime","common/vendor"]]]);