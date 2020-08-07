const insertKeyword = (model) => {
	let array = new Array();

	for (i = 0; i < model[0].length; i++) {
		array.push({
			"keywordId": model[0][i].keyword_ID,
			"categoryName": model[0][i].category_name,
			"keywordName": model[0][i].keyword_name
		});
	}	
	return array;
}

const userKeywordLogic = (usn, total, recommend) => {
	let total_result = insertKeyword(total);
	let recommend_result = insertKeyword(recommend);

	let _keyword = {
		"usn": usn,
		"allKeyword": total_result,
		"recommendKeyword": recommend_result
	}
	return _keyword;
}

module.exports = {
	userKeywordLogic,
}