exports.getMentorListQuery = `
SELECT DISTINCT 
	mentor_USN, 
	name, 
	email, 
	image_url, 
	description, 
	company
FROM get_mentor_list`;

exports.getAllCareerQuery = `
SELECT 
	content, 
	user_USN 
FROM Career 
ORDER BY user_USN;`;

// exports.orderMentorQuery = `
// SELECT total, count(DISTINCT keyword_ID) as searched
// FROM get_mentor_list`;

exports.orderMentorNumQuery = `
SELECT DISTINCT count(DISTINCT keyword_ID) as searched, name, company, mentor_USN, email, image_url, description 
FROM get_mentor_list`;
