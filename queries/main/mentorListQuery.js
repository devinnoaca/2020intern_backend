exports.getMentorList = `
SELECT DISTINCT 
	mentor_USN, 
	user_name, 
	email, 
	image_url, 
	description, 
	company 
FROM get_mentor_list`;

exports.getAllCareer = `
SELECT 
	content, 
	user_USN 
FROM Career 
ORDER BY user_USN;`;
