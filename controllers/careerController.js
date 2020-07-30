const user = require('../models/userDAO');

exports.getUserCareer = async (req, res, next) => {
  let usn = parseInt(req.params.usn, 10);
  if (Number.isNaN(usn)) return res.status(400).end();

  let careers = new Set();
  try {
    let career = await user.getCareer(usn);

    for (let i = 0; i < career[0].length; i++) {
      careers.add(career[0][i].career);
    }
    return res.render('career', {usn: usn, career: [...careers]});
  } catch (err) {
    return res.status(500).json(err);
  }
}

