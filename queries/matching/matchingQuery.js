exports.insertMatching = `
INSERT 
INTO Matching(
  mentor_USN, 
  mentee_USN, 
  request_time, 
  response_time, 
  state, 
  request_message, 
  is_checked, 
  response_message
  )
VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;

exports.updateMatching = `
UPDATE Matching 
SET 
  state = ?, 
  is_checked = ?
WHERE ID = ?;`;

exports.insertMatchingKeyword = `
INSERT 
INTO Matching_keyword(
  keyword_name, 
  matching_ID, 
  category_name
  ) 
VALUES (?, ?, ?);`;