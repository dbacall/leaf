const SundayLeague = require('../models/SundayLeague');

const SundayLeagueController = {
  create: (req, res) => {
    var newSundayLeague = new SundayLeague({
      leagueName: req.body.leagueName,
      owner: req.body.owner,
    });

    newSundayLeague
      .save()
      .then(() => {
        res.status(200).json('Sunday League successfully added to database.');
      })
      .catch(() => {
        res.status(400).json('Sunday League could not be saved to database.');
      });
  },
};

module.exports = SundayLeagueController;
