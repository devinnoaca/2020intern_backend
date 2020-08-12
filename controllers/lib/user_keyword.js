const insertKeyword = (result) => {
	let keywordList = new Array();

	for (i = 0; i < result[0].length; i++) {
		keywordList.push({
			"keywordId": result[0][i].keyword_ID,
			"keywordName": result[0][i].keyword_name,
			"categoryName": result[0][i].category_name,
		});
	}
	return keywordList;
}

const userKeywordLogic = (usn, totalResult, recommendResult) => {
	let totalkeywordList = insertKeyword(totalResult);
	let recommendkeywordList = insertKeyword(recommendResult);

	let keywordResult = {
		"usn": usn,
		"allKeyword": totalkeywordList,
		"recommendKeyword": recommendkeywordList
	}
	return keywordResult;
}

module.exports = {
	userKeywordLogic,
}
