const supertest = require('supertest');
const app = require('../../server');

module.exports = async (teamName, league) => {
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
