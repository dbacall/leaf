const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const users = require('../routes/users');
const sundayLeagues = require('../routes/sundayLeagues');
const sundayLeagueTeam = require('../routes/sundayLeagueTeam');

module.exports = (app) => {
  app.use(cors());

  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(bodyParser.json());

  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  require('../config/passport')(passport);

  // Routes
  app.use('/users', users);
  app.use('/sunday-leagues', sundayLeagues);
  app.use('/sunday-leagues/team', sundayLeagueTeam);

  const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`Server up and running on port ${port}!`));
};
