const expect = require('chai').expect;
const SundayLeagueSeason = require('../../models/sundayLeagueSeason');

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
    expect(result.currentSeason).to.equal(true);
    expect(result.league.toString()).to.eq(league.body.data.id);
  });

  it.only('should let update currentSeason of previous season if add a new season', async () => {
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
    expect(result.currentSeason).to.equal(false);
  });
});
