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

exports.deleteTotalKeyword = `
DELETE
FROM User_total_keyword
WHERE (user_USN, keyword_ID) IN (`;


// RECOMMEND KEYWORD
exports.getRecommendKeyword = `
SELECT *
FROM get_recommend_keyword
WHERE rk_USN = ?;`;

exports.insertRecommendKeyword = `
INSERT INTO Recommend_keyword (
  user_USN,
  keyword_ID
  )
VALUES `;

exports.deleteRecommendKeyword = `
DELETE
FROM Recommend_keyword
WHERE (user_USN, keyword_ID) IN (`;

