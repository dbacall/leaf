const supertest = require('supertest');
const app = require('../../server');

const loginHelpers = {
  loginUser: async (email, password) => {
    const data = {
      email: email,
      password: password,
    };

    var result = {};

    await supertest(app)
      .post('/users/login')
      .send(data)
      .then((res) => {
        result = res;
      });

    return result;
  },
};

module.exports = loginHelpers;
