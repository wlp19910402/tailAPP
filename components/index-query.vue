<template>
	<view class="content">
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item>
							<image src="../static/images/banner-1.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image src="../static/images/banner-2.jpg"></image>
						</swiper-item>
						<swiper-item>
							<image src="../static/images/banner-3.jpg"> </image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="query-ticket-box">
			<view class="query-ticket-state">
				<view class="state-name" :class="endorse?'state-name-gray':''" @tap="!endorse?startTrain:''">{{startTrainName}}</view>
				<image class="state-icon" src="../static/images/state-icon.png"></image>
				<view class="state-name" :class="endorse?'state-name-gray':''" @tap="!endorse?endTrain:''">{{endTrainName}}</view>
			</view>
			<view class="query-ticket-state">
				<view class="time-name">出发日期</view>
				<view class="go-date" v-if="!endorse" @tap="chooseDate">{{godate}}</view>
				<view class="go-date" v-if="endorse" @tap="chooseDateEndorse">{{godate}}</view>
				<view class="time-week">{{dateweek}}</view>
			</view>
			<view class="query-ticket-state">
				<checkbox-group class="checkbox-box">
					<label>
						只看高铁/动车
						<checkbox value="cb" checked="true" color="#007AFF" style="transform:scale(0.6)" />
					</label>
					<label>
						学生票
						<checkbox value="cb" color="#007AFF" style="transform:scale(0.6)" />
					</label>
				</checkbox-group>
			</view>
			<navigator v-if="!endorse" :url="'../ticketModule/queryTicket?date='+godate+'&week='+dateweek+'&startTrain='+startTrainName+'&endTrain='+endTrainName"><button
				 class="tail-btn" type="primary">查询车票</button></navigator>
			<view v-if="endorse" @tap="endorseNavigator" :url="'orderQueryTicket?date='+godate+'&week='+dateweek+'&startTrain='+startTrainName+'&endTrain='+endTrainName"><button
				 class="tail-btn" type="primary">查询车票</button></view>
		</view>
		<view class="ad-image-box">
			<image src="../static/images/banner-1.jpg"></image>
			<image src="../static/images/banner-2.jpg"></image>
			<image src="../static/images/banner-3.jpg"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			startTrainName: {
				type: "",
				default: ""
			},
			endTrainName: {
				type: "",
				default: ""
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
			} //endorse是区分改签和查询页面的
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			startTrain(e) {
				uni.navigateTo({
					url: '../chooseCity/chooseCity?startTrainName=' + this.startTrainName + "&trainState=0"
				})
			},
			endTrain(e) {
				uni.navigateTo({
					url: '../chooseCity/chooseCity?endTrainName=' + this.endTrainName + "&trainState=1"
				})
			},
			chooseDate(e) {
				uni.navigateTo({
					url: '../chooseDate/chooseDate?defaultDate=' + this.godate
				})
			},
			chooseDateEndorse(e) {
				uni.navigateTo({
					url: '../chooseDate/chooseDate?defaultDate=' + this.godate
				})
			},
			
			endorseNavigator(){
				uni.redirectTo({
					url:'orderQueryTicket?date='+this.godate+'&week='+this.dateweek+'&startTrain='+this.startTrainName+'&endTrain='+this.endTrainName
				})
			}
			
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.swiper {
		height: 350upx;
		width: 750upx;
	}

	.swiper image {
		height: 350upx;
		width: 750upx;
	}

	.query-ticket-box {
		width: 690upx;
		padding: 0 30upx 20upx;
		background-color: #FFFFFF;
		box-shadow: 0 0 8upx 0 #999;
		box-sizing: border-box;
		position: absolute;
		left: 30upx;
		top: 260upx;
		border-radius: 20upx;
	}

	.query-ticket-state {
		width: 100%;
		display: flex;
		height: 80upx;
		border-top: 1upx solid #eee;
		padding: 20upx 0;
	}

	.query-ticket-state:first-child {
		border-top: none;
	}

	.state-icon {
		width: 80upx;
		height: 80upx;
		display: block;
	}

	.state-name {
		flex: 1;
		line-height: 80upx;
		font-size: 36upx;
	}
	.state-name-gray{color: #999999;}
	.time-name {
		font-size: 20upx;
		padding: 0 20upx;
		line-height: 80upx;
		color: #999;
		vertical-align: bottom;
	}

	.go-date {
		font-size: 36upx;
		line-height: 80upx;
		vertical-align: bottom;
	}

	.time-week {
		font-size: 20upx;
		color: #888;
		line-height: 80upx;
		vertical-align: bottom;
		padding-left: 20upx;
	}

	.tail-btn {
		background-color: #007AFF !important;
	}

	.checkbox-box {
		display: flex;
		font-size: 28upx;
		color: #333;
		width: 100%;
		line-height: 80upx;
	}

	.checkbox-box label {
		flex: 1;
	}

	.ad-image-box {
		width: 690upx;
		position: absolute;
		left: 30upx;
		top: 760upx;
		margin-bottom: 20upx;
	}

	.ad-image-box image {
		box-sizing: border-box;
		padding: 20upx;
		border: 1upx solid #eee;
		height: 200upx;
		width: 100%;
		border-radius: 10upx;
		margin: 10upx 0;
	}
</style>
