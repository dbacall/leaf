const supertest = require('supertest');
const app = require('../../server');

const data = {
  firstName: 'David',
  surname: 'Bacall',
  email: 'dbacall@hotmail.com',
  password: 'password',
  password2: 'password',
};

const registerHelpers = {
  registerUser: async () => {
    var result = {};

    await supertest(app)
      .post('/users/register')
      .send(data)
      .then((res) => {
        result = res;
      });

    return result;
  },
};

module.exports = registerHelpers;
