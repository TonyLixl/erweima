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
			<!-- 底部链接开始 -->
			<view class="recommendProduct">
				<text class="lineTxt"></text>
				<view class="productInfo">
					<view class="infoImg">
						<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1231593251,2053905595&fm=26&gp=0.jpg" mode=""></image>
					</view>
					<view class="infoMsg contact">
						<view>联系人:</view>
						<view>联系电话:</view>
					</view>
					<view class="icon iconfont icon-telephone phone" @click="callPhone"></view>
				</view>
				<text class="lineTxt"></text>
				<view class="productInfo">
					<view class="infoImg">
						<image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597748651175&di=4a5080f843e915b9d0fd98db45e8ebf8&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic%2Fcover%2F00%2F05%2F23%2F573697661a0a3_610.jpg"
						 mode=""></image>
					</view>
					<view class="infoMsg loctionMsg">
						<view>位置</view>
					</view>
					<view class="icon iconfont icon-address1 loction" @click="getLocation"></view>
				</view>
				<text class="lineTxt"></text>
				<view class="productInfo">
					<view class="infoImg">
						<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=173882621,4120001315&fm=26&gp=0.jpg" mode=""></image>
					</view>
					<view class="infoMsg">
						<view @click="navito">进入淘宝店</view>

					</view>
				</view>
				<text class="lineTxt"></text>
			</view>
			<!-- 底部链接结束 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgBaseUrl: "",
				imgList: [],
			}
		},
		onLoad() {
			this.getSwiper()
			this.imgBaseUrl=this.baseUrl
		},
		methods: {
			// 获取公司轮播图图片
			getSwiper() {
				uni.request({
					url: this.baseUrl + "/api/GetImages/",
					method: 'POST',
					dataType: 'json',
					data: {
						QueryTerms: {
							CoID: uni.getStorageSync('CoID'),
							ImgType: 1,
							ImgName: '',
							Relation: ''
						},
						Page: 0,
						PageSize: 0
					},
					success: (res) => {
						console.log(77777777777)
						this.imgList = res.data.ObjList
					},
				})
			},
			// 展示位置函数
			getLocation() {
				var coCode = uni.getStorageSync('CoId')
				uni.request({
						url: this.baseUrl + "/api/GetCompanyByCode/123",
						method: 'GET',
						success: (res) => {
							const result = this.transform(res.data.Longitude, res.data.Latitude)

							uni.openLocation({
								longitude: parseFloat(result[0]),
								latitude: parseFloat(result[1]),
								success: function() {
								},
								fail(err) {
								}
							});
						},
					})
			},
			callPhone() {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: '13821892110',
					// 成功回调
					success: (res) => {
						console.log('调用成功!')
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				})
			},
			navito() {
				uni.request({
					url: this.baseUrl + "api/Links",
					method: 'POST',
					data: {
						"QueryTerms": {
							"CoID":uni.getStorageSync("CoID"),
							"LinkTypeID": 1
						},
						"Page": 0,
						"PageSize": 0
					},
					dataType: 'json',
					success: (res) => {
						console.log(res.data.ObjList)
						window.location.href = "https://"+res.data.ObjList[0].Url
						// window.location.href = 'https://www.baidu.com' 
					},
				})
				
			}
		}
	}
</script>

<style>
	@import '../../public.css';

	.lineTxt {
		display: block;
		height: 1upx;
		background-color: #C8C7CC;
	}

	.lineTxtTop {
		display: block;
		height: 2upx;
		background-color: #C8C7CC;
	}

	/* 底部展示部分 */
	.bottomPart {
		padding: 30upx 10upx;
	}

	/* 商品展示部分 */
	.companyExhibition {
		margin-top: 14upx;
	}

	/* 商品推荐部分 */
	.recommendProduct {
		margin-top: 14upx;
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
		position: relative;
		height: 170upx;
		margin: 10upx 0;
		font-size: 22upx;
	}

	.productInfo>view:first-child {
		width: 30%;
	}

	.productInfo>view:nth-child(2) {
		width: 65%;
	}

	.infoImg {
		width: 30%;
		padding: 10upx 25upx;
		box-sizing: border-box;
	}
	.infoImg>image{
		border-radius: 20%;
	}
	.infoMsg {
		width: 70%;
		font-size: 18upx;
		vertical-align: baseline;
		margin: auto;
	}

	.contact {
		display: flex;
		flex-flow: column;
	}

	.contact>view:first-child {
		margin-bottom: 40upx;
	}

	.contact>view:nth-child(3) {
		font-size: 80upx;
	}

	.loctionMsg {
		display: flex;
		justify-content: space-between;
	}

	.phone {
		font-size: 90upx;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-14%, -50%);
	}

	.loction {
		font-size: 90upx;
		font-size: 90upx;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(-14%, -50%);
	}

	.swiper-item>image {
		background-size: 100%;
	}
</style>
