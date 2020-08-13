
const mentorListLogic = (careerResult, orderMentorNumResult) => {
  console.log(careerResult[0]);
	// let careerList = new Array();
	let libResult = new Array();
	// let start = 0;
	// for (i = 0; i < careerResult[0].length; i++) {
	// 	if (careerResult[0][i].user_USN === start) {
	// 		careerList[start - 1].career.push(careerResult[0][i].content);
	// 	} else {
	// 		careerList.push({
	// 			"usn": start + 1,
	// 			"career": [careerResult[0][i].content],
	// 		})
	// 		start = start + 1;
	// 	}
	// }
  let careerResultObject = {};
  let length = careerResult[0].length;
  let beforeUsn = 0;
  for (let i = 0; i < length; i++) {
    let nextUsn = careerResult[0][i].user_USN;
    if (beforeUsn === nextUsn) {
      careerResultObject[`${nextUsn}`].push(careerResult[0][i].content);
    } else {
      careerResultObject[`${nextUsn}`] = [];
      careerResultObject[`${nextUsn}`].push(careerResult[0][i].content);
      beforeUsn = nextUsn;
    }
  }

	libResult.push({
		mentorList: []
  })
	for (j = 0; j < orderMentorNumResult[0].length; j++) {
    console.log(orderMentorNumResult[0][j].mentor_USN);
		libResult[0].mentorList.push({
			"usn": orderMentorNumResult[0][j].mentor_USN,
			"name": orderMentorNumResult[0][j].name,
			"imageUrl": orderMentorNumResult[0][j].image_url,
			"email": orderMentorNumResult[0][j].email,
			"description": orderMentorNumResult[0][j].description,
			"company": orderMentorNumResult[0][j].company,
			// "career": careerList[orderMentorNumResult[0][j].mentor_USN -1].career
      "career": careerResultObject[`${orderMentorNumResult[0][j].mentor_USN}`]
		})
  }
  console.log(libResult[0]);
	return libResult[0];
}



module.exports = {
  mentorListLogic,
}
