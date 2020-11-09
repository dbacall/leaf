const supertest = require('supertest');
const app = require('../server');
const expect = require('chai').expect;
const User = require('../models/User');
const registerHelpers = require('./helpers/register_helpers');

describe('Register routes', () => {
  it('should register a user', async () => {
    await registerHelpers.registerUser();

    await User.findOne({ email: 'dbacall@hotmail.com' }).then((res) => {
      const user = res;
      expect(user.firstName).to.equal('David');
      expect(user.surname).to.equal('Bacall');
      expect(user.email).to.equal('dbacall@hotmail.com');
      expect(user.password).not.to.equal('password');
    });
  });

  it('should return an error if a user with the same email tries to register', async () => {
    await registerHelpers.registerUser();
    const data = await registerHelpers.registerUser();
    expect(data.body.email).to.equal('Email already exists');
  });
});
