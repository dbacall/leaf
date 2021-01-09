const supertest = require('supertest');
const app = require('../../app');

module.exports = async (homeTeam, awayTeam, date, gameweek) => {
  const data = {
    homeTeam,
    awayTeam,
    date,
    gameweek,
  };
  const response = await supertest(app)
    .post('/sunday-leagues/fixture')
    .send(data);

  return response;
};
