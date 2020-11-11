const expect = require('chai').expect;
const registerHelpers = require('./helpers/register_helpers');
const Sundayleague = require('../models/SundayLeague');
const User = require('../models/User');
const supertest = require('supertest');
const app = require('../server');

describe('Sunday League', () => {
  it.only('lets a user add a sunday league', async () => {
    const user = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const data = {
      leagueName: 'league1',
      owner: user._id,
    };
    await supertest(app)
      .post('/sunday-leagues/new')
      .send(data)
      .then((res) => {
        expect(res.body).to.equal(
          'Sunday League successfully added to database.'
        );
      });

    var league = await Sundayleague.findOne({ leagueName: 'league1' }).populate(
      'owner'
    );

    expect(league.leagueName).to.equal('league1');
    expect(league.owner.email).to.equal('dbacall@hotmail.co.uk');
  });
});
