<template>
	<view class="contentTwo">
		<!-- 顶部轮播图 -->
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
		<!-- 商品介绍 -->
		<!-- 左边分类导航栏 -->
		<view class="leftOption">
			<text class="lineTxt"></text>
			<view v-for="(item,index) in productTypeList" :key="item.ProductTypeID" class="option" @click="changeProductType(item.ProductTypeID)"
			 :style="item.style">
				<view>{{item.ProductTypeName}}</view>
			</view>
		</view>
		<!-- 产品列表开始 -->
		<view class="recommendProduct" v-for="(item,index) in productList" :key="item.ProductID" @click="navigateTo(item.ProductID)">
			<view class="productInfo">
				<view class="infoImg">
					<image :style="{backgroundImage:`url(${imgBaseUrl+item.ImgUrl})`}"></image>
				</view>
				<view class="infoMsg">
					<view>{{item.ProductName}}</view>
					<text class="overHid">{{item.Synopsis}}</text>
				</view>
			</view>
		</view>
		<!-- 产品列表结束-->
	</view>
</template>

<script>
	let data = {}
	export default {
		data() {
			return {
				imgBaseUrl: "",
				imgList: [],
				productTypeList: '',
				productList: '',
				productName: '',
				productInfo: ''
			}
		},
		onLoad() {
			this.imgBaseUrl = this.baseUrl
			let that = this
			this.getSwiper()
			this.getProductTypeList()
			// this.firstProductType()
		},
		methods: {
			// 获取顶部公司轮播图
			getSwiper() {
				uni.request({
					url: this.baseUrl + "/api/GetImages",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							CoID: uni.getStorageSync('CoID'),
							// 公司轮播图数据在后台是默认第一项,所以不用动态传参
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
			// 获取产品分类列表
			getProductTypeList() {
				uni.request({
					url: this.baseUrl + "/api/GetProductTypes",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							// 公司id通过路由地址获取缓存在本地
							CoID: uni.getStorageSync('CoID'),
							ProductTypeName: '',
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						this.productTypeList = res.data.ObjList
						this.productTypeList[0].style = "background-color:#fff"
						uni.setStorageSync("productTypeID",this.productTypeList[0].ProductTypeID)
						this.firstProductType()
					}
				})
			},
			// 打开页面默认选择第一项
			firstProductType() {
				uni.request({
					url: this.baseUrl + "/api/GetProducts_image",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							// 公司id通过路由地址获取缓存在本地
							CoID: uni.getStorageSync('CoID'),
							// 这个也是默认第一项,让后台把第一项菜单的typeid写成1,算了,写成动态赋值吧
							ProductTypeID: uni.getStorageSync('productTypeID'),
							ProductName: '',
							// RecommendFlg为空
							RecommendFlg: ''
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						// 直接赋值给imgList
						this.productList = res.data.ObjList
					},
				})
			},
			// 点击展示相应类型产品列表
			changeProductType(typeId) {
				for (var i = 0; i < this.productTypeList.length; i++) {
					if (this.productTypeList[i].ProductTypeID === typeId) {
						this.productTypeList[i].style = "background-color:#fff"
					} else {
						this.productTypeList[i].style = "background-color:#ccc"
					}
				}
				uni.request({
					url: this.baseUrl + "/api/GetProducts_image",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							// 公司id通过路由地址获取缓存在本地
							CoID: uni.getStorageSync('CoID'),
							ProductTypeID: typeId,
							ProductName: '',
							// RecommendFlg为空
							RecommendFlg: ''
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						this.productList = res.data.ObjList
					},
				})
			},
			// 跳转产品详情
			navigateTo(productid) {
				uni.navigateTo({
					url: 'productinfo?ProductID=' + productid
				})
			},
		}

	}
</script>

<style>
	@import '../../public.css';

	.contentTwo {
		width: 100%;
	}

	.topShow {
		width: 100%;
	}

	.swiper-item>image {
		background-size: 100%;
	}

	/* 商品介绍 */
	.recommendProduct {
		margin-top: 14upx;
		margin-left: 120upx;
		height: 250upx;
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
	}

	.recommendTxt {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: #fff;
		padding: 0 10upx;
		box-sizing: border-box;
		font-size: 22upx;
	}

	.productInfo {
		display: flex;
		margin-top: 10upx;
		height: 250upx;
	}

	.infoImg {
		width: 35%;
	}

	.infoImg>image {
		height: 230upx;
		width: 200upx;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.infoMsg {
		width: 55%;
		font-size: 24upx;
		vertical-align: baseline;
		overflow: hidden;
	}

	.leftOption {
		position: fixed;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		border-top: 4upx solid #ccc;
		border-right: 4upx solid #ccc;
		border-left: 4upx solid #ccc;
		background-color: #ccc;
	}

	.option {
		width: 80upx;
		padding: 10upx;
		font-weight: 500;
		text-align: center;
		border-bottom: 4upx solid #ccc;
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
