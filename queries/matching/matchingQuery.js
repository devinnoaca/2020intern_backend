exports.insertMatchingQuery = `
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

exports.updateMatchingQuery = `
UPDATE Matching
SET
  response_message = ?,
  state = ?,
  response_time = ?
WHERE ID = ?;`;

exports.insertMatchingKeywordQuery = `
INSERT
INTO matching_keyword(
  keyword_name,
  category_name,
  matching_ID)
VALUES `;
