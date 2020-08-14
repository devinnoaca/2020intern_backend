exports.getMenteeMatchingListQuery =`
SELECT
  USN,
  user_name,
  matching_ID,
  request_message,
  response_message,
  mentor_USN,
  matching_state,
  is_checked,
  matching_request_time,
  matching_response_time,
  matching_keyword_name,
  matching_category_name
FROM get_matching_mentee
WHERE (
	mentor_USN = ?
	AND
	matching_state = ?)
ORDER BY matching_ID ASC
;`

exports.getMentorMatchingListQuery =`
SELECT
  USN,
  user_name,
  matching_ID,
  request_message,
  response_message,
  mentor_USN,
  matching_state,
  is_checked,
  matching_request_time,
  matching_response_time,
  matching_keyword_name,
  matching_category_name
FROM get_matching_mentor
WHERE (
	mentee_USN = ?
	AND
	matching_state = ?)
ORDER BY matching_ID ASC
;`

