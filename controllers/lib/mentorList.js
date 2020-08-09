const { ConsoleTransportOptions } = require("winston/lib/winston/transports");

const mentorListLogic = (_careerList, _order) => {
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
	for (j = 0; j < _order[0].length; j++) {
		result[0].mentorList.push({
			"usn": _order[0][j].mentor_USN,
			"name": _order[0][j].name,
			"imageUrl": _order[0][j].image_url,
			"email": _order[0][j].email,
			"description": _order[0][j].description,
			"company": _order[0][j].company,
			"career": _career[_order[0][j].mentor_USN -1].career
		})
	}

	return result[0];
}

module.exports = {
	mentorListLogic,
}