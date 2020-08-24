<template>
	<view>
		<view class="timePart">
			<text class="dataTxt">日期:{{createTime}}</text>  
			<text>编辑:{{editTime}}</text>
		</view>
		<view class="newsPart">
			<uni-badge text="2" type="success" :html='explain'></uni-badge>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../../components/jyf-parser.vue"
	export default {
		components: {
			uniBadge
		},
		data() {
			return {
				newsId:'',
				createTime:'',
				editTime:'',
				explain:''
			}
		},
		onLoad(options){
			this.newsId=options.newsId
			this.getNewsList()
		},
		methods: {
			// 通过新闻id获取新闻详情
			getNewsList() {
				uni.request({
					url: this.baseUrl+"/api/GetNewsByID/"+this.newsId,
					method: 'GET',
					success: (res) => {
						this.Time=res.data.CreateDate
						this.editTime=res.data.ModifyDate
						this.explain=res.data.Explain
						var date1 = this.Time;
						var date2 = this.editTime;
						var createData = date1.substr(0, 19); //'2019-08-09T18:23:27'
						var editData = date2.substr(0, 19); //'2019-08-09T18:23:27'
						var newCreateDate = createData.replace(/T/g, ' ');
						var newEditDate =editData.replace(/T/g, ' ');
						this.createTime=newCreateDate
						this.editTime=newEditDate
					},
				})
			},
			// 格式化日期
		}
	}
</script>

<style>
	.timePart{
		font-size: 26upx;
	}
	.dataTxt{
		margin-right: 20upx;
	}
	.newsPart{
		border: 4upx solid #ccc;
		margin: 10upx;
		padding: 20upx;
	}
</style>
