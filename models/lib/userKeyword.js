const modifyKeyword = (keywords, query, usn, bindValue, state) => {
	for (let i = 0; i < keywords.length; i++) {
		if ( i == keywords.length - 1) {
			if(state === "insert") query += `(?, ?);`;
			else query += `(?, ?));`;
		} 
		else {
			query += `(?, ?), `;
		}
		bindValue.push(usn, keywords[i]);
	}
	return query;
}

module.exports = {
	modifyKeyword,
}