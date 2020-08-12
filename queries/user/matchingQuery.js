exports.getMenteeMatchingListQuery =`
SELECT * FROM get_matching_mentee
WHERE (
	mentor_USN = ?
	AND
	matching_state = ?)
ORDER BY matching_ID ASC
;`

exports.getMentorMatchingListQuery =`
SELECT * FROM get_matching_mentor
WHERE (
	mentee_USN = ?
	AND
	matching_state = ?)
ORDER BY matching_ID ASC
;`

