<template>
	<index-query :endorse.sync='endorse' :startTrainName.sync='startTrainName' :endTrainName.sync='endTrainName'
	 :godate.sync='godate' :dateweek.sync='dateweek'></index-query>
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
				dateweek: '',
				endorse: true
			}
		},
		components: {
			IndexQuery
		},
		onLoad: function(e) {
			this.godate = e.godate;
			this.dateweek = e.dateweek;
			this.startTrainName = e.startTrainName;
			this.endTrainName = e.endTrainName;
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

</style>
