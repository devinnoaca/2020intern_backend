// USER QUERY
exports.getUserQuery = `
SELECT
  USN,
  ID,
  name,
  email,
  password,
  image_url,
  description,
  company,
  permission,
  noti_count,
  type
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
  name,
  email,
  image_url,
  description,
  company
)
VALUES (?, ?, ?, ?, ?, ?, ?);
`
