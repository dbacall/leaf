const registerUser = require('./helpers/register_helpers').registerUser;
const { addSundayLeague } = require('./helpers/sundayLeague_helpers');
const { addTeamToLeague } = require('./helpers/sundayLeagueTeam_helpers');
const expect = require('chai').expect;
const SundayLeagueTeam = require('../models/SundayLeagueTeam');

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

    await addTeamToLeague('team1', leagueAdded.body.league.id);

    const result = await SundayLeagueTeam.findOne({
      teamName: 'team1',
    });

    expect(result.teamName).to.equal('team1');
    expect(result.league.toString()).to.eq(leagueAdded.body.league.id);
  });
});
