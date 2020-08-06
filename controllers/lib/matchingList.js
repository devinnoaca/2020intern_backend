const createMatchingList = (userType, state, matchingData) => {
  let result = {};
  let matchingList = [];
  for (let i = 0; i < matchingData.length; i++) {

    // if matching_ID of the previous element and matching_ID of the current element are the same
    if ((i > 0) && (matchingData[i].matching_ID === matchingData[i - 1].matching_ID)) {
      let matchingKeywordListElement = {};
      matchingKeywordListElement.matchingId = matchingData[i].matching_ID;
      matchingKeywordListElement.keywordName = matchingData[i].matching_keyword_name;
      matchingKeywordListElement.categoryName = matchingData[i].matching_category_name;

      matchingList[matchingList.length - 1].keywordList.push(matchingKeywordListElement);
    } else {
      let matchingListElement = {};
      matchingListElement.matchingId = matchingData[i].matching_ID;
      matchingListElement.oppositeUSN = matchingData[i].USN;
      matchingListElement.USN = userType ? matchingData[i].mentor_USN : matchingData[i].mentee_USN;
      // userType ? matchingListElement.menteeName = matchingData[i].user_name : matchingListElement.mentorName = matchingData[i].user_name;
      matchingListElement.oppositeName = userType ? matchingData[i].user_name : matchingData[i].user_name;
      matchingListElement.timeReq = matchingData[i].matching_request_time;
      matchingListElement.timeRes = matchingData[i].matching_response_time;
      matchingListElement.state = matchingData[i].matching_state;
      matchingListElement.reqReason = matchingData[i].request_message;
      matchingListElement.rejectMessage = matchingData[i].response_message;
      matchingListElement.isChecked = matchingData[i].is_checked;

      let matchingKeywordList = [], matchingKeywordListElement = {};
      matchingKeywordListElement.matchingId = matchingData[i].matching_ID;
      matchingKeywordListElement.keywordName = matchingData[i].matching_keyword_name;
      matchingKeywordListElement.categoryName = matchingData[i].matching_category_name;
      matchingKeywordList.push(matchingKeywordListElement);
      matchingListElement.keywordList = matchingKeywordList;

      matchingList.push(matchingListElement);
    }
  }
  switch (state) {
    case 0:
      result.waitMatchingList = matchingList;
      break;
    case 1:
      result.acceptMatchingList = matchingList;
      break;
    case 2:
      result.refuseMatchingList = matchingList;
      break;
    default:
      throw error;
  }
  return result;
}

module.exports = {
  createMatchingList,
}
