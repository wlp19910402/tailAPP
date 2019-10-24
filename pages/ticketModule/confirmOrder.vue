<template>
	<view class="page">
		<ticket-date :godate.sync='godate' :dateweek.sync='dateweek' />
		<comfirm-order v-bind:defaultSeatId.sync='defaultSeatId' :orderData.sync='orderData' :seat.sync='seat'></comfirm-order>

		<view class="user" >
			<view class="user-list" v-for="(item,index) in userData" :key="index">
				<view class="floatLeft">
					<text class="user-text">{{item.name}}</text>
					<text class="user-text">{{item.certificateId}}</text>
					
				</view>
				<view class="floatRight">
					<text class="user-text">{{item.adult}}</text>
					<text>二等座</text>
					<checkbox backgroundColor="#666666" color="#666666" style="transform:scale(0.5);"></checkbox>
				</view>
			</view>
		</view>

		<navigator :url="'waitPay?date='+godate+'&week='+dateweek"><button class="tail-btn" type="primary">提交订单</button></navigator>
	</view>
</template>

<script>
	import TicketDate from "../../components/ticket-date.vue";
	import ComfirmOrder from "../../components/comfirm-order.vue";
	export default {
		data() {
			return {
				isActive: true,
				defaultSeatId: 0,
				godate: '',
				dateweek: '',
				orderData: [],
				seat: [],
				startTrain: '',
				endTrain: '',
				userData: []
			}
		},
		components: {
			TicketDate,
			ComfirmOrder
		},
		computed: {

		},
		onLoad: function(e) {
			this.godate = e.date;
			this.dateweek = e.week;
			this.startTrain = e.startTrain;
			this.endTrain = e.endTrain;
			
			this.userData=require('../../static/json/peopleData.json')
			uni.hideLoading();
			
			// uni.request({
			// 	url: 'http://39.105.50.203/search/peopleData.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		this.userData = res.data;
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
			this.orderData=require('../../static/json/order.json')
			this.seat = this.orderData[0].seat;
			var seatLength = this.seat.length
			console.log("this.seat" + this.seat + "     " + seatLength)
			for (var i = 0; i < seatLength; i++) {
				if (this.seat[i].number) {
					this.defaultSeatId = this.seat[i].seatId;
					console.log("00" + this.defaultSeatId)
					break;
				}
			}
			uni.hideLoading();
			// uni.request({
			// 	url: 'http://39.105.50.203/search/order.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		this.orderData = res.data;
			// 		this.seat = this.orderData[0].seat;
			// 		var seatLength = this.seat.length
			// 		console.log("this.seat" + this.seat + "     " + seatLength)
			// 		for (var i = 0; i < seatLength; i++) {
			// 			if (this.seat[i].number) {
			// 				this.defaultSeatId = this.seat[i].seatId;
			// 				console.log("00" + this.defaultSeatId)
			// 				break;
			// 			}
			// 		}
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		onShow: function() {
			this.$fire.on('queryDate', result => {
				this.godate = result[0].newdate;
				this.dateweek = result[0].newweek;
			});

		}
	}
</script>

<style>
	@import '../../common/uni.css';

	.user {
		width: 100%;
		padding: 0 30upx;
		background-color: #FFFFFF;
		font-size: 26upx;
		
		overflow: hidden;
		margin-top: 20upx;
		box-sizing: border-box;
	}

	.user-list {
		clear: both;
		border-bottom: 2upx solid #EEEEEE;
		overflow: hidden;
		height: 80upx;
		vertical-align: middle;
		width: 100%;
	}

	.user-list view {
		vertical-align: middle;
	}

	.user-list .user-text {display: inline-block;margin-right: 20upx;line-height: 80upx;}

	.page {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background-color: #F8F8F8;
		padding-top: 70upx;
		overflow: hidden;
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

	.flex-box {
		flex: 1;
		padding: 0 10upx;
		text-align: center;
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
		width: 200upx;
		height: 20upx;
		margin: -10upx auto 0;
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
		background-color: #ffffff;
		box-sizing: border-box;
	}

	.seat-list {
		font-size: 24upx;
		line-height: 32upx;
		width: 33%;
		box-sizing: border-box;
		float: left;
		text-align: center;
		padding: 12upx 0;
	}

	.seat-list-active {
		background-color: #007AFF;
		color: #ffffff !important;
		border-radius: 16upx;
	}

	.seat-list-active .seat-price {
		color: #ffffff;
	}

	.seat-name {
		font-size: 26upx;
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

	.tail-btn {
		background-color: #007AFF !important;
		width: 710upx;
		margin: 40upx auto 0;
	}

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

	.floatLeft {
		float: left;
	}

	.floatRight {
		float: right;
	}
</style>
