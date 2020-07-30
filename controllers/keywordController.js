const keyword = require('../models/keywordDAO');

exports.getKeywords = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    if (Number.isNaN(usn)) return res.status(400).end();

    try {
        let rows = await keyword.getKeyword(usn);
        // console.log(rows[0][0].total_keyword_name)
        let total_keywords = new Set();
        let recommend_keywords = new Set();

        for(i=0; i<rows[0].length; i++) {
            //console.log(rows[0][i].total_keyword_name);
            total_keywords.add(rows[0][i].utk_keyword_ID);
            recommend_keywords.add(rows[0][i].rk_keyword_ID);
        }
        console.log(total_keywords);
        return res.render('keyword', {total: [...total_keywords], recommend: [...recommend_keywords]});
    } catch (err) {
        return res.status(500).json(err)
    }
}
