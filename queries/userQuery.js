// USER QUERY
exports.getUser = `SELECT * FROM USER WHERE usn = ?;`;
exports.updateUser = `UPDATE USER SET 
        email = ?, password = ?, name = ?, image = ?, description = ? WHERE usn = ?;`;

// CAREER QUERY
exports.getCareer = `SELECT * FROM CAREER WHERE usn = ?;`


// USER & CAREER QUERY
exports.getProfile = `SELECT * FROM USER A 
        RIGHT OUTER JOIN CAREER B ON A.usn = B.usn WHERE B.usn = ?;`
