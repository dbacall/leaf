const expect = require('chai').expect;
const User = require('../models/User');
const registerHelpers = require('./helpers/register_helpers');
const supertest = require('supertest');
const app = require('../server');

describe('Login routes', () => {
  it('should login a registered user', async () => {
    await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const data = {
      email: 'dbacall@hotmail.co.uk',
      password: 'password',
    };

    await supertest(app)
      .post('/users/login')
      .send(data)
      .then((res) => {
        expect(res.body.success).to.be.true;
        expect(res.body.token).to.exist;
      });
  });
});
