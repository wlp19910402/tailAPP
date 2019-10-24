<template>
	<view class="content">
		<view class="order-title">火车票订单</view>
		<view class="order-fun-box">
			<view class="order-fun-list">
				<navigator class="navigator">
					<image src="../../static/images/daizhifu-icon.png"></image>
					<view>待支付</view>
				</navigator>
			</view>
			<view class="order-fun-list">
				<navigator url="../ordersModule/paidOrder" class="navigator">
					<image src="../../static/images/yizhifu-icon.png"></image>
					<view>已支付</view>
				</navigator>
			</view>
			<view class="order-fun-list">
				<navigator class="navigator">
					<image src="../../static/images/huobu-icon.png"></image>
					<view>已支付</view>
				</navigator>
			</view>
			<view class="order-fun-list">
				<navigator class="navigator">
					<image src="../../static/images/benren-icon.png"></image>
					<view>本人车票</view>
				</navigator>
			</view>
		</view>
		<view class="ad-image-box">
			<image src="../../static/images/banner-1.jpg"></image>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.content {
		text-align: center;
	}
	.order-title {
		width: 100%;
		box-sizing: border-box;
		padding-left: 30upx;
		line-height: 90upx;
		text-align: left;
		font-size: 36upx;
		border-bottom: 1upx solid #eeeeee;
	}

	.order-fun-box {
		width: 100%;
		box-sizing: border-box;
		padding: 30upx 30upx 10upx;
		overflow: hidden;
	}

	.order-fun-list {
		width: 25%;
		text-align: center;
		float: left;
	}

	.navigator {
		width: 120upx;
		padding: 10upx 0;
		margin: 0 auto;
	}

	.navigator image {
		width: 60upx;
		height: 60upx;
	}

	.navigator view {
		line-height: 40upx;
		font-size: 30upx;
	}

	.ad-image-box {
		width:750upx;
		margin-bottom: 20upx;
	}

	.ad-image-box image {
		box-sizing: border-box;
		
		height: 200upx;
		width: 100%;
		margin: 20upx 0 0;
	}
</style>
