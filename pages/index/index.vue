<template>
	<view>
<!-- <image src="../../static/images/arrival-icon.jpg"></image> -->
		<index-query :startTrainName.sync='startTrainName' :endTrainName.sync='endTrainName' :godate.sync='godate'
		 :dateweek.sync='dateweek'> </index-query>
	</view>
</template>

<script>
	import Weekfun from '../../static/tail.js';
	import IndexQuery from '../../components/index-query.vue'
	export default {
		data() {
			return {
				godate: '',
				startTrainName: "",
				endTrainName: "",
				dateweek: ''
			}
		},
		components: {
			IndexQuery,
		},
		onLoad: function(e) {
			var dayDate = new Date();
			this.godate = dayDate.getFullYear() + "-" + (dayDate.getMonth() + 1) + "-" + dayDate.getDate();
			var defaultDate = this.godate;
			this.dateweek = Weekfun.weekfun(defaultDate);
			this.startTrainName = "北京";
			this.endTrainName = "上海虹桥";
		},
		onShow: function() {
			this.$fire.on('queryDate', result => {
				this.godate = result[0].newdate;
				this.dateweek = result[0].newweek;
			});
			this.$fire.on('selectTrain', result => {
				var trainState = result[0].newtrainstate;
				var transmissionTrain = result[0].newtrain;
				if (trainState === '0') {
					this.startTrainName = transmissionTrain;
				} else {
					this.endTrainName = transmissionTrain;
				}
			});
		}
	}
</script>

<style>

</style>
