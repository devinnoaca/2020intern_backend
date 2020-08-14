exports.getCareerQuery = `
SELECT
  ID,
  content,
  user_USN
FROM Career
WHERE user_USN = ?;`

exports.createCareerQuery = `
INSERT INTO Career (
  content,
  user_USN
  )
VALUES`;

exports.updateCareerQuery = `
UPDATE Career
SET content = (
  case `;

exports.updateCareerWhenQuery = `
when ID = ? then ?
`;

exports.updateCareerWhereQuery = `
end) WHERE ID in (
`;

exports.deleteCareerQuery = `
DELETE
FROM Career
WHERE (ID) IN (`;
