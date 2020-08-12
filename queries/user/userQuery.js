// USER QUERY
exports.getUserQuery = `
SELECT * 
FROM User 
WHERE USN = ?; 
`;

exports.updateUserQuery = `
UPDATE User
SET 
  name = ?, 
  email = ?, 
  image_url = ?, 
  description = ?, 
  company = ?
WHERE USN = ?;
`;
