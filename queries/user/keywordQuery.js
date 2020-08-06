// total keyword
exports.gettotalkeyword = `
SELECT *
FROM get_total_keyword
WHERE utk_USN = ?;`;

exports.insertTotalKeyword = `
INSERT INTO User_total_keyword (
  user_USN, 
  keyword_ID
  )
VALUES`;

// RECOMMEND KEYWORD
exports.getRecommendKeyword = `
SELECT *
FROM get_recommend_keyword
WHERE rk_USN = ?;`;

