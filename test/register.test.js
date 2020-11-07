const request = require('supertest');
const app = require('../server');
const expect = require('chai').expect;
const User = require('../models/User');

describe('Register routes', () => {
  it('should register a user', async () => {
    const data = {
      firstName: 'David',
      surname: 'Bacall',
      email: 'dbacall@hotmail.com',
      password: 'password',
      password2: 'password',
    };
    await request('http://localhost:5000')
      .post('/users/register')
      .send(data)
      .then((res) => {
        expect(res.body.firstName).to.equal('David');
        expect(res.body.surname).to.equal('Bacall');
        expect(res.body.email).to.equal('dbacall@hotmail.com');
        expect(res.body.password).not.to.equal('password');
      });

    await User.find({ email: 'dbacall@hotmail.com' }).then((res) => {
      const user = res[0];
      expect(user.firstName).to.equal('David');
    });
  });
});
