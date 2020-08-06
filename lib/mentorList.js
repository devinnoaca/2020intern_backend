const mentorListLogic = (_mentorList, _careerList) => {
	let _career = new Array();
	let result = new Array();
	let start = 0;

	for (i = 0; i < _careerList[0].length; i++) {
		if (_careerList[0][i].user_USN === start) {
			_career[start - 1].career.push(_careerList[0][i].content);
		} else {
			_career.push({
				"usn": start + 1,
				"career": [_careerList[0][i].content],
			})
			start = start + 1;
		}
	}

	result.push({
		mentorList: []
	})

	for (j = 0; j < _mentorList[0].length; j++) {
		if (_mentorList[0][j].mentor_USN === _career[j].usn) {
			result[0].mentorList.push({
				"usn": _mentorList[0][j].mentor_USN,
				"name": _mentorList[0][j].user_name,
				"imageUrl": _mentorList[0][j].image_url,
				"email": _mentorList[0][j].description,
				"description": _mentorList[0][j].description,
				"company": _mentorList[0][j].company,
				"career": _career[j].career,
			})
		}
	}
	return result[0];
}

module.exports = {
	mentorListLogic,
}