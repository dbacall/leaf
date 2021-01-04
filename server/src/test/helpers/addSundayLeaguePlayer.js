const supertest = require('supertest');
const app = require('../../app');

module.exports = async (name, position, team) => {
  const data = {
    name,
    position,
    team,
  };
  const response = await supertest(app)
    .post('/sunday-leagues/player')
    .send(data);

  return response;
};
