const expect = require('chai').expect;
const SundayLeagueSeason = require('../../models/sundayLeagueSeason');
const supertest = require('supertest');
const app = require('../../app');

describe('Sunday league season tests:', () => {
  it('should let you add a season for a league', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    await addSundayLeagueSeason(1, 2020, 2021, league.body.data.id);

    const result = await SundayLeagueSeason.findOne({
      number: 1,
    });

    expect(result.number).to.equal(1);
    expect(result.yearFrom).to.equal(2020);
    expect(result.yearTo).to.equal(2021);
    expect(result.current).to.equal(true);
    expect(result.league.toString()).to.eq(league.body.data.id);
  });

  it('should let update current of previous season if add a new season', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    await addSundayLeagueSeason(1, 2020, 2021, league.body.data.id);
    await addSundayLeagueSeason(2, 2021, 2022, league.body.data.id);

    const result = await SundayLeagueSeason.findOne({
      number: 1,
    });

    expect(result.number).to.equal(1);
    expect(result.current).to.equal(false);
  });

  it('should only get the current season', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    await addSundayLeagueSeason(1, 2020, 2021, league.body.data.id);
    await addSundayLeagueSeason(2, 2021, 2022, league.body.data.id);

    const result = await supertest(app).get('/sunday-leagues/season');

    expect(result.body.number).to.equal(2);
    expect(result.body.current).to.equal(true);
  });
});
