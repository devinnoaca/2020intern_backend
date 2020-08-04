// total keyword
exports.gettotalkeyword = `select * from get_total_keyword where utk_USN = ?;`;

exports.updateUser = `UPDATE User SET
        email = ?, password = ?, userName = ?, image_url = ?, description = ? WHERE USN = ?;`;


// RECOMMEND KEYWORD
exports.getRecommendKeyword = `SELECT * FROM get_recommend_keyword WHERE rk_USN = ?;`;

