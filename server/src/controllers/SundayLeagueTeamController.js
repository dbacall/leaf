const SundayLeagueTeam = require('../models/SundayLeagueTeam');

const sundayLeagueTeamController = {
  addTeam: async (req, res) => {
    const newSundayLeagueTeam = new SundayLeagueTeam({
      teamName: req.body.teamName,
      league: req.body.league,
    });

    await newSundayLeagueTeam
      .save()
      .then((team) => {
        res.status(200).json({ success: true, team });
      })
      .catch(() => {
        res
          .status(400)
          .json({ success: false, error: 'Team could not be added.' });
      });
  },
};

module.exports = sundayLeagueTeamController;
