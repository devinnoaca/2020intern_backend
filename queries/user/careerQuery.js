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

exports.temp1 = `
when ID = ? then ?
`;

exports.temp2 = `
end) WHERE ID in (
`;

exports.deleteCareer = `
DELETE
FROM Career
WHERE (ID) IN (`;

