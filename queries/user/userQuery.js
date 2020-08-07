// USER QUERY
exports.getUser = `
SELECT * 
FROM User 
WHERE USN = ?; 
`;

exports.updateUser = `
UPDATE User
SET 
  name = ?, 
  email = ?, 
  image_url = ?, 
  description = ?, 
  company = ?
WHERE USN = ?;
`;
