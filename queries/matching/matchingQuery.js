exports.insertMatching = `
INSERT 
INTO Matching(
  mentor_USN, 
  mentee_USN, 
  request_time, 
  response_time, 
  request_message, 
  response_message
  )
VALUES (?, ?, ?, ?, ?, ?);`;

exports.updateMatching = `
UPDATE Matching 
SET 
  state = ?, 
  is_checked = ?
WHERE ID = ?;`;

exports.insertMatchingKeyword = `
INSERT 
INTO matching_keyword(
  keyword_name, 
  category_name, 
  matching_ID) 
VALUES `;