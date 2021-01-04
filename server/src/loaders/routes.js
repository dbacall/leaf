const users = require('../api/user');
const sundayLeagues = require('../api/sundayLeagues');
const sundayLeagueTeam = require('../api/sundayLeagueTeam');
const sundayLeaguePlayer = require('../api/sundayLeaguePlayer');

module.exports = (app) => {
  // Routes
  app.use('/users', users);
  app.use('/sunday-leagues', sundayLeagues);
  app.use('/sunday-leagues/team', sundayLeagueTeam);
  app.use('/sunday-leagues/player', sundayLeaguePlayer);
};
