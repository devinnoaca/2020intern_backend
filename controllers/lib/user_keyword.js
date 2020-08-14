const keywordDAO = require('../../models/user/keywordDAO');

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

const checkKeywordLogic = async (reqDataObject, insertKeywords, deleteKeywords, state) => {
	if (insertKeywords.length === 0) {
		let deleteKeywordResult;
		console.log("insertKeywords 없음");
		if (state === "total") deleteKeywordResult = await keywordDAO.deleteTotalKeywordDAO(reqDataObject);
		else deleteKeywordResult = await keywordDAO.deleteRecommendKeywordDAO(reqDataObject);
		return deleteKeywordResult
  }

  else if (deleteKeywords.length === 0) {
		console.log("delete_data 없음");
		let insertKeywordResult;
		if (state === "total") insertKeywordResult = await keywordDAO.insertRecommendKeywordDAO(reqDataObject);
		else insertKeywordResult = await keywordDAO.insertTotalKeywordDAO(reqDataObject);
		return insertKeywordResult
  }

  else {
		console.log("둘 다 길이가 1 이상");
		let totalKeywordResult;
		if(state === "total") totalKeywordResult = await keywordDAO.updateTotalKeywordDAO(reqDataObject);
		else totalKeywordResult = await keywordDAO.updateRecommendKeywordDAO(reqDataObject);
		return totalKeywordResult;
  }
}






module.exports = {
	userKeywordLogic,
	checkKeywordLogic
	//modifiedKeywordLogic,
}