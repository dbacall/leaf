const registerUser = require('./helpers/register_helpers').registerUser;
const addSundayLeague = require('./helpers/sundayLeague_helpers')
  .addSundayLeague;
const supertest = require('supertest');
const app = require('../server');
const expect = require('chai').expect;
const SundayLeagueTeam = require('../models/SundayLeagueTeam');
const SundayLeague = require('../models/SundayLeague');

describe('Team', () => {
  it('should let a user add a team to a league', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const leagueAdded = await addSundayLeague('league1', user._id);

    data = {
      teamName: 'team1',
      league: leagueAdded._id,
    };

    await supertest(app).post('/sunday-leagues/team').send(data);

    const result = await SundayLeagueTeam.findOne({ teamName: 'team1' });
    expect(result.teamName).to.equal('team1');
  });
});
