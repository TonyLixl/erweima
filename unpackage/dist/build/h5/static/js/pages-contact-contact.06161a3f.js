(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{2232:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"uni-image[data-v-52b5b857]{width:100%;height:100%}\r\n/* 头部轮播图 */.swiper[data-v-52b5b857]{height:%?312?%}.swiper-item uni-image[data-v-52b5b857]{width:%?769?%;max-width:100%;height:%?312?%}.fml-flex[data-v-52b5b857]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.flex-1[data-v-52b5b857]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.fml-flex-vertical[data-v-52b5b857]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.fml-flex.flex-start[data-v-52b5b857]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.text-center[data-v-52b5b857]{text-align:center}uni-view[data-v-52b5b857]{font-size:%?28?%;color:#333}.animated[data-v-52b5b857]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes fadeInRight-data-v-52b5b857{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight-data-v-52b5b857{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRight[data-v-52b5b857]{-webkit-animation-name:fadeInRight-data-v-52b5b857;animation-name:fadeInRight-data-v-52b5b857}\r\n/*每个页面公共css */\r\n/*每个页面公共css */.lineTxt[data-v-52b5b857]{display:block;height:%?1?%;background-color:#c8c7cc}.lineTxtTop[data-v-52b5b857]{display:block;height:%?2?%;background-color:#c8c7cc}\r\n/* 底部展示部分 */.bottomPart[data-v-52b5b857]{padding:%?30?% %?10?%}\r\n/* 商品展示部分 */.companyExhibition[data-v-52b5b857]{margin-top:%?14?%}\r\n/* 商品推荐部分 */.recommendProduct[data-v-52b5b857]{margin-top:%?14?%}.recommendTitle[data-v-52b5b857]{height:%?30?%;position:relative;text-align:center;display:block;text-align:center;vertical-align:middle;padding-top:%?16?%;box-sizing:border-box}.recommendTxt[data-v-52b5b857]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;padding:0 %?10?%;box-sizing:border-box;font-size:%?22?%}.productInfo[data-v-52b5b857]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;height:%?170?%;margin:%?10?% 0;font-size:%?22?%}.productInfo>uni-view[data-v-52b5b857]:first-child{width:30%}.productInfo>uni-view[data-v-52b5b857]:nth-child(2){width:65%}.infoImg[data-v-52b5b857]{width:30%;padding:%?10?% %?25?%;box-sizing:border-box}.infoImg>uni-image[data-v-52b5b857]{border-radius:20%}.infoMsg[data-v-52b5b857]{width:70%;font-size:%?18?%;vertical-align:initial;margin:auto}.contact[data-v-52b5b857]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;flex-flow:column}.contact>uni-view[data-v-52b5b857]:first-child{margin-bottom:%?40?%}.contact>uni-view[data-v-52b5b857]:nth-child(3){font-size:%?80?%}.loctionMsg[data-v-52b5b857]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.phone[data-v-52b5b857]{font-size:%?90?%;position:absolute;top:50%;right:0;-webkit-transform:translate(-14%,-50%);transform:translate(-14%,-50%)}.loction[data-v-52b5b857]{font-size:%?90?%;font-size:%?90?%;position:absolute;top:50%;right:0;-webkit-transform:translate(-14%,-50%);transform:translate(-14%,-50%)}.swiper-item>uni-image[data-v-52b5b857]{background-size:100%}",""]),t.exports=i},"55b2":function(t,i,a){var e=a("2232");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("2196a083",e,!0,{sourceMap:!1,shadowMode:!1})},5783:function(t,i,a){"use strict";a.r(i);var e=a("8814"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},8814:function(t,i,a){"use strict";a("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{imgBaseUrl:"",imgList:[]}},onLoad:function(){this.getSwiper(),this.imgBaseUrl=this.baseUrl},methods:{getSwiper:function(){var t=this;uni.request({url:this.baseUrl+"/api/GetImages/",method:"POST",dataType:"json",data:{QueryTerms:{CoID:uni.getStorageSync("CoID"),ImgType:1,ImgName:"",Relation:""},Page:0,PageSize:0},success:function(i){console.log(77777777777),t.imgList=i.data.ObjList}})},getLocation:function(){var t=this;uni.getStorageSync("CoId");uni.request({url:this.baseUrl+"/api/GetCompanyByCode/123",method:"GET",success:function(i){var a=t.transform(i.data.Longitude,i.data.Latitude);uni.openLocation({longitude:parseFloat(a[0]),latitude:parseFloat(a[1]),success:function(){},fail:function(t){}})}})},callPhone:function(){uni.makePhoneCall({phoneNumber:"13821892110",success:function(t){console.log("调用成功!")},fail:function(t){console.log("调用失败!")}})},navito:function(){uni.request({url:this.baseUrl+"api/Links",method:"POST",data:{QueryTerms:{CoID:uni.getStorageSync("CoID"),LinkTypeID:1},Page:0,PageSize:0},dataType:"json",success:function(t){console.log(t.data.ObjList),window.location.href="https://"+t.data.ObjList[0].Url}})}}};i.default=e},d6fc:function(t,i,a){"use strict";var e,n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"topShow"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-color":"#fff","indicator-active-color":"#1f73f3","indicator-dots":!0,autoplay:!0,circular:!0}},t._l(t.imgList,(function(i,e){return a("v-uni-swiper-item",{key:i.ImgId},[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-image",{style:{backgroundImage:"url("+(t.imgBaseUrl+i.ImgUrl)+")"}})],1)],1)})),1)],1),a("v-uni-view",{staticClass:"bottomPart"},[a("v-uni-view",{staticClass:"recommendProduct"},[a("v-uni-text",{staticClass:"lineTxt"}),a("v-uni-view",{staticClass:"productInfo"},[a("v-uni-view",{staticClass:"infoImg"},[a("v-uni-image",{attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1231593251,2053905595&fm=26&gp=0.jpg",mode:""}})],1),a("v-uni-view",{staticClass:"infoMsg contact"},[a("v-uni-view",[t._v("联系人:")]),a("v-uni-view",[t._v("联系电话:")])],1),a("v-uni-view",{staticClass:"icon iconfont icon-telephone phone",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.callPhone.apply(void 0,arguments)}}})],1),a("v-uni-text",{staticClass:"lineTxt"}),a("v-uni-view",{staticClass:"productInfo"},[a("v-uni-view",{staticClass:"infoImg"},[a("v-uni-image",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748651175&di=4a5080f843e915b9d0fd98db45e8ebf8&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F05%2F23%2F573697661a0a3_610.jpg",mode:""}})],1),a("v-uni-view",{staticClass:"infoMsg loctionMsg"},[a("v-uni-view",[t._v("位置")])],1),a("v-uni-view",{staticClass:"icon iconfont icon-address1 loction",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getLocation.apply(void 0,arguments)}}})],1),a("v-uni-text",{staticClass:"lineTxt"}),a("v-uni-view",{staticClass:"productInfo"},[a("v-uni-view",{staticClass:"infoImg"},[a("v-uni-image",{attrs:{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=173882621,4120001315&fm=26&gp=0.jpg",mode:""}})],1),a("v-uni-view",{staticClass:"infoMsg"},[a("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navito.apply(void 0,arguments)}}},[t._v("进入淘宝店")])],1)],1),a("v-uni-text",{staticClass:"lineTxt"})],1)],1)],1)},o=[];a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}))},ec67:function(t,i,a){"use strict";var e=a("55b2"),n=a.n(e);n.a},f277:function(t,i,a){"use strict";a.r(i);var e=a("d6fc"),n=a("5783");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("ec67");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"52b5b857",null,!1,e["a"],s);i["default"]=c.exports}}]);