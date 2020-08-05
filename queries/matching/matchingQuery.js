exports.insertMatching = `
INSERT 
INTO Matching(
  matching_ID, 
  mentor_USN, 
  mentee_USN, 
  matching_request_time, 
  matching_response_time, 
  matching_state, 
  request_reason, 
  is_checked, 
  result_message
  )
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;

exports.updateMatching = `
UPDATE Matching 
SET 
  matching_state = ?, 
  is_checked = ?
WHERE matching_ID = ?;`;

exports.insertMatchingKeyword = `
INSERT 
INTO Matching_keyword(
  matching_keyword_ID, 
  matching_keyword_name, 
  mk_matching_ID, 
  matching_category_name
  ) 
VALUES (?, ?, ?, ?);`;