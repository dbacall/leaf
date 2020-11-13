const SundayLeagueTeam = require('../models/SundayLeagueTeam');

const sundayLeagueTeamController = {
  addTeam: async (req, res) => {
    const newSundayLeagueTeam = new SundayLeagueTeam({
      teamName: req.body.teamName,
      league: req.body.leagueId,
    });

    await newSundayLeagueTeam
      .save()
      .then((team) => {
        console.log('team added');
        res.status(200).json(team);
      })
      .catch(() => {
        res.status(400).json('Team could not be added.');
      });
  },
};

module.exports = sundayLeagueTeamController;
