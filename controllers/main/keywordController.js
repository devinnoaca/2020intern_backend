const keywordListDAO = require('../../models/main/keywordListDAO');
const keywordLogicLib = require('../lib/keyword');

const getKeywordListController = async (req, res, next) => {
  try {
    let category = await keywordListDAO.getCategoryDAO();
    let keyword = await keywordListDAO.getKeywordDAO();
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
  getKeywordListController,
}