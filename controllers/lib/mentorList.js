
const mentorListLogic = (careerResult, orderMentorNumResult) => {
	let careerList = new Array();
	let libResult = new Array();
	let start = 0;
	for (i = 0; i < careerResult[0].length; i++) {
		if (careerResult[0][i].user_USN === start) {
			careerList[start - 1].career.push(careerResult[0][i].content);
		} else {
			careerList.push({
				"usn": start + 1,
				"career": [careerResult[0][i].content],
			})
			start = start + 1;
		}
	}

	libResult.push({
		mentorList: []
  })
  
	for (j = 0; j < orderMentorNumResult[0].length; j++) {
		libResult[0].mentorList.push({
      "searched" : orderMentorNumResult[0][j].searched,
			"usn": orderMentorNumResult[0][j].mentor_USN,
			"name": orderMentorNumResult[0][j].name,
			"imageUrl": orderMentorNumResult[0][j].image_url,
			"email": orderMentorNumResult[0][j].email,
			"description": orderMentorNumResult[0][j].description,
			"company": orderMentorNumResult[0][j].company,
			"career": careerList[orderMentorNumResult[0][j].mentor_USN -1].career
		})
  }
	return libResult[0];
}



module.exports = {
  mentorListLogic,
}
