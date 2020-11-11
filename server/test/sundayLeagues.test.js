const expect = require('chai').expect;
const registerHelpers = require('./helpers/register_helpers');
const Sundayleague = require('../models/SundayLeague');
const sundayLeagueHelpers = require('./helpers/sundayLeague_helpers');
const supertest = require('supertest');
const app = require('../server');

describe('Sunday League', () => {
  it('lets a user add a sunday league', async () => {
    const user = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const leagueAdded = await sundayLeagueHelpers.addLeague(
      'league1',
      user._id
    );

    expect(leagueAdded).to.equal(
      'Sunday League successfully added to database.'
    );

    var league = await Sundayleague.findOne({ leagueName: 'league1' }).populate(
      'owner'
    );

    expect(league.leagueName).to.equal('league1');
    expect(league.owner.email).to.equal('dbacall@hotmail.co.uk');
  });

  it.only('retrieves a users owned sunday leagues', async () => {
    const user = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    await sundayLeagueHelpers.addLeague('league1', user._id);
    await supertest(app)
      .get(`/sunday-leagues/${user._id}`)
      .then((res) => {
        expect(res.body).to.be.length(1);
      });
  });
});
