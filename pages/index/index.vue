<template>
	<view class="content">
		<view class="topShow">
			<!-- 公司轮播图 -->
			<swiper class="swiper" indicator-color="#fff" indicator-active-color="#1f73f3" :indicator-dots="true" :autoplay="true"
			 :circular="true">
				<!-- 视频播放 -->
				<swiper-item v-if='dataShowVideo'>
					<view class="playVedio">
						<yy-video-player :auto-play="true" :url="url" :poster="poster" :danmu-list="danmuList" :show-back-btn="true" class="videoPlay"></yy-video-player>
					</view>
				</swiper-item>
				<swiper-item v-for="(item,index) in imgList" :key="item.ImgId">
					<view class="swiper-item">
						<image :style="{backgroundImage:`url(${imgBaseUrl+item.ImgUrl})`}"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bottomPart">
			<!-- 企业介绍开始-->
			<view class="companyIntroduce">
				<text class="lineTxtTop"></text>
				<!-- 通过企业ID获取企业实体,请求地址:api/GetCompanyByID/14字段Explain -->
				<text>{{companyIntroduce}}</text>
			</view>
			<!-- 企业介绍结束-->
			<!-- 企业展示开始 -->
			<view class="companyExhibition">
				<view class="exhibitionTitle">
					<text class="lineTxt"></text>
					<text class="exhibitionTxt">企业展示</text>
				</view>
				<view class="exhibition">
					<view>
						<image :style="{backgroundImage:`url(${fstCompanyImage})`}" mode="aspectFit"></image>
					</view>
					<view>
						<image :style="{backgroundImage:`url(${sedCompanyImage})`}" mode="aspectFill"></image>
					</view>
					<view>
						<image :style="{backgroundImage:`url(${thdCompanyImage})`}" mode="aspectFill"></image>
					</view>
					<view>
						<image :style="{backgroundImage:`url(${forCompanyImage})`}" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<!-- 企业展示结束 -->
			<!-- 底部产品推荐开始 -->
			<view class="recommendProduct">
				<view class="recommendTitle">
					<text class="lineTxt"></text>
					<text class="recommendTxt">推荐产品</text>
				</view>
				<text class="lineTxt"></text>
				<view v-for="(item,index) in recommendImg" :key="item.ProductID" @click="navigateTo(item.ProductID)">
					<!-- <text class="lineTxt"></text> -->
					<view class="productInfo">
						<view class="infoImg">
							<image :style="{backgroundImage:`url(${imgBaseUrl+item.ImgUrl})`}"></image>
						</view>
						<view class="infoMsg">
							<view>产品名称:{{item.ProductName}}</view>
							<text class="overHid">{{item.Synopsis}}</text>
						</view>
					</view>
					<text class="lineTxt"></text>
				</view>
			</view>
			<!-- 底部产品推荐结束 -->
		</view>
	</view>
</template>

<script>
	import yyVideoPlayer from '../../common/player/yy-video-player.nvue';
	export default {
		components: {
			yyVideoPlayer
		},
		data() {
			return {
				dataShowVideo:false,
				coCode: '',
				coId: '',
				imgBaseUrl: "",
				imgList: [],
				companyIntroduce: '',
				recommendImg: '',
				fstCompanyImage: '',
				sedCompanyImage: '',
				thdCompanyImage: '',
				forCompanyImage: '',
				// 视频播放
				url: '',
				poster: '',
				danmuList: [{
						text: 'lalala',
						color: '#ff0000',
						time: 1
					},
					{
						text: '我是yy-video-player',
						color: '#ff00ff',
						time: 3
					}
				],
				coid: ""
			}
		},
		async onLoad() {
			console.log(window.location.search.substr(8))
			let that = this
			this.imgBaseUrl = this.baseUrl
			this.coCode = window.location.search.substr(8)
			// this.doCoid()
			this.getCoid()
			this.getCompanyExplain();
			// this.getSwiper();
			// this.getCompanyImages();
			// this.getRecommendProduct()
		},
		// 视频播放函数
		onShow() {
			if (this.videoContext) {
				this.videoContext.play();
			}
		},
		onReady: function() {
			this.videoContext = uni.createVideoContext('video', this);
		},
		onHide: function() {
			if (this.videoContext) {
				this.videoContext.stop();
			}
		},
		methods: {
			// 获取当前页面的参数函数
			/* getCoCode(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
					return unescape(r[2]);
				}

				return "";
			}, */
			// 通过cocode获取企业coid
			// async doCoid() {
			// 	await this.getCoid()
			// },
			getCoid() {
				var _this = this
				return new Promise((resolve, reject) => {
					uni.request({
						url: "http://125.72.111.70:8091/api/GetCompanyByCode/" + this.coCode,
						method: 'GET',
						dataType: 'json',
						success(res) {
							uni.setStorageSync('CoID', res.data.CoID)
							_this.coId = res.data.CoID
							_this.getSwiper()
							_this.getCompanyImages()
							_this.getRecommendProduct()
						}
					})
				})
			},
			// 获取公司简介的函数
			getCompanyExplain() {
				uni.request({
					// 参数动态化
					// cocode是获取到了,就是轮播图数据获取不到,因为coid没有取到
					url: this.baseUrl + "/api/GetCompanyByCode/" + this.coCode,
					method: 'GET',
					success: (res) => {
						// 视频播放地址
						if(res.data.VideoUrl=== '' || typeof(res.data.VideoUrl) === 'undefined'
						|| res.data.VideoUrl=== null){
							this.dataShowVideo = false
						}else{
							this.url = this.baseUrl + res.data.VideoUrl
							this.dataShowVideo = true
						}
						
						// 不要poster就直接展示视频开始的画面
						// this.poster=this.baseUrl+res.data.VideoUrl
						this.companyIntroduce = res.data.Explain

					},
				})
			},
			// 获取公司轮播图的函数
			getSwiper() {
				uni.request({
					url: this.baseUrl + "/api/GetImages",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							CoID: this.coId,
							// 这个type应该也是固定的
							ImgType: 1,
							ImgName: '',
							Relation: ''
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						this.imgList = res.data.ObjList
					},
				})
			},
			// 获取公司展示图片的函数
			getCompanyImages() {
				var that = this
				uni.request({
					url: that.baseUrl + "/api/GetImages",
					method: 'POST',
					data: {
						"QueryTerms": {
							"CoID": this.coId,
							// 这个type应该也是固定的,就是公司展示图片
							"ImgType": 2,
							"ImgName": "",
							"Relation": ''
						},
						"Page": 0,
						"PageSize": 0
					},
					dataType: 'json',
					success: (res) => {
						that.fstCompanyImage = that.baseUrl + res.data.ObjList[0].ImgUrl
						that.sedCompanyImage = that.baseUrl + res.data.ObjList[1].ImgUrl
						that.thdCompanyImage = that.baseUrl + res.data.ObjList[2].ImgUrl
						that.forCompanyImage = that.baseUrl + res.data.ObjList[3].ImgUrl
					},
				})
			},
			// 获取推荐产品函数
			getRecommendProduct() {
				uni.request({
					url: this.baseUrl + "/api/GetProducts_image",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							CoID: this.coId,
							ProductTypeID: 0,
							ProductName: '',
							// 推荐标识1就是推荐产品,后台标记一下,还是动态化
							RecommendFlg: 1
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						this.recommendImg = res.data.ObjList
					}
				})
			},
			// 跳转产品详情
			navigateTo(productid) {
				uni.navigateTo({
					// url:'productinfo?ProductID='+productid,
					url: '../product/productinfo?ProductID=' + productid
				})
			},
		}
	}
