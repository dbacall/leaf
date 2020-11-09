const supertest = require('supertest');
const app = require('../server');
const expect = require('chai').expect;
const User = require('../models/User');
const registerHelpers = require('./helpers/register_helpers');

describe('Register routes', () => {
  it('should register a user', async () => {
    await registerHelpers.registerUser();

    await User.find({ email: 'dbacall@hotmail.com' }).then((res) => {
      const user = res[0];
      expect(user.firstName).to.equal('David');
      expect(user.surname).to.equal('Bacall');
    });
  });
});
