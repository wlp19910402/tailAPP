<template>
	<view>
		<view class="pay-order-header">
			<view class="floatLeft pay-order-header-text">
				<view v-if="endorse">{{orderData[0].orderCode}}</view>
				<image v-if="!endorse" class="pay-order-time-icon" src="../static/images/time-icon.png"></image><text v-if="!endorse">{{waitText===0?'待支付':'待改签'}}</text>
			</view>
			<view v-if="!endorse" class="floatRight pay-order-header-text"><text class="min-font-size">剩余：</text>
				<uni-countdown :show-day="false" :show-colon="false" border-color="#007AFF" color="#ffffff" background-color="#007AFF"
				 splitor-color="ffffff" :hour="0" :minute="30" :second="0">
				</uni-countdown>
			</view>
		</view>

		<view class="pay-order-content">
			<view class="pay-order-box">
				<view class="tail-detail">
					<view class="trainName flex-box textAlignLeft">
						<view>{{orderData[0].startTrainName}}</view>
						<view class="train-time">{{orderData[0].departureTime}}</view>
					</view>
					<view class="flex-box">
						<view class="tail-name">{{orderData[0].tailName}}</view>
						<image class="arrival-icon" src="../static/images/ticket-icon.jpg"></image>
						<view class="arrival-time">历时{{orderData[0].timeLength}}</view>
					</view>
					<view class="flex-box trainName textAlignRight">
						<view>{{orderData[0].endTrainName}}</view>
						<view class="train-time">{{orderData[0].arrivalTime}}</view>
					</view>
				</view>
				<view class="departure-time">发车时间：{{godate}}&nbsp;&nbsp;{{dateweek}}&nbsp;&nbsp;{{orderData[0].departureTime}}</view>
				<view v-if="endorse" class="endorse-box">
					<view v-bind:class="endorseMenuId===0? 'endorse-menu-active':''" class="flex-box" @click="endorseMenuSelect(0)">
						<view>变更到站</view>
					</view>
					<view v-bind:class="endorseMenuId===1? 'endorse-menu-active':''" class="flex-box" @click="endorseMenuSelect(1)">
						<view>改签</view>
					</view>
					<view v-bind:class="endorseMenuId===2? 'endorse-menu-active':''" class="flex-box" @click="endorseMenuSelect(2)">
						<view class="">退票</view>
					</view>
				</view>
			</view>
			<view class="user-box">
				<checkbox-group @change="checkboxChange">
					<view v-if="waitText===0||endorse" class="user-list" v-for="(item,index) in orderData[0].userSeat" :key="index">
						<view class="user-info">
							<checkbox v-if="endorse" :value="item.seatId" class="floatLeft" checked="false" />
							<view class="floatLeft"><text class="user-name">{{item.user}}</text><text class="user-certificate">({{item.certificate}})</text><text
								 class="user-adult">{{item.adult}}</text></view>
							<view class="floatRight ticket-price">¥{{item.price}}</view>
						</view>
						<view class="ticket-seat">{{item.name}}{{item.seatP}}</view>
					</view>
					<view v-if="waitText===1&&!endorse" class="user-list" v-for="(item,index) in orderData[0].endorseUserSeat" :key="index">
						<view class="user-info">
							<checkbox v-if="endorse" :value="item.seatId" class="floatLeft" checked="false" />
							<view class="floatLeft"><text class="user-name">{{item.user}}</text><text class="user-certificate">({{item.certificate}})</text><text
								 class="user-adult">{{item.adult}}</text></view>
							<view class="floatRight ticket-price">¥{{item.price}}</view>
						</view>
						<view class="ticket-seat">{{item.name}}{{item.seatP}}</view>
					</view>
				</checkbox-group>
			</view>
			<view v-if="waitText===1&&!endorse">
				<view class="refund-box">
					<view class="floatLeft refund-text">退还原票票款</view>
					<view class="floatRight refund-text">￥{{totalPrice}}</view>
				</view>
				<view class="refund-box">
					<view class="floatLeft refund-text">收取新票票款</view>
					<view class="floatRight pay-tab-price-val">￥{{newTotalPrice}}</view>
				</view>
			</view>
		</view>

		<view v-if="waitText===0" class="pay-bottom-tab-box pay-bottom-tab-1">
			<view class="pay-tab-price floatLeft">
				<text class="pay-tab-price-name">总金额：</text>
				<text class="pay-tab-price-val">¥{{totalPrice}}</text>
			</view>
			<view class="floatRight">
				<navigator url="order/order" class="pay-close">取消</navigator>
				<navigator class="pay-comfrim" url="../pleasePay/pleasePay">立即支付</navigator>
			</view>
		</view>
		<view v-if="waitText===1" class="pay-bottom-tab-box pay-bottom-tab-2">
			<navigator :url="endorse?'confirmOrderEndorse':'confirmOrder'" class="pay-close">{{endorse?"取消":"取消改签"}}</navigator>
			<navigator class="pay-comfrim" :url=" endorse?'indexEndorse?startTrainName='+orderData[0].startTrainName+'&endTrainName='+orderData[0].endTrainName+'&godate='+godate+'&dateweek='+dateweek:'../pleasePay/pleasePay'">{{endorse?"立即改签":"立即支付"}}</navigator>
		</view>
	</view>
