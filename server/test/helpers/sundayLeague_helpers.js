const supertest = require('supertest');
const app = require('../../server');

const addSundayLeague = async (name, id) => {
  var result = {};
  const data = {
    leagueName: name,
    owner: id,
  };
  await supertest(app)
    .post('/sunday-leagues/new')
    .send(data)
    .then((res) => {
      result = res;
    });

  return result;
};

module.exports.addSundayLeague = addSundayLeague;