<template>
	<view class="page">
		<ticket-date :godate.sync='godate' :dateweek.sync='dateweek'/>
		<comfirm-order v-bind:defaultSeatId.sync='defaultSeatId' :orderData.sync='orderData'></comfirm-order>
		<view @tap="confirmEndorse"><button
			 class="tail-btn" type="primary">提交订单</button></view>
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
				seat: []
			}
		},
		components: {
			TicketDate,
			ComfirmOrder
		},
		methods:{
			confirmEndorse(){
				uni.redirectTo({
					url:'waitPayEndorse?date='+this.godate+'&week='+this.dateweek
				})
			}
		},
		onLoad: function(e) {
			this.godate = e.date;
			this.dateweek = e.week;
			
			
			this.orderData=require('../../static/json/order.json')
			this.orderData = res.data;
			this.seat = this.orderData[0].seat;
			var seatLength = this.seat.length
			console.log("this.seat"+this.seat+"     "+seatLength)
			for (var i = 0; i < seatLength; i++) {
				if (this.seat[i].number) {
					this.defaultSeatId = this.seat[i].seatId;
					console.log("00"+this.defaultSeatId)
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
			// 		console.log("this.seat"+this.seat+"     "+seatLength)
			// 		for (var i = 0; i < seatLength; i++) {
			// 			if (this.seat[i].number) {
			// 				this.defaultSeatId = this.seat[i].seatId;
			// 				console.log("00"+this.defaultSeatId)
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
</style>
