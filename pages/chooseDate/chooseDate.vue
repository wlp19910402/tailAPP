<template>
	<view>
		<calendar :date="date" :lunar="true" :start-date="startDate" :end-date="endDate" @to-click="toClick" />
	</view>
</template>

<script>
	import calendar from "@/components/uni-calendar/uni-calendar.vue"
	import Weekfun from '../../static/tail.js';
	export default {
		components: {
			calendar
		},
		data() {
			return {
				date: '',
				startDate: '2019-05-2',
				endDate: '2019-05-29'
			}
		},
		methods: {
			toClick(e) {
				this.$fire.fire('queryDate',[{'newdate':e.fulldate,'newweek':Weekfun.weekfun(e.fulldate)}]);
				uni.navigateBack();
			}
		},
		onLoad: function(e) {
			var dayDate=new Date();
			//给日期起始值赋值
			this.startDate=dayDate.getFullYear()+"-"+(dayDate.getMonth()+1)+"-"+dayDate.getDate();
			//给日期终止值赋值
			var dayDateEnd=new Date(dayDate);
			dayDateEnd.setDate(dayDateEnd.getDate() + 30);
			this.endDate=dayDateEnd.getFullYear()+"-"+(dayDateEnd.getMonth()+1)+"-"+dayDateEnd.getDate();
			//给当前日期赋值
			this.date=e.defaultDate;
		},
		onShow: function() {
		}
	}
</script>

<style>
	.taph {
		position: fixed;
		width: 200upx;
		height: 200upx;
		color: #ffffff;
		background: red;
	}
</style>
