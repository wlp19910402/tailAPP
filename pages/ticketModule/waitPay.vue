<template>
	<view>
		<wait-pay :orderData.sync='orderData' :waitText.sync='waitText' :godate.sync='godate' :dateweek.sync='dateweek'></wait-pay>

	</view>
</template>

<script>
	import WaitPay from "../../components/wait-pay.vue";
	export default {
		data() {
			return {
				godate: '',
				dateweek: '',
				orderData: [],
				waitText: 0
			}
		},
		components: {
			WaitPay
		},
		methods: {},
		onLoad: function(e) {
			this.godate = e.date;
			this.dateweek = e.week;
			this.orderData=require('../../static/json/order.json')
			// uni.request({
			// 	url: 'http://39.105.50.203/search/order.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		this.orderData = res.data;
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

	.uni-countdown__number {
		font-size: 30upx !important;
		padding: 0 !important;
	}
	.uni-countdown__number:first-child {
		display: none;
	}

	.uni-countdown__splitor:nth-child(2){
		display: none ;
	}
</style>
