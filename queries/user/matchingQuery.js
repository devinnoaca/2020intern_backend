//exports.getMatchingList = `SELECT * FROM Matching A
//    JOIN Matching_keyword B
//    ON A.matching_ID = B.mk_matching_ID
//    WHERE (mentor_USN = ? OR mentee_USN = ?)
//    AND A.matching_state = ?
//    ORDER BY A.matching_ID ASC
//    ;`;
exports.getMentorMatchingList = 
`SELECT * FROM get_matching_mentee
WHERE (
	mentor_USN = ? 
	AND 
	matching_state = ?)
ORDER BY matching_ID ASC
;`

exports.getMenteeMatchingList = 
`SELECT * FROM get_matching_mentor
WHERE (
	mentee_USN = ? 
	AND 
	matching_state = ?)
ORDER BY matching_ID ASC
;`
