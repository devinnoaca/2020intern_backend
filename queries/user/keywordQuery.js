// total keyword
exports.gettotalkeyword = `
SELECT * 
FROM get_total_keyword 
WHERE utk_USN = ?;`;

exports.updateUser = `
UPDATE User 
SET 
  email = ?, 
  password = ?, 
  user_name = ?, 
  image_url = ?, 
  description = ? 
WHERE USN = ?;`;


// RECOMMEND KEYWORD
exports.getRecommendKeyword = `
SELECT * 
FROM get_recommend_keyword 
WHERE rk_USN = ?;`;

