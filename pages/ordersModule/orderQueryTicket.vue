<template>
	<view class="page">
		<ticket-date :godate.sync='godate' :dateweek.sync='dateweek' />
		<scroll-view class="uni-list" scroll-y="true">
			<train-list :endorse.sync='endorse' :tailData.sync='tailData' :godate.sync='godate' :dateweek.sync='dateweek'></train-list>
		</scroll-view>
	</view>
</template>

<script>
	import TicketDate from "../../components/ticket-date.vue";
	import TrainList from "../../components/train-list.vue";
	export default {
		data() {
			return {
				godate: '',
				dateweek: '',
				startTrain: '',
				endTrain: '',
				tailData: [],
				endorse: true
			};
		},
		components: {
			TicketDate,
			TrainList
		},
		onLoad: function(e) {
			uni.showLoading({
				title: "加载中...."
			});
			this.godate = e.date;
			this.dateweek = e.week;
			this.startTrain = e.startTrain;
			this.endTrain = e.endTrain;
			uni.setNavigationBarTitle({
				title: this.startTrain + '< >' + this.endTrain + '(改签)'
			});
			this.defaulTtrainState=e.trainState;
			this.trainDate=require('../../static/json/city.json')
			if(this.defaulTtrainState==='0'){
				this.defaultTrain=e.startTrainName;
			}else{
				this.defaultTrain=e.endTrainName;
			}
			this.tailData=require('../../static/json/tail.json')
			uni.hideLoading();
			// uni.request({
			// 	url: 'http://39.105.50.203/search/tail.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		this.tailData = res.data;
			// 		uni.hideLoading();
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		onShow:function(e){
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
</style>
