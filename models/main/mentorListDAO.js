const pool = require('../../database/pool');
const mentorListQuery = require('../../queries/main/mentorListQuery');

// 나중에 qeury를 params으로 바꿔야 하는데 어떻게 바꿀 수 있을까 
exports.getMentorList = async (keyword) => {
    try {
        let query = mentorListQuery.getMentorList
        query += ` WHERE `
        for(i=0; i<keyword.length; i++) {
            if(i != keyword.length - 1){
                query += `keyword_name = "${keyword[i]}" OR ` 
            } else {
                query += `keyword_name = "${keyword[i]}" ` 
            }
        }
        query += ` ORDER BY USN`;

        let mentorList = await pool.query(query);
        return mentorList;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.getAllCareer = async () => {
    try {
        let carrer = await pool.query(mentorListQuery.getAllCareer);
        return carrer;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}