</template>

<script>
	import {
		uniCountdown
	} from '@dcloudio/uni-ui'
	export default {
		props: {
			orderData: {
				type: Array,
				default: function() {
					return []
				}
			},
			waitText: {
				type: Number,
				default: 0 //waitText=0是等待订单支付页面，waitText=0立即改签
			},
			dateweek: {
				type: String,
				default: 'hello'
			},
			godate: {
				type: String,
				default: ''
			},
			endorse: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				endorseMenuId: 0,
				countM: 30
			}
		},
		components: {
			uniCountdown
		},
		methods: {
			openinfo(e) {
				var newsid = e.currentTarget.dataset.newsid;
				console.log(newsid)
				uni.navigateTo({
					url: '../pages/confirmOrder/confirmOrder?newsid=' + newsid + '&date=' + this.godate + '&week=' + this.dateweek
				});
			},
			endorseMenuSelect(e) {
				this.endorseMenuId = e;
			},
			checkboxChange(e) {
				console.log(e.detail.value)
			}
		},
		computed: {
			totalPrice: function() {
				let total = 0;
				let me = this.orderData[0];
				if (me != null && me != undefined) {
					for (let i = 0; i < me.userSeat.length; i++) {
						total += parseInt(me.userSeat[i].price)
					}
					return total;
				}
			},
			newTotalPrice: function() {
				let total = 0;
				let me = this.orderData[0];
				// console.log(me.arrivalDate)
				if (me != null && me != undefined) {
					// for (let i = 0; i < me.userSeat.length; i++) {
					// 	total += parseInt(me.userSeat[i].price)
					// }
					if (me.endorseUserSeat != null && me.endorseUserSeat != undefined) {
						console.log(me.endorseUserSeat);
						for (let i = 0; i < me.endorseUserSeat.length; i++) {
							total += parseInt(me.endorseUserSeat[i].price)
						}
					}


				}
				return total;
			}
		}
	}
</script>

