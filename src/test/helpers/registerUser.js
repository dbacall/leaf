const supertest = require('supertest');
const app = require('../../app');

module.exports = async (firstName, surname, email, password, password2) => {
  var result = {};

  const data = {
    firstName: firstName,
    surname: surname,
    email: email,
    password: password,
    password2: password2,
  };

  await supertest(app)
    .post('/users/register')
    .send(data)
    .then((res) => {
      result = res;
    });

  return result.body;
};
