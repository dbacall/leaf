const expect = require('chai').expect;
const User = require('../../models/User');

describe('Register', () => {
  it('should register a user', async () => {
    const newUser = await registerUser(
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
      expect(user.id).to.eq(newUser.data.id);
    });
  });

  it('lets you register more than one user', async () => {
    for (var i = 0; i <= 10; i++) {
      await registerUser(
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
    await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );
    const response = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );
    expect(response.error).to.be.true;
    expect(response.message).to.equal('Email already in use.');
  });

  it('should return an error if the email is invalid', async () => {
    const response = await registerUser(
      'David',
      'Bacall',
      'dbacallhotmail.co.uk',
      'password',
      'password'
    );
    expect(response.errors.email).to.equal('Email is invalid');
  });

  it("should return an error if a users passwords don't match", async () => {
    const response = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'passworfdds'
    );
    expect(response.errors.password2).to.equal('Passwords must match');
  });

  it('should return an error if the password is less than 6 characters', async () => {
    const response = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'passw',
      'passw'
    );
    expect(response.errors.password).to.equal(
      'Password must be at least 6 characters'
    );
  });

  it('should return errors if fields are left empty', async () => {
    const response = await registerUser('', '', '', '', '');
    expect(response.errors.firstName).to.equal('First Name field is required');
    expect(response.errors.surname).to.equal('Surname field is required');
    expect(response.errors.email).to.equal('Email field is required');
    expect(response.errors.password).to.equal('Password field is required');
    expect(response.errors.password2).to.equal(
      'Confirm password field is required'
    );
  });
});
