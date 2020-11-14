const SundayLeagueTeam = require('../models/SundayLeagueTeam');
const SundayLeague = require('../models/SundayLeague');

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
        res.status(200).json({ success: true, team });
      })
      .catch(() => {
        res
          .status(400)
          .json({ success: false, error: 'Team could not be added.' });
      });

    const sundayLeague = await SundayLeague.findOne({
      _id: newSundayLeagueTeam.league,
    });
    sundayLeague.teams.push(newSundayLeagueTeam);
    await sundayLeague.save();
  },
};

module.exports = sundayLeagueTeamController;
