// TOTAL KEYWORD
exports.getTotalKeyword = `SELECT * FROM TOTAL_KEYWORD WHERE usn = ?;`;

exports.updateUser = `UPDATE USER SET 
        email = ?, password = ?, name = ?, image = ?, description = ? WHERE usn = ?;`;


// RECOMMEND KEYWORD
exports.getRecommendKeyword = `SELECT * FROM RECOMMEND_KEYWORD WHERE usn = ?;`


// ALL KEYWORD
exports.getKeyword = `SELECT * FROM TOTAL_KEYWORD A 
        LEFT OUTER JOIN RECOMMEND_KEYWORD B ON A.usn = B.usn WHERE B.usn = ?;`

