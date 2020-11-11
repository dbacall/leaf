const SundayLeague = require('../models/SundayLeague');

const SundayLeagueController = {
  create: async (req, res) => {
    var newSundayLeague = new SundayLeague({
      leagueName: req.body.leagueName,
      owner: req.body.owner,
    });

    await newSundayLeague
      .save()
      .then(() => {
        res.status(200).json('Sunday League successfully added to database.');
      })
      .catch(() => {
        res.status(400).json('Sunday League could not be saved to database.');
      });
  },

  getOwnedLeagues: async (req, res) => {
    await SundayLeague.find({ owner: req.params.id }).then((leagues) => {
      res.json(leagues);
    });
  },
};

module.exports = SundayLeagueController;
