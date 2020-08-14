exports.getAllCategoryQuery = `
SELECT * 
FROM Category 
ORDER BY ID;`;

exports.getAllKeywordQuery = `
SELECT * 
FROM get_all_keyword 
ORDER BY category_ID;`;