<style>
	.endorse-box {
		width: 100%;
		border-top: 1upx solid #EEEEEE;
		display: flex;
	}

	.endorse-menu-active {
		border-bottom: 8upx solid #007AFF;
	}

	.endorse-box .flex-box {
		flex: 1;
		color: #007AFF;
		line-height: 80upx;
		text-align: center;
		font-size: 28upx;
		font-weight: 300
	}

	.min-font-size {
		font-size: 24upx;
	}

	.ticket-price {
		color: #ff9000;
		font-size: 36upx;
	}

	.refund-box {
		clear: both;
		width: 690upx;
		margin: 30upx 30upx;
		box-sizing: border-box;
		font-size: 30upx;
		line-height: 50upx;
	}
	.refund-text{color: #333333;}
	.user-box {
		width: 690upx;
		margin: 30upx 30upx;
		box-sizing: border-box;
		padding: 50upx 30upx 20upx;
		font-size: 28upx;
		line-height: 50upx;
		box-shadow: 0 0 4upx 0 #dddddd;
	}

	.user-certificate {
		color: #cccccc;
		font-weight: 300;
	}

	.user-adult {
		color: #66AFFF;
		border: 1upx solid #66AFFF;
		padding: 0 10upx;
		margin-left: 10upx;
	}

	.ticket-seat {
		color: #666666;
		clear: both;
		font-weight: 300;
	}

	.pay-order-header {
		width: 100%;
		padding: 20upx 30upx 140upx;
		background-color: #007AFF;
		color: #ffffff;
		box-sizing: border-box;
	}

	.pay-order-header-text {
		font-size: 30upx;
		line-height: 30upx;
	}

	.pay-order-time-icon {
		width: 30upx;
		height: 30upx;
		vertical-align: bottom;
		margin-right: 10upx;
	}

	.pay-order-content {
		position: absolute;
		top: 70upx;
	}

	.pay-order-box {
		width: 690upx;
		margin-left: 30upx;

		background-color: #ffffff;
		border-radius: 6upx;
		padding: 30upx 30upx 0;
		color: #333333;
		box-shadow: 0 0 10upx 0 #BBBBBB;
		box-sizing: border-box;

	}

	.arrival-icon {
		width: 200upx;
		height: 20upx;
		margin: -10upx auto 0;
		display: block;
		opacity: 0.6;
	}

	.arrival-time {
		width: 100%;
		text-align: center;
		font-size: 24upx;
		color: #999;
	}

	.trainName {
		font-size: 30upx;
		line-height: 52upx;

	}

	.textAlignLeft {
		text-align: left;
	}

	.textAlignRight {
		text-align: right;
	}

	.train-time {
		font-size: 48upx;
		font-weight: 350;
		line-height: 64upx;
	}

	.departure-time {
		font-size: 24upx;
		color: #666666;
		padding-bottom: 30upx;
	}

	.seat-box {
		width: 750upx;
		padding: 20upx;
		overflow: hidden;
		background-color: #ffffff;
		box-sizing: border-box;
	}

	.seat-list {
		font-size: 24upx;
		line-height: 36upx;
		width: 33%;
		box-sizing: border-box;
		float: left;
		text-align: center;
	}

	.seat-name {
		font-size: 30upx;
		line-height: 40upx;
	}

	.seat-price {
		color: #666666;
	}

	.gray-color {
		color: #aaa;
	}

	.green-color {
		color: #aced6d;
	}

	.flex-box {
		flex: 1;
		padding: 0 10upx;
		text-align: center;
	}

	.ticket-box {
		background-color: #ffffff;
		width: 100%;
		padding: 10upx 20upx;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1upx dotted #ddd;
	}

	.tail-name {
		font-size: 30upx;
		line-height: 48upx;
	}



	.tail-detail {
		display: flex;
		padding-bottom: 20upx;
	}

	.tail-btn {
		background-color: #007AFF !important;
		width: 710upx;
		margin: 40upx auto 0;
	}

	.floatLeft {
		float: left;
	}

	.floatRight {
		float: right;
	}

	.pay-bottom-tab-box {
		width: 100%;
		height: 100upx;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1upx solid #eeeeee;
	}

	.pay-tab-price {
		line-height: 100upx;
		margin-left: 30upx;
	}

	.pay-tab-price-name {
		font-size: 30upx;
		color: #AAAAAA;
		font-weight: 300;
	}

	.pay-tab-price-val {
		font-size: 40upx;
		color: #ff9000;
	}

	.pay-bottom-tab-2 {
		display: flex;
	}

	.pay-bottom-tab-1 .pay-close,
	.pay-bottom-tab-1 .pay-comfrim {
		width: 200upx;
	}

	.pay-bottom-tab-2 .pay-close,
	.pay-bottom-tab-2 .pay-comfrim {
		flex: 1;
	}

	.pay-close {
		line-height: 100upx;
		font-size: 32upx;
		text-align: center;
		color: #999999;
		display: inline-block;
	}

	.pay-comfrim {
		line-height: 100upx;
		height: 100upx;
		background-color: #ff9000;
		color: #ffffff;
		font-size: 32upx;
		text-align: center;
		display: inline-block;
	}

	.uni-countdown__number {
		font-size: 30upx !important;
		padding: 0 !important;
	}

	.uni-countdown__number:first-child {
		display: none;
	}

	.uni-countdown__splitor:nth-child(2) {
		display: none;
	}
</style>
