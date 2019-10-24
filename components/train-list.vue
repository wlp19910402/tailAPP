<template>
	<view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in tailData" :key="index"
		 :data-newsid="item.trainId">
			<navigator :url="!endorse?'confirmOrder?newsid=' + item.trainId + '&date=' + godate + '&week=' + dateweek : 'confirmOrderEndorse?' + '&date=' + godate + '&week=' + dateweek">
				<!-- <navigator :url="'../../ticketModule/confirmOrder/confirmOrder?newsid=' + item.trainId + '&date=' + godate + '&week=' + dateweek"> -->
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view class="tail-name">{{item.tailName}}</view>
						<view class="flex-box">
							<view class="tail-detail flex-box">
								<view class="tail-train-type">{{item.startTrainState}}</view>
								<view class="trainName">{{item.startTrainName}}</view>
							</view>
							<view class="train-time">{{item.departureTime}}</view>
						</view>
						<view class="flex-box">
							<image class="arrival-icon" src="../static/images/arrival-icon.jpg"></image>
							<view class="arrival-time">{{item.timeLength}}</view>
						</view>
						<view class="flex-box">
							<view class="tail-detail flex-box">
								<view class="tail-train-type">{{item.endTrainState}}</view>
								<view class="trainName">{{item.endTrainName}}</view>
							</view>
							<view class="train-time">{{item.arrivalTime}}</view>
						</view>
						
						<uni-icon class="train-list-btn" type="arrowright" size="20"></uni-icon>
					</view>
					<view class="seat-box">
						<view class="seat-list" v-for="(ite,eq) in item.seat" :key="eq">
							<text class="seat-name" :class="[ite.number>0? '':'gray-color']">{{ite.name}}:</text>
							<text class="seat-num">
								<text v-if="ite.number>0&&ite.number<50">{{ite.number}}张</text>
								<text v-if="ite.number >=50 " class="green-color">有</text>
								<text v-if="ite.number===0" class="gray-color">无</text>
							</text>
							<text class="seat-price" v-if="false">¥{{ite.price}}</text>
						</view>
					</view>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui'
	export default {
		props: {
			tailData: {
				type: Array,
				default: function() {
					return []
				}
			},
			dateweek: {
				type: String,
				default: 'hello'
			},
			godate: {
				type: String,
				default: 'new Date()'
			},
			endorse: {
				type: Boolean,
				default: false
			}
		},
		components: {
			uniIcon
		},
		methods: {}
	}
</script>

<style>
	.uni-list-cell {
		background-color: #ffffff;
		margin: 15upx 0;
		border-top: 1upx solid #eee;
		border-bottom: 1upx solid #eee;
	}

	.uni-list-cell:first-child {
		margin-top: 20upx;
	}

	.uni-list {
		background-color: #F8F8F8;
		height: 100%;
		min-height: 400upx;
	}

	.uni-media-list-body {
		width: 100%;
		padding: 10upx 20upx;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1upx dotted #ddd;
	}

	.tail-name {
		width: 100upx;
		text-align: left;
		font-size: 36upx;
		line-height: 80upx;
		box-sizing: border-box;
	}

	.flex-box {
		flex: 1;
	}

	.tail-detail {
		display: flex;
	}

	.tail-train-type {
		margin-top: 10upx;
		width: 30upx;
		height: 30upx;
		background-color: #007AFF;
		color: #ffffff;
		font-size: 24upx;
		border-radius: 4upx;
		text-align: center;
		line-height: 30upx;
	}

	.arrival-icon {
		width: 160upx;
		height: 54upx;
		margin: 0 auto;
		display: block;
		opacity: 0.6;
	}

	.arrival-time {
		width: 100%;
		text-align: center;
		font-size: 20upx;
		color: #999;
	}

	.trainName {
		font-size: 32upx;
		line-height: 48upx;
		margin-left: 10upx;
	}

	.train-time {
		font-size: 28upx;
		color: #66afff;
	}

	.seat-box {
		width: 750upx;
		padding: 20upx;
		overflow: hidden;
	}

	.seat-list {
		font-size: 24upx;
		line-height: 36upx;
		width: 33%;
		box-sizing: border-box;
		float: left;
	}

	.gray-color {
		color: #aaa;
	}

	.green-color {
		color: #3ed686;
	}
</style>
