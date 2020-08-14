const getFormatDate = (date) => {
	let year = date.getFullYear();              //yyyy
	let month = (1 + date.getMonth());          //M
	let day = date.getDate();										//d
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getMinutes();  

	month = month >= 10 ? month : `0` + month;  //month 두자리로 저장                  
	day = day >= 10 ? day : `0` + day;          //day 두자리로 저장
	hour = hour >= 10 ? hour : `0` + hour;
	minute = minute >= 10 ? minute : `0` + minute;
	second = second >= 10 ? second : `0` + second;

	return  year + `-` + month + `-` + day + ` ` + hour + `:` + minute + `:` + second;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
}

module.exports = {
	getFormatDate,
}