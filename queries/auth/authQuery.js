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

