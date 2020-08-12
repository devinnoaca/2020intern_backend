// total keyword
exports.gettotalkeywordQuery = `
SELECT *
FROM get_total_keyword
WHERE utk_USN = ?;`;

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
SELECT *
FROM get_recommend_keyword
WHERE rk_USN = ?;`;

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

