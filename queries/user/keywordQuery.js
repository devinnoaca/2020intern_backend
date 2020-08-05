// total keyword
exports.gettotalkeyword = `
SELECT * 
FROM get_total_keyword 
WHERE user_USN = ?;`;

exports.insertTotalKeyword = `
INSERT User_total_keyword 
SET 
  email = ?, 
  password = ?, 
  user_name = ?, 
  image_url = ?, 
  description = ? 
WHERE user_USN = ?;`;

// RECOMMEND KEYWORD
exports.getRecommendKeyword = `
SELECT * 
FROM get_recommend_keyword 
WHERE mentee_USN = ?;`;

