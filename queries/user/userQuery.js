// USER QUERY
exports.getUserQuery = `
SELECT *
FROM User
WHERE USN = ?;
`;

exports.getUserIdQuery = `
SELECT USN
FROM User
WHERE ID = ?;
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

exports.createUserQuery = `
INSERT
INTO User(
  ID,
  password,
  email,
  name,
  image_url,
  description,
  company
)
VALUES (?, ?, ?, ?, ?, ?, ?);
`
