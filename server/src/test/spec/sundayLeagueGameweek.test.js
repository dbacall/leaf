const expect = require('chai').expect;
const SundayLeagueGameweek = require('../../models/sundayLeagueGameweek');
const supertest = require('supertest');
const app = require('../../app');

describe('Sunday league gameweek tests:', () => {
  it('should let you add a gameweek for a season', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    const season = await addSundayLeagueSeason(
      1,
      2020,
      2021,
      league.body.data.id
    );

    await addSundayLeagueGameweek(1, season.body.data._id);

    const result = await SundayLeagueGameweek.findOne({
      number: 1,
    });

    expect(result.number).to.equal(1);
    expect(result.current).to.be.true;
    expect(result.season.toString()).to.eq(season.body.data._id);
  });

  it('should throw an error if number is less than 1', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    const season = await addSundayLeagueSeason(
      1,
      2020,
      2021,
      league.body.data.id
    );

    const result = await addSundayLeagueGameweek(0, season.body.data._id);

    expect(result.body.errors.number.message).to.equal(
      'The lowest number for a gameweek is 1'
    );
  });

  it('should let update current of previous gameweek if add a new season', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    const season = await addSundayLeagueSeason(
      1,
      2020,
      2021,
      league.body.data.id
    );

    await addSundayLeagueGameweek(1, season.body.data._id);
    await addSundayLeagueGameweek(2, season.body.data._id);

    const result = await SundayLeagueGameweek.findOne({
      number: 1,
    });

    expect(result.number).to.equal(1);
    expect(result.current).to.be.false;
  });

  it('should only get the current gameweek', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const league = await addSundayLeague('league1', user._id);

    const season = await addSundayLeagueSeason(
      1,
      2020,
      2021,
      league.body.data.id
    );

    await addSundayLeagueGameweek(1, season.body.data._id);
    await addSundayLeagueGameweek(2, season.body.data._id);

    const result = await supertest(app).get('/sunday-leagues/gameweek');

    expect(result.body.number).to.equal(2);
    expect(result.body.current).to.equal(true);
  });
});
