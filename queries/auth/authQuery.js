exports.signInQuery = `
SELECT password
FROM User
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

