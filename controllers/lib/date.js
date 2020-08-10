function getFormatDate(date){
	var year = date.getFullYear();              //yyyy
	var month = (1 + date.getMonth());          //M
	month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
	var day = date.getDate();                   //d
	day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
	var hour = date.getHours();
	hour = hour >= 10 ? hour : '0' + hour;
	var minute = date.getMinutes();
	minute = minute >= 10 ? minute : '0' + minute;
	var second = date.getMinutes();
	second = second >= 10 ? second : '0' + second;
	return  year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

module.exports = {
	getFormatDate,
}