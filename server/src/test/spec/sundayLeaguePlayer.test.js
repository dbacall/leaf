const expect = require('chai').expect;
const SundayLeaguePlayer = require('../../models/sundayLeaguePlayer');

describe('Sunday league player tests:', () => {
  it.only('should let a user add a player to a team', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const leagueAdded = await addSundayLeague('league1', user._id);

    const teamAdded = await addSundayLeagueTeam(
      'team1',
      leagueAdded.body.data.id
    );

    await addSundayLeaguePlayer(
      'Bob Smith',
      'Defender',
      teamAdded.body.data.id
    );

    const result = await SundayLeaguePlayer.findOne({
      name: 'Bob Smith',
    });

    expect(result.name).to.equal('Bob Smith');
    expect(result.position).to.equal('Defender');
    expect(result.team.toString()).to.eq(teamAdded.body.data.id);
  });
});