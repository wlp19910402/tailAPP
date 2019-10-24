/**/

function weekfun(e) {
	var year = e.split('-')[0];
	var c = parseInt(year.substr(0, 2));
	var y = parseInt(year.substr(2, 4));
	var m = parseInt(e.split('-')[1]);
	var d = parseInt(e.split('-')[2]);
	if (m <= 2) {
		m = m + 12;
	}
	var w = (parseInt(c / 4) - 2 * c + y + parseInt(y / 4) + parseInt(13 * (m + 1) / 5) + d - 1) % 7;
	var week = '';
	if (w === 0) {
		week = '周日';
	} else if (w === 1) {
		week = '周一'
	} else if (w === 2) {
		week = '周二'
	} else if (w === 3) {
		week = '周三'
	} else if (w === 4) {
		week = '周四'
	} else if (w === 5) {
		week = '周五'
	} else if (w === 6) {
		week = '周六'
	}
	return week;
}
export default{
	weekfun
}