exports.getMatchingList = `SELECT * FROM Matching A 
    RIGHT OUTER JOIN Matching_keyword B 
    ON A.matching_ID = B.mk_matching_ID
    WHERE (mentor_USN = ? OR mentee_USN = ?) 
    AND A.matching_state = ?
    ;`;
