const users = require('../api/user');
const sundayLeagues = require('../api/sundayLeagues');
const sundayLeagueTeam = require('../api/sundayLeagueTeam');
const sundayLeaguePlayer = require('../api/sundayLeaguePlayer');
const sundayLeagueSeason = require('../api/sundayLeagueSeason');
const sundayLeagueGameweek = require('../api/sundayLeagueGameweek');
const sundayLeagueFixture = require('../api/sundayLeagueFixture');

module.exports = (app) => {
  // Routes
  app.use('/users', users);
  app.use('/sunday-leagues', sundayLeagues);
  app.use('/sunday-leagues/team', sundayLeagueTeam);
  app.use('/sunday-leagues/player', sundayLeaguePlayer);
  app.use('/sunday-leagues/season', sundayLeagueSeason);
  app.use('/sunday-leagues/gameweek', sundayLeagueGameweek);
  app.use('/sunday-leagues/fixture', sundayLeagueFixture);
};
