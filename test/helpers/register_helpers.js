const supertest = require('supertest');
const app = require('../../server');

const registerHelpers = {
  registerUser: async () => {
    const data = {
      firstName: 'David',
      surname: 'Bacall',
      email: 'dbacall@hotmail.com',
      password: 'password',
      password2: 'password',
    };
    await supertest(app).post('/users/register').send(data);
  },
};

module.exports = registerHelpers;
