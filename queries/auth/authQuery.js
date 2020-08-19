exports.signInQuery = `
SELECT
  password,
  salt
FROM Authorization
WHERE ID = ?;
`;

exports.authQuery = `
INSERT
INTO Authorization(
  ID,
  password,
  salt
) VALUES(?, ?, ?);
`
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
