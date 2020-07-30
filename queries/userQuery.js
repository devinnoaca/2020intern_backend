// USER QUERY
exports.getUser = `SELECT * FROM USER WHERE usn = ?;`;
exports.updateUser = `UPDATE USER SET 
        email = ?, password = ?, name = ?, image = ?, description = ? WHERE usn = ?;`;
exports.createUser = `CREATE USER INTO (email, password, name, image, description)
        VALUES (?, ?, ?, ?, ?)`;

// USER & CAREER QUERY
exports.getProfile = `SELECT * FROM USER A 
        RIGHT OUTER JOIN CAREER B ON A.usn = B.usn WHERE B.usn = ?;`
