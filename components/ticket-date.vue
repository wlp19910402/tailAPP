<template>
	<view class="query-content">
		<view class="query-time-box">
			<view class="time-box" @tap="chooseDate">
				<text class="">{{godate}}&nbsp;&nbsp;{{dateweek}}</text>
				<image class="time-icon" src="../static/images/date-icon.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
            dateweek: {
                type: String,
                default: 'hello'
            },
            godate: {
                type: String,
                default: ''
            }
        },
		methods: {
			chooseDate(e) {
				uni.navigateTo({
					url: '../chooseDate/chooseDate?defaultDate=' + this.godate
				})
			}
		}
	}
</script>

<style>
	.query-content {
		background: #007AFF;
		position: absolute;
		left: 0;
		top: 0;
		height: 70upx;
		width: 100%;
	}

	.time-box {
		background-color: #FFFFFF;
		width: 340upx;
		text-align: center;
		line-height: 60upx;
		margin: 0 auto;
		height: 60upx;
		border: 1upx solid #eee;
		border-radius: 6upx;
		box-sizing: border-box;
		font-size: 32upx;

	}

	.time-box .time-icon {
		width: 50upx;
		height: 50upx;
		vertical-align: middle;
		margin-top: -5upx;
	}

	.query-time-box {
		padding-bottom: 20upx;
	}
</style>
