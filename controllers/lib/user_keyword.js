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

// const modifiedKeywordLogic = (keyword ,insertKeywords, deleteKeywords) => {
// 	if (insertKeywords.length === 0) {
// 		console.log("insertKeywords 없음");
// 		let deleteKeywordBindValue = [usn, deleteKeywords];
// 		try {
// 			let deleteKeywordResult = await keywordDAO.deleteTotalKeywordDAO(deleteKeywordBindValue);
// 			return res.status(200).send(deleteKeywordResult);
// 			//return res.render('career', {usn: usn, career: [...careers]});
// 		} catch (err) {
// 			return res.status(501).json(err);
// 		}
// 	}

// 	else if (deleteKeywords.length === 0) {
// 		console.log("delete_data 없음")
// 		let insertKeywordBindValue = [usn, insertKeywords];
// 		try {
// 			let insertKeywordResult = await keywordDAO.insertTotalKeywordDAO(insertKeywordBindValue);
// 			return res.status(200).send(insertKeywordResult);
// 			//return res.render('career', {usn: usn, career: [...careers]});
// 		} catch (err) {
// 			return res.status(501).json(err);
// 		}
// 	}

// 	else {
// 		try {
// 			console.log("둘 다 길이가 1 이상");
// 			let totalKeywordBindValue = [usn, keyword];
// 			let totalKeywordResult = await keywordDAO.updateTotalKeywordDAO(totalKeywordBindValue);
// 			//console.log(_keyword);
// 			return res.status(200).send(totalKeywordResult);
// 			//return res.render('career', {usn: usn, career: [...careers]});
// 		} catch (err) {
// 			return res.status(501).json(err);
// 		}
// 	}
// }






module.exports = {
	userKeywordLogic,
	//modifiedKeywordLogic,
}