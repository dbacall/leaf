const expect = require('chai').expect;
const registerHelpers = require('./helpers/register_helpers');
const loginHelpers = require('./helpers/login_helpers');

describe('Login routes', () => {
  it('should login a registered user', async () => {
    await registerHelpers.registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    var data = await loginHelpers.loginUser(
      'dbacall@hotmail.co.uk',
      'password'
    );

    expect(data.body.success).to.be.true;
    expect(data.body.token).to.exist;
  });
});
