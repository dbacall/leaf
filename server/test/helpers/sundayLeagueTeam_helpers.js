const supertest = require('supertest');
const app = require('../../server');

const addTeamToLeague = async (teamName, league) => {
  var result = {};
  const data = {
    teamName: teamName,
    league: league,
  };
  await supertest(app)
    .post('/sunday-leagues/team')
    .send(data)
    .then((res) => {
      result = res;
    });

  return result;
};

module.exports.addTeamToLeague = addTeamToLeague;
