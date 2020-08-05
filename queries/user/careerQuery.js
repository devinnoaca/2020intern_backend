exports.getCareer = `
SELECT * 
FROM Career 
WHERE user_USN = ?;`