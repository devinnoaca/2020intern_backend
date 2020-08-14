let jwt = require("jsonwebtoken");
let secretObj = require("../../config/jwt");

const jwtCheckLogic = (req, res) => {
	const token = req.headers['x-access-token'] || req.query.token;
	//console.log(token);

	let decoded = jwt.verify(token, secretObj.secret);

	return decoded;
}

module.exports = {
	jwtCheckLogic,
}