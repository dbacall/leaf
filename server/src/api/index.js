const users = require('./user');
const sundayLeagues = require('./sundayLeagues');
const sundayLeagueTeam = require('./sundayLeagueTeam');

module.exports = (app) => {
  // Routes
  app.use('/users', users);
  app.use('/sunday-leagues', sundayLeagues);
  app.use('/sunday-leagues/team', sundayLeagueTeam);
};
