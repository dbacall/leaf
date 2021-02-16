const expect = require('chai').expect;

describe('Login', () => {
  it('should login a registered user', async () => {
    await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    var data = await loginUser('dbacall@hotmail.co.uk', 'password');

    expect(data.error).to.be.false;
    expect(data.statusCode).to.equal(200);
    expect(data.token).to.exist;
  });

  it('should return an error if user is not registered', async () => {
    var data = await loginUser('dbacall@hotmail.co.uk', 'password');

    expect(data.error).to.be.true;
    expect(data.errors.email).to.equal('Email not found');
  });

  it('should return an error if user inputs wrong password', async () => {
    await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    var data = await loginUser('dbacall@hotmail.co.uk', 'passwo');

    expect(data.error).to.be.true;
    expect(data.errors.password).to.equal('Password incorrect');
  });

  it('should return errors if email and password field are left empty', async () => {
    await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    var data = await loginUser('', '');

    expect(data.error).to.be.true;
    expect(data.errors.email).to.equal('Email field is required');
    expect(data.errors.password).to.equal('Password field is required');
  });
});
