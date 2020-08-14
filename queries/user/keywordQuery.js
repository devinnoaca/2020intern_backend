// total keyword
exports.gettotalkeywordQuery = `
SELECT
  category_name,
  keyword_name,
  keyword_ID,
  user_USN,
  category_ID
FROM get_total_keyword
WHERE user_USN = ?;`;

exports.insertTotalKeywordQuery = `
INSERT INTO User_total_keyword (
  user_USN,
  keyword_ID
  )
VALUES`;

exports.deleteTotalKeywordQuery = `
DELETE
FROM User_total_keyword
WHERE (user_USN, keyword_ID) IN (`;


// RECOMMEND KEYWORD
exports.getRecommendKeywordQuery = `
SELECT
  category_ID,
  category_name,
  keyword_ID,
  keyword_name,
  mentee_USN
FROM get_recommend_keyword
WHERE mentee_USN = ?;`;

exports.insertRecommendKeywordQuery = `
INSERT INTO Recommend_keyword (
  user_USN,
  keyword_ID
  )
VALUES `;

exports.deleteRecommendKeywordQuery = `
DELETE
FROM Recommend_keyword
WHERE (user_USN, keyword_ID) IN (`;

