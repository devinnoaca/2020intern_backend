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

  
  console.log("lib폴더의 mentorList.js의 _career 출력 \n",_career);


	result.push({
		mentorList: []
	})
  console.log("lib폴더의 _order[0]의 길이를 출력 \n",_order[0].length);
	for (j = 0; j < _order[0].length; j++) {
		result[0].mentorList.push({
      "total":_order[0][j].total_List,
			"usn": _order[0][j].mentor_USN,
			"name": _order[0][j].name,
			"imageUrl": _order[0][j].image_url,
			"email": _order[0][j].email,
			"description": _order[0][j].description,
			"company": _order[0][j].company,
			"career": _career[_order[0][j].mentor_USN -1].career
		})
	}

  let total = _order[0][0].total_List;
  console.log("토탈 진짜 찍어 볼거다",parseInt(total/6) + 1);
	return result[0];
}

module.exports = {
	mentorListLogic,
}