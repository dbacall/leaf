const expect = require('chai').expect;
const SundayLeagueFixture = require('../../models/sundayLeagueFixture');
const supertest = require('supertest');
const app = require('../../app');

describe('Sunday league fixture tests:', () => {
  it.only('should let you add a fixture for a gameweek', async () => {
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

    const gameweek = await addSundayLeagueGameweek(1, season.body.data._id);

    const team1 = await addSundayLeagueTeam('team1', league.body.data.id);
    const team2 = await addSundayLeagueTeam('team2', league.body.data.id);

    const date = new Date(2021, 02, 24, 15, 00, 00, 0);

    const gameweekId = gameweek.body.data._id;
    const homeTeamId = team1.body.data._id;
    const awayTeamId = team2.body.data._id;

    await addSundayLeagueFixture(homeTeamId, awayTeamId, date, gameweekId);

    const result = await SundayLeagueFixture.findOne({
      gameweek: gameweekId,
    });

    expect(result.homeTeam.toString()).to.equal(homeTeamId);
    expect(result.awayTeam.toString()).to.equal(awayTeamId);
    expect(result.homeTeamGoals).to.equal(0);
    expect(result.awayTeamGoals).to.equal(0);
    expect(result.draw).to.be.false;
    expect(result.finished).to.be.false;
    expect(result.date.getTime()).to.equal(date.getTime());
    expect(result.gameweek.toString()).to.eq(gameweekId);
  });
});
