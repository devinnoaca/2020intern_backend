const matching = require('../../models/user/mathcingDAO');
const logger = require('../../logger');

exports.getMatchingLists = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    let state = parseInt(req.params.state, 10);
    if(Number.isNaN(usn)){
        return res.status(200).json({ statusCode: 500, message: '잘못된 매개변수 타입' });
    }

    try {
        let matching_data = await matching.getMatchingList(usn, state);

      let result = {};

      if (state === 1) { // acceptMatchingList
        let acceptMatchingList = [];
        for (let i = 0; i < matching_data[0].length; i++) {

          // if matching_ID of the previous element and matching_ID of the current element are the same
          if ((i > 0) && (matching_data[0][i].matching_ID === matching_data[0][i - 1].matching_ID)) {
            let matchingKeywordListElement = {};
            matchingKeywordListElement.matchingId = matching_data[0][i].mk_matching_ID;
            matchingKeywordListElement.keywordName = matching_data[0][i].matching_keyword_name;
            matchingKeywordListElement.categoryName = matching_data[0][i].matching_category_name;

            acceptMatchingList[acceptMatchingList.length - 1].keywordList.push(matchingKeywordListElement);
          } else {
            let acceptMatchingListElement = {};
            acceptMatchingListElement.matchingId = matching_data[0][i].matching_ID;
            acceptMatchingListElement.mentor_USN = matching_data[0][i].mentor_USN;
            acceptMatchingListElement.mentee_USN = matching_data[0][i].mentee_USN;
            acceptMatchingListElement.time_req = matching_data[0][i].matching_request_time;
            acceptMatchingListElement.time_res = matching_data[0][i].matching_response_time;
            acceptMatchingListElement.state = matching_data[0][i].matching_state;
            acceptMatchingListElement.req_reason = matching_data[0][i].request_reason;
            acceptMatchingListElement.reject_message = matching_data[0][i].reject_message;
            acceptMatchingListElement.isChecked = matching_data[0][i].is_checked;

            let matchingKeywordList = [], matchingKeywordListElement = {};
            matchingKeywordListElement.matchingId = matching_data[0][i].mk_matching_ID;
            matchingKeywordListElement.keywordName = matching_data[0][i].matching_keyword_name;
            matchingKeywordListElement.categoryName = matching_data[0][i].matching_category_name;
            matchingKeywordList.push(matchingKeywordListElement);
            acceptMatchingListElement.keywordList = matchingKeywordList;

            acceptMatchingList.push(acceptMatchingListElement);
            console.log(acceptMatchingList);
          }
        }
        result.acceptMatchingList = acceptMatchingList;
      }
      console.log(matching_data[0]);
        return res.status(200).send(result);
        // return res.render('user', {user: users[0]});
        // res.json(users[0][0]);
    } catch (err) {
        return res.status(500).json(err)
    }
}
