const expect = require('chai').expect;
const SundayLeagueTeam = require('../../models/sundayLeagueTeam');

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

    await addSundayLeagueTeam('team1', leagueAdded.body.data.id);

    const result = await SundayLeagueTeam.findOne({
      teamName: 'team1',
    });

    expect(result.teamName).to.equal('team1');
    expect(result.league.toString()).to.eq(leagueAdded.body.data.id);
  });
});
