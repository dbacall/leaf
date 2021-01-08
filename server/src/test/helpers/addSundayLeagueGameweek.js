const supertest = require('supertest');
const app = require('../../app');

module.exports = async (number, season) => {
  const data = {
    number,
    season,
  };
  const response = await supertest(app)
    .post('/sunday-leagues/gameweek')
    .send(data);

  return response;
};
