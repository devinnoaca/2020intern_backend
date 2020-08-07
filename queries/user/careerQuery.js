exports.getCareer = `
SELECT * 
FROM Career 
WHERE user_USN = ?;`

exports.insertCareer = `
INSERT INTO Career (
	content
	user_USN
  )
VALUES (?,?)`;

exports.deleteCareer = `
DELETE
FROM Career
WHERE user_USN = ?`;
