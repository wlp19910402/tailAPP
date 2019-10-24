<template>
	<view>
		<view class="ticket-box">
			<view class="flex-box">
				<view class="tail-detail">
					<view class="tail-train-type">{{orderData[0].startTrainState}}</view>
					<view class="trainName">
						<view>{{orderData[0].startTrainName}}</view>
						<view class="train-time">{{orderData[0].departureTime}}</view>
					</view>
				</view>
			</view>
			<view class="flex-box">
				<view class="tail-name">{{orderData[0].tailName}}</view>
				<image class="arrival-icon" src="../../../static/images/ticket-icon.jpg"></image>
				<view class="arrival-time">{{orderData[0].timeLength}}</view>
			</view>
			<view class="flex-box">
				<view class="tail-detail">
					<view class="tail-train-type">{{orderData[0].endTrainState}}</view>
					<view class="trainName">
						<view>{{orderData[0].endTrainName}}</view>
						<view class="train-time">{{orderData[0].arrivalTime}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="seat-box">
			<view class="seat-list" @click="seatSelect(item.number,item.seatId)" :class="item.seatId===(!whentherSeat?defaultSeatId:dSeatId) ? 'seat-list-active':''"
			 v-for="(item,eq) in orderData[0].seat" :key="eq">
				<view class="seat-name" :class="[item.number>0? '':'gray-color']">{{item.name}}</view>
				<view class="seat-num" :class="item.number>0?  '':'gray-color'">
					<text v-if="item.number>0&&item.number<50">{{item.number}}张</text>
					<text v-if="item.number >=50 ">有</text>
					<text v-if="item.number===0">无</text>
				</view>
				<view class="seat-price" :class="item.number>0?  '':'gray-color' ">¥{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			orderData: {
				type: Array,
				default: function() {
					return []
				}
			},
			defaultSeatId: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				dSeatId:0,
				whentherSeat:false
			}
		},
		methods: {
			seatSelect: function(num, id) {
				this.whentherSeat=true
				if (num > 0) {
					this.dSeatId = id;
					this.defaultSeatId = id;
				}
			}
		}
	}
</script>

<style>
</style>