</script>

<style>
	@import '../../public.css';

	/* .swiper:after {
	    content: " ";
	    display:block; 
	}
	.swiper::after{
	    content: url("https://www.xiaoyuer.com/img/mobile_phone.png");
	} */
	/* 公司简介 */
	.companyIntroduce {
		margin-top: 10upx;
		font-size: 26upx;
	}

	.lineTxtTop {
		display: block;
		height: 2upx;
		background-color: #C8C7CC;
	}

	.swiper-item>image {
		background-size: 100%;
	}

	/* 底部展示部分 */
	.bottomPart {
		padding: 10upx;
	}

	/* 商品展示部分 */
	.companyExhibition {
		margin-top: 14upx;
		/* height: 550upx; */
		width: 100%;
	}

	.exhibitionTitle {
		height: 30upx;
		position: relative;
		text-align: center;
		display: block;
		text-align: center;
		vertical-align: middle;
		padding-top: 16upx;
		box-sizing: border-box;
	}

	.lineTxt {
		display: block;
		height: 1upx;
		background-color: #C8C7CC;
	}

	.exhibitionTxt {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 10upx;
		box-sizing: border-box;
		font-size: 38upx;
	}

	.exhibition {
		height: 500upx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap
	}

	.exhibition>view {
		height: 48%;
	}

	.exhibition>view:first-child {
		width: 48%;
		margin: 10upx 0 8upx 0
	}

	.exhibition>view:nth-child(2) {
		width: 48%;
		margin: 10upx 0 8upx 0
	}

	.exhibition>view:nth-child(3) {
		width: 48%;
	}

	.exhibition>view:nth-child(4) {
		width: 48%;
	}

	.exhibition>view>image {
		background-size: cover;
	}

	/* 商品推荐部分 */
	.recommendProduct {
		margin-top: 14upx;
		margin-bottom: 226upx;
	}

	.recommendTitle {
		height: 30upx;
		position: relative;
		text-align: center;
		display: block;
		text-align: center;
		vertical-align: middle;
		padding-top: 16upx;
		box-sizing: border-box;
		margin-bottom: 10upx;
	}

	.recommendTxt {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 0 10upx;
		box-sizing: border-box;
		font-size: 38upx;
	}

	.productInfo {
		display: flex;
		height: 250upx;
	}

	.infoImg {
		width: 30%;
	}

	.infoMsg>view {
		font-size: 30upx;
	}

	.infoImg>image {
		background-size: cover;
	}

	.infoMsg {
		width: 70%;
		font-size: 26upx;
		padding-left: 10upx;
		padding-top: 10upx;
		vertical-align: baseline;
		overflow: hidden;
	}

	/* 简介超出隐藏问题,用省略号代替 */
	.overHid {
		text-overflow: ellipsis;
		/* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 5;
		/** 显示的行数 **/
		word-break: break-all;
		/* break-all(允许在单词内换行。) */
		overflow: hidden;
	}
	.videoPlay{
		width: 100%;
		height: 100%;
	}
</style>
