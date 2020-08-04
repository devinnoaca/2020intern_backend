exports.insertMatching = `INSERT INTO Matching(matching_ID, mentor_USN, mentee_USN, matching_request_time, matching_response_time, matching_state, request_reason, is_checked, reject_message)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;
