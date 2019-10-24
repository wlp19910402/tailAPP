<template>
	<view>
		<wait-pay :orderData.sync='orderData' :endorse.sync='endorse' :waitText.sync='waitText' :godate.sync='godate' :dateweek.sync='dateweek'></wait-pay>
	</view>
</template>

<script>
	import WaitPay from "../../components/wait-pay.vue";
	import Weekfun from '../../static/tail.js';
	export default {
		data() {
			return {
				godate: '',
				dateweek: '',
				orderData: [],
				waitText:1,
				endorse:true
			}
		},
		components: {
			WaitPay
		},
		methods: {},
		onLoad: function() {
			this.orderData=require('../../static/json/endorseData2.json')
			 this.godate= this.orderData[0].arrivalDate;
					this.dateweek = Weekfun.weekfun(this.godate);
			// uni.request({
			// 	url: 'http://39.105.50.203/search/orderDetail.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		this.orderData = res.data;
			// 		 this.godate= this.orderData[0].arrivalDate;
			// 		this.dateweek = Weekfun.weekfun(this.godate);
			// 		console.log(this.godate)
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
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
</style>
