<template>
	<view class="content">
		<view class="topShow">
			<swiper class="swiper" indicator-color="#fff" indicator-active-color="#1f73f3" :indicator-dots="true" :autoplay="true"
			 :circular="true">
				<swiper-item v-for="(item,index) in imgList" :key="item.ImgId">
					<view class="swiper-item">
						<image :style="{backgroundImage:`url(${imgBaseUrl+item.ImgUrl})`}"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bottomPart">
			<view class="copmanyInfo">企业动态</view>
			<!-- 新闻列表 -->
			<view class="recommendProduct" v-for="(item,index) in newsList" :key="item.NewsID" @click="navgateTo(item.NewsID)">
				<view class="productInfo" >
					<view class="infoImg">
						<image :style="{backgroundImage:`url(${imgBaseUrl+item.ImgUrl})`}"
						 ></image>
					</view>
					<view class="infoMsg">
						<view>{{item.ProductName}}</view>
						<text class="overHid">{{item.Synopsis}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgBaseUrl:"",
				imgList:'',
				newsList:'',
			}
		},
		onLoad() {
			this.imgBaseUrl=this.baseUrl
			this.getNewsList()
			this.getSwiper()
		},
		methods: {
			// 获取公司轮播图图片
			getSwiper() {
				const CoID = uni.getStorageSync('CoID');
				uni.request({
					url: this.baseUrl + "/api/GetImages",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							CoID: CoID,
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
			// 获取企业新闻列表
			getNewsList() {
				uni.request({
					url: this.baseUrl+"/api/NewsListImage",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							CoID:uni.getStorageSync('CoID'),
							NewsTitle: ""
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						this.newsList=res.data.ObjList
					},
				})
			},
			// 跳转新闻详情
			navgateTo(newsId){
				uni.navigateTo({
					url:"newsdetail?newsId="+newsId
				})
			},
		}
	}
</script>

<style>
	@import '../../public.css';
	/* 底部展示部分 */
	.bottomPart{
		padding: 10upx;
	}
	/* 商品推荐部分 */
	.recommendProduct {
		margin-top: 14upx;
	}

	.productInfo {
		display: flex;
		height: 180upx;
		margin:20upx 0;
	}

	.infoImg {
		width: 30%;
	}
	.infoImg>image{
		background-size: cover;
	}
	.infoMsg {
		width: 70%;
		font-size: 26upx;
		margin-left: 20upx;
		vertical-align: baseline;
		overflow: hidden;
	}
	.copmanyInfo{
		font-size: 30upx;
		line-height: 26upx;
		margin: 20upx 0;
	}
	.swiper-item>image{
		background-size:cover;
	}
	.overHid {
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box;
		/** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical;
		/** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 5;
		/** 显示的行数 **/
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		overflow: hidden;
	}
</style>
