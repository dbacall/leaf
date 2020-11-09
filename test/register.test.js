const expect = require('chai').expect;
const User = require('../models/User');
const registerHelpers = require('./helpers/register_helpers');

describe('Register routes', () => {
  it('should register a user', async () => {
    await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    await User.findOne({ email: 'dbacall@hotmail.co.uk' }).then((res) => {
      const user = res;
      expect(user.firstName).to.equal('David');
      expect(user.surname).to.equal('Bacall');
      expect(user.email).to.equal('dbacall@hotmail.co.uk');
      expect(user.password).not.to.equal('password');
    });
  });

  it('lets you register more than one user', async () => {
    for (i = 0; i <= 10; i++) {
      await registerHelpers.registerUser(
        'David',
        'Bacall',
        `dbacall${i}@hotmail.co.uk`,
        'password',
        'password'
      );
    }

    await User.find().then((res) => {
      expect(res).to.be.length(11);
    });
  });

  it('should return an error if a user with the same email tries to register', async () => {
    await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );
    const data = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );
    expect(data.body.email).to.equal('Email already exists');
  });

  it('should return an error if the email is invalid', async () => {
    const data = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacallhotmail.co.uk',
      'password',
      'password'
    );
    expect(data.body.email).to.equal('Email is invalid');
  });

  it("should return an error if a users passwords don't match", async () => {
    const data = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'passworfdds'
    );
    expect(data.body.password2).to.equal('Passwords must match');
  });

  it('should return an error if the password is less than 6 characters', async () => {
    const data = await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'passw',
      'passw'
    );
    expect(data.body.password).to.equal(
      'Password must be at least 6 characters'
    );
  });

  it('should return errors if fields are left empty', async () => {
    const data = await registerHelpers.registerUser('', '', '', '', '');
    expect(data.body.firstName).to.equal('First Name field is required');
    expect(data.body.surname).to.equal('Surname field is required');
    expect(data.body.email).to.equal('Email field is required');
    expect(data.body.password).to.equal('Password field is required');
    expect(data.body.password2).to.equal('Confirm password field is required');
  });
});
