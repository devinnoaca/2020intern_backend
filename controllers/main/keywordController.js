const keywordListDAO = require('../../models/main/keywordListDAO');
const keywordLogicLib = require('../lib/keyword');

const getKeywordList = async (req, res, next) => {
  try {
    let category = await keywordListDAO.getCategory();
    let keyword = await keywordListDAO.getKeyword();
    let allKeyword = keywordLogicLib.keywordLogic(category, keyword);
    let data = {
      "allCategory": allKeyword,
    }
    return res.status(200).send(data);
    //return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  getKeywordList,
}