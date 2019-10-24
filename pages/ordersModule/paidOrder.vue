<template>
	<view class="pageGray">
		<view class="have-pay-header-box">
			<view class="have-pay-header-list" @click="headerMenu" :class="isActive?'have-pay-header-list-active':''">
				<text>未出行订单</text>
			</view>
			<view class="have-pay-header-list" @click="headerMenu" :class="isActive?'':'have-pay-header-list-active'">
				<text>历史订单</text>
			</view>
		</view>
		<view class="query-order">
			<paid-order-list v-if="isActive" :havePay.sync='havePay' :havePayShow.sync='havePayShow'></paid-order-list>
			<paid-order-list v-if="!isActive" :havePay.sync='havePay' :historyOrder.sync='historyOrder'></paid-order-list>
		</view>
	</view>
</template>

<script>
	import PaidOrderList from '../../components/paid-order-list.vue'
	export default {
		data() {
			return {
				havePay: [],//完成订单
				isActive: true,
				havePayShow:true,//已完成订单
				historyOrder:true//历史订单
			}
		},
		components:{PaidOrderList},
		onLoad: function(e) {
			this.havePay=require('../../static/json/havePay.json')
			uni.hideLoading();
			// uni.request({
			// 	url: 'http://39.105.50.203/search/havePay.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		console.log(res)
			// 		this.havePay = res.data;
			// 		uni.hideLoading();
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		methods:{
			headerMenu:function(e){
				this.isActive=!this.isActive;
			}
		}

	}
</script>

<style>
	.floatLeft {
		float: left;
	}

	.floatRight {
		float: right;
	}

	.pageGray {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background-color: #EEEEEE;
	}

	.have-pay-header-box {
		width: 100%;
		margin-bottom: 30upx;
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.have-pay-header-list {
		width: 50%;
		text-align: center;
		line-height: 80upx;
		float: left;
	}

	.have-pay-header-list text {
		font-size: 32upx;
		font-weight: 300;
		width: 200upx;
		display: block;
		height: 80upx;
		border: 8upx solid #FFFFFF;
		margin: 0 auto;
	}

	.have-pay-header-list-active text {
		color: #007AFF;
		border-bottom: 8upx solid #007AFF;
	}

	.query-order {
		width: 100%;
	}

	.have-pay-order-box {
		width: 100%;
		background-color: #F8F8F8;
		overflow: hidden;
		margin-bottom: 30upx;
	}

	.order-header-title-box {
		width: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
		line-height: 80upx;
		font-size: 32upx;
		font-weight: 300;
		background-color: #FFFFFF;
		overflow: hidden;
	}

	.order-header-title-icon {
		width: 30upx;
		height: 30upx;
		vertical-align: middle;
		margin-right: 20upx;
		margin-top: -10upx;
	}

	.order-header-title-detail {
		color: #666666;
	}

	.order-content-box {
		padding: 20upx 30upx 20upx 80upx;
		overflow: hidden;
		line-height: 46upx;
	}

	.order-content-box .floatLeft {
		font-size: 28upx;
		font-weight: 300;
	}

	.order-content-box .floatRight {
		color: #007AFF;
		font-size: 30upx;
	}
</style>
