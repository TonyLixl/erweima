<template>
	<view class="contentThere">
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
		<view class="bottomShow">
			<view>
				<view>{{productName}}产品</view>
				<view>价格:¥{{price}}</view>
			</view>
			<!-- 产品简介 -->
			<view class="explainPart">
				<uni-badge text="2" type="success" :html='explain'></uni-badge>
			</view>
		</view>
		<view>
		</view>
	</view>

</template>

<script>
	import uniBadge from "../../components/jyf-parser.vue"
	import yyVideoPlayer from '../../common/player/video-player.nvue';
	export default {
		components: {
			yyVideoPlayer,
			uniBadge
		},
		data() {
			return {
				dataShowVideo:true,
				imgBaseUrl: "http://125.72.111.70:8091/",
				imgList: [],
				productId: '',
				productName: '',
				price: '',
				explain: '',
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
				]
			}
		},
		onLoad(options) {
			this.productId = parseFloat(options.ProductID)
			// 刚才先执行了函数,再赋值了,所以productId为空
			this.getSwiper()
			let value=this.getProductID("productID")
			uni.setStorageSync("ProductID",value)
		},
		methods: {
			// 通过扫描二维码跳转产品详情页
			getProductID(productID) {
					var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
					     var r = window.location.search.substr(1).match(reg);      
					     if (r != null) {   
					         return unescape(r[2]);  
					     }  
					     return "";  
				},
			getSwiper() {
				var _this = this
				// 调用时赋值this.productId
				if(uni.getStorageSync("ProductID")){
					uni.request({
						url: this.baseUrl + "/api/GetProductByID/" + uni.getStorageSync("ProductID"),
						method: 'GET',
						success: (res) => {
							_this.imgList = res.data.ProductImages
							_this.productName = res.data.ProductName
							_this.price = res.data.Price
							_this.explain = res.data.Explain
							// 视频播放地址
							if(res.data.VideoUrl=== '' || typeof(res.data.VideoUrl) === 'undefined'
							|| res.data.VideoUrl=== null){
								_this.dataShowVideo = false
							}else{
								_this.url = this.baseUrl + res.data.VideoUrl
								_this.dataShowVideo = true
								console.log(_this.dataShowVideo)
							}
						},
					})
				}else{
					uni.request({
						url: this.baseUrl + "/api/GetProductByID/" + this.productId,
						method: 'GET',
						success: (res) => {
							_this.imgList = res.data.ProductImages
							_this.productName = res.data.ProductName
							_this.price = res.data.Price
							_this.explain = res.data.Explain
							if(res.data.VideoUrl=== '' || typeof(res.data.VideoUrl) === 'undefined'
							|| res.data.VideoUrl=== null){
								_this.dataShowVideo = false
							}else{
								_this.url = this.baseUrl + res.data.VideoUrl
								_this.dataShowVideo = true
							}
						},
					})
				}
			},
		}
	}
</script>

<style>
	@import '../../public.css';
	
	.swiper {
		height: 400upx;
	}

	.swiper-item {
		margin-top: 10upx;
		width: 100%;
		height: 100%;
	}

	.swiper-item>image {
		width: 100%;
		height: 100%;
		background-size: cover;
	}

	.bottomShow {
		margin: 0 10upx;
	}
</style>
