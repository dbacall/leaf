const SundayLeague = require('../models/SundayLeague');
const User = require('../models/User');

const SundayLeagueController = {
  create: async (req, res) => {
    var newSundayLeague = new SundayLeague({
      leagueName: req.body.leagueName,
      owner: req.body.owner,
    });

    await newSundayLeague
      .save()
      .then((league) => {
        res.status(200).json({ success: true, league });
      })
      .catch(() => {
        res.status(400).json({
          success: false,
          error: 'Sunday League could not be saved to database.',
        });
      });
  },

  getOwnedLeagues: async (req, res) => {
    await SundayLeague.find({ owner: req.params.id }).then((leagues) => {
      res.json(leagues);
    });
  },
};

module.exports = SundayLeagueController;
