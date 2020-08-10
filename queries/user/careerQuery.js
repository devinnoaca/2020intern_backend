exports.getCareer = `
SELECT *
FROM Career
WHERE user_USN = ?;`

exports.createCareer = `
INSERT INTO Career (
  content,
  user_USN
  )
VALUES`;

exports.updateCareer = `
UPDATE Career
SET content = (
  case `;

exports.updateCareerWhen = `
when ID = ? then ?
`;

exports.updateCareerWhere = `
end) WHERE ID in (
`;

exports.deleteCareer = `
DELETE
FROM Career
WHERE (ID) IN (`;
