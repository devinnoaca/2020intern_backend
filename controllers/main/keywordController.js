const keywordListDAO = require('../../models/main/keywordListDAO');

const getKeywordList = async (req, res, next) => {
  try {
    let category = await keywordListDAO.getCategory();
    let keyword = await keywordListDAO.getKeyword();
    let start = 0;
    let _keyword = new Array();
    let result = new Array();

    for (i = 0; i < keyword[0].length; i++) {
      if (start === keyword[0][i].category_ID) {
        _keyword[start].keyword.push({
          "keywordID": keyword[0][i].keyword_ID,
          "keyword_name": keyword[0][i].keyword_name,
          "categoryName": keyword[0][i].category_name
        });
      } else {
        start = keyword[0][i].category_ID;
        _keyword[start] = {
          category_ID: start,
          keyword: [{
            "keywordID": keyword[0][i].keyword_ID,
            "keyword_name": keyword[0][i].keyword_name,
            "categoryName": keyword[0][i].category_name
          }]
        };
      }
    }

    result.push({
      allCategory: [],
    })

    // 카테고리 테이블에는 카테고리가 있을 수 있는데 키워드 테이블에 카테고리가 존재 하지 않을 경우 대비해 거꾸로
    let key = _keyword.length - 1;
    for (j = category[0].length - 1; j >= 0; j--) {
      if (category[0][j].category_ID !== _keyword[key].category_ID) {
        result[0].allCategory.push({
          "categoryID": category[0][j].category_ID,
          "categoryName": category[0][j].category_name,
          "keywordList": []
        })
      } else {
        result[0].allCategory.push({
          "categoryID": category[0][j].category_ID,
          "categoryName": category[0][j].category_name,
          "keywordList": _keyword[key].keyword
        })
        key = key - 1;
      }
    }

    const reversed = result[0].allCategory.reverse();
    return res.status(200).send(reversed);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getKeywordList,
}