// USER QUERY
exports.getUser = `SELECT * FROM User WHERE USN = ?;`;
exports.updateUser = `UPDATE User SET
        email = ?, password = ?, name = ?, image = ?, description = ? WHERE usn = ?;`;

// CAREER QUERY
exports.getCareer = `SELECT * FROM Career WHERE career_USN = ?;`


// USER & CAREER QUERY
exports.getProfile = `SELECT * FROM User A
        RIGHT OUTER JOIN Career B ON A.usn = B.usn WHERE B.usn = ?;`
