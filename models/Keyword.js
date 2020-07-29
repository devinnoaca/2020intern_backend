const mysql_abc = require('../config/db_connection')();
const connection = mysql_abc.init();
mysql_abc.connect(connection);

module.exports = {
    total_get: function(usn, callback) {
        let query = `SELECT * FROM TOTAL_KEYWORD WHERE usn = ?`
        let params = [];
        if(usn != null) {
            params = [usn];
        }
        connection.query(query, params, callback)
    },
    recommend_get: function(usn, callback) {
        let query = `SELECT * FROM RECOMMEND_KEYWORD WHERE usn = ?`
        let params = [];
        if(usn != null) {
            params = [usn];
        }
        connection.query(query, params, callback)
    }
}