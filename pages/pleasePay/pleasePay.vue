<template>
	<view class="page">
		<view class="please-pay-box">
			<view class="please-pay-header">
				<image class="please-pay-header-icon" src="../../static/images/time-icon.png"></image>
				<text class="please-pay-header-text">中国铁路电子支付平台</text>
			</view>
			<view class="please-pay-price">
				<view class="floatLeft">应付金额</view>
				<view class="floatRight">¥553</view>
			</view>
			<view class="payment-method-title">选择支付方式</view>
			<view class="payment-method-box">
				<view class="payment-method-list" @click="paymentSelect(item.paymentMethodId)" :class="item.paymentMethodId===paymentId?'payment-method-list-acitve':''"
				 v-for="(item,index) in payment" :key="index">
					<image class="payment-method-icon" :src="item.paymentMethodIcon"></image>
					<text class="payment-method-name">{{item.paymentMethodName}}</text>
					<image class="active-icon" src="../../static/images/payment-active.png"></image>
				</view>
			</view>
		</view>
		<button class="tail-btn" @click="submitOrder" type="primary">提交支付</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payment: [],
				paymentId: '01'

			};
		},
		onLoad: function(e) {
			uni.showLoading({
				title: "加载中...."
			});
			this.payment=require('../../static/json/paymentMethod.json')
			uni.hideLoading();
			
			// uni.request({
			// 	url: 'http://39.105.50.203/search/paymentMethod.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		console.log(res)
			// 		this.payment = res.data;
			// 		uni.hideLoading();
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		methods: {
			paymentSelect: function(e) {
				this.paymentId = e;
			},
			submitOrder:function(e){
				uni.showLoading({
				title: "提交中...."
			});
			}
		},
		onShow: function() {

		}
	}
</script>

<style>
	.page {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		min-height: 100%;
		background-color: #F8F8F8;
	}

	.please-pay-header {
		background-color: #007AFF;
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		padding-bottom: 20upx;
	}

	.please-pay-header-icon {
		width: 30upx;
		height: 40upx;
		padding-left: 30upx;
		vertical-align: middle;
		margin-right: 20upx;
	}

	.please-pay-header-text {
		font-weight: 300;
		line-height: 60upx;
		color: #ffffff;
	}

	.please-pay-price {
		background-color: #ffffff;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
		height: 140upx;
		line-height: 140upx;
	}

	.floatLeft {
		float: left;
	}

	.floatRight {
		float: right;
	}

	.please-pay-price .floatLeft {
		font-weight: 300;
	}

	.please-pay-price .floatRight {
		color: #ff9000;
	}

	.payment-method-title {
		width: 100%;
		padding-left: 30upx;
		box-sizing: border-box;
		line-height: 120upx;
		height: 120upx;
	}

	.payment-method-box {
		width: 100%;
		overflow: hidden;
	}

	.payment-method-list {
		width: 50%;
		border: 1upx solid #f8f8f8;
		box-sizing: border-box;
		height: 140upx;
		background-color: #FFFFFF;
		line-height: 140upx;
		padding-left: 30upx;
		float: left;
		position: relative;
		overflow: hidden;
	}

	.payment-method-icon {
		width: 40upx;
		height: 40upx;
		vertical-align: middle;
		margin-right: 20upx;
	}

	.payment-method-name {
		font-size: 36upx;
		font-weight: 300;
	}

	.payment-method-list-acitve {
		border: 1upx solid #007AFF;
	}

	.active-icon {
		position: absolute;
		width: 140upx;
		height: 90upx;
		right: 0;
		top: 0;
		display: none;
	}

	.payment-method-list-acitve .active-icon {
		display: block;
	}

	.tail-btn {
		background-color: #007AFF !important;
		width: 710upx;
		margin: 40upx auto;
	}
</style>
