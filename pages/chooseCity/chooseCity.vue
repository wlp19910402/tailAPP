<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell"  v-for="(item,index) in trainDate" :key="index" >
				<view class="uni-media-list"  v-bind:class="[defaultTrain===item.city? 'activeClass':'']" @tap="selectCity" :data-cityid="item.city" hover-class="uni-list-cell-hover">{{item.city}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				trainDate : [],
				defaultTrain:'',
				defaulTtrainState:''
			};
		},
		onLoad:function(e){
			// uni.showLoading({
			// 	title:"加载中...."
			// })
			
			this.defaulTtrainState=e.trainState;
			this.trainDate=require('../../static/json/city.json')
			if(this.defaulTtrainState==='0'){
				this.defaultTrain=e.startTrainName;
			}else{
				this.defaultTrain=e.endTrainName;
			}
			// console.log(this.trainDate);
			// uni.request({
			// 	url: '../../static/json/state.json',
			// 	method: 'GET',
			// 	data: {},
			// 	success: res => {
			// 		console.log(res)
			// 		// this.news = res.data;
			// 		uni.hideLoading();
			// 	},
			// 	fail: () => {},
			// 	complete: () => {}
			// });
		},
		methods:{
			selectCity:function(e){
				this.$fire.fire('selectTrain',[{'newtrain':e.currentTarget.dataset.cityid,"newtrainstate":this.defaulTtrainState}]);
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.uni-list{background: #fafafa;width: 100%;padding: 30upx;box-sizing: border-box;}
	.uni-list-cell{width: 230upx;text-align: center;display: inline-block;margin: 20upx 0;}
	.uni-media-list{width: 200upx;height: 80upx;background-color: #fff;border: 1upx solid #EEEEEE;text-align: center;line-height: 80upx;display: inline-block;}
	.uni-list-cell-hover{background-color: #EEEEEE;}
	.activeClass{border: 1upx solid #007AFF;}
</style>
