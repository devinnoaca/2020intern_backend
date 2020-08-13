const keywordLogic = (categoryResult, keywordResult) => {
	let start = 0;
	let keywordList = new Array();
	let libResult = new Array();

	for (i = 0; i < keywordResult[0].length; i++) {
		console.log("start: " + start + " category: " + keywordResult[0][i].category_ID);
		if (start === keywordResult[0][i].category_ID) {
			keywordList[start].keyword.push({
				"keywordId": keywordResult[0][i].keyword_ID,
				"keywordName": keywordResult[0][i].keyword_name,
				"categoryName": keywordResult[0][i].category_name
			});
		} else {
			if(start + 1 === keywordResult[0][i].category_ID){
				start = keywordResult[0][i].category_ID;
				keywordList[start] = {
					category_ID: start,
					keyword: [{
						"keywordId": keywordResult[0][i].keyword_ID,
						"keywordName": keywordResult[0][i].keyword_name,
						"categoryName": keywordResult[0][i].category_name
					}]
				};		
			}
			else {
				start = start + 1;
				keywordList[start] = {
					category_ID: start,
					keyword: []
				};
				i = i - 1;
			}
		}
	}

	libResult.push({
		allCategory: [],
	})

	// 카테고리 테이블에는 카테고리가 있을 수 있는데 키워드 테이블에 카테고리가 존재 하지 않을 경우 대비해 거꾸로
	let keywordIndex = keywordList.length - 1;
	for (j = categoryResult[0].length - 1; j >= 0; j--) {
		if (categoryResult[0][j].ID !== keywordList[keywordIndex].category_ID) {
			libResult[0].allCategory.push({
				"categoryId": categoryResult[0][j].ID,
				"categoryName": categoryResult[0][j].name,
				"keywordList": []
			})
		} else {
			libResult[0].allCategory.push({
				"categoryId": categoryResult[0][j].ID,
				"categoryName": categoryResult[0][j].name,
				"keywordList": keywordList[keywordIndex].keyword
			})
			keywordIndex = keywordIndex - 1;
		}
	}

	//const reversed = libResult[0].allCategory.reverse();
	return libResult[0].allCategory.reverse();
}

module.exports = {
	keywordLogic,
}
