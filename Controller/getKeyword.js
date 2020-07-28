const mysql_abc = require('../bin/db_connection')();
const connection = mysql_abc.init();
mysql_abc.test_open(connection);

const getKeyword = function(req, res) {
    let usn = req.params.usn;
    let query = `SELECT * FROM TOTAL_KEYWORD WHERE usn = ${usn}`

    connection.query(query, function(err, keyword){
        let data = keyword;
        console.log(data);
        let json_data = JSON.stringify(data, null, 2);
        //console.log(json_data);
        res.send(json_data);
    })
}


module.exports = {
    getKeyword
};
