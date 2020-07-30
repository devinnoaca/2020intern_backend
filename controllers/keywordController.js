const keyword = require('../models/keywordDAO');

exports.getKeywords = async (req, res, next) => {
    let usn  = parseInt(req.params.usn, 10);
    if (Number.isNaN(usn)) return res.status(400).end();
    try {
        let total = await keyword.getTotalKeyword(usn);
        let recommend = await keyword.getRecommendKeyword(usn);

        let _total = new Array();
        let _recommend = new Array();

        for(i=0; i<total[0].length; i++) {
          _total.push({
            "keywordId" : total[0][i].utk_USN,
            "categoryName" : total[0][i].category_name,
            "keywordName" : total[0][i].keyword_name
          });
        }

        for(i=0; i<recommend[0].length; i++) {
          _recommend.push({
            "keywordId" : recommend[0][i].rk_USN,
            "categoryName" : recommend[0][i].category_name,
            "keywordName" : recommend[0][i].keyword_name
          });
        }

        let _keyword = {
          "usn" : usn,
          "allKeyword" : _total,
          "recommendKeyword": _recommend
        }

        return res.send(_keyword);
        //return res.render('keyword', {total: [...total_keywords], recommend: [...recommend_keywords]});
    } catch (err) {
        return res.status(500).json(err)
    }
}
