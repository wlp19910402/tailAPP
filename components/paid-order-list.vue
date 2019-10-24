<template>
	<view>
		<!-- <navigator :url="'../orderDetail/orderDetail?newsid=' + newsid + '&date=' + godate + '&week=' + dateweek"> -->

		<view @tap="paidList" class="have-pay-order-box" v-if="item.orderType===havePayShow||historyOrder" v-for="(item,index) in havePay"
		 :key="index">
			<view class="order-header-title-box">
				<view class="floatLeft">
					<image class="order-header-title-icon" src="../static/images/benren-icon.png"></image>
					{{item.tailName}}&nbsp;&nbsp;{{item.startTrainName}}&nbsp;—&nbsp;{{item.endTrainName}}
				</view>
				<view class="floatRight order-header-title-detail">查看详情<uni-icon class="train-list-btn" type="arrowright" size="20"></uni-icon></view>
			</view>
			<view class="order-content-box">
				<view class="floatLeft">
					<view class="order-info-list">
						<label>订单号：</label>
						<text>{{item.orderCode}}</text>
					</view>
					<view class="order-info-list">
						<label>发车时间：</label>
						<text>{{item.arrivalDate}}&nbsp;&nbsp;{{item.departureTime}}开</text>
					</view>
					<view class="order-info-list">
						<label>总张数：</label>
						<text>{{item.userSeat.length}}张</text>
					</view>
				</view>
				<view class="floatRight">{{item.orderType?'已支付':'待支付'}}</view>
			</view>
		</view>
		<!-- </navigator> -->
	</view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui'
	export default {
		props: {
			havePay: {
				type: Array,
				default: function() {
					return []
				}
			},
			havePayShow: {
				type: Boolean,
				default: true
			},
			historyOrder: {
				type: Boolean,
				default: false
			},
			dateweek: {
				type: String,
				default: 'hello'
			},
			godate: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				dayData: new Date()
			}
		},
		components:{uniIcon},
		methods: {

			paidList: function() {
				console.log(this.dayData.getTime());
				uni.redirectTo({
					url: "orderDetail?date=" + this.godate
				})
			}
		}
	}
</script>

<style>
</style>
