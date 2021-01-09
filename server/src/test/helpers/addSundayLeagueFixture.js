const supertest = require('supertest');
const app = require('../../app');

module.exports = async (team1, team2, date, gameweek) => {
  const data = {
    team1,
    team2,
    date,
    gameweek,
  };
  const response = await supertest(app)
    .post('/sunday-leagues/fixture')
    .send(data);

  return response;
};
