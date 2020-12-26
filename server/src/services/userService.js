const Service = require('./service');
const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const keys = require('../config/keys');

class UserService extends Service {
  constructor(model) {
    super(model);
    this.register = this.register.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.hashPassword = this.hashPassword.bind(this);
  }

  async register(data) {
    const { errors, isValid } = validateRegisterInput(data);

    if (!isValid) {
      return {
        error: true,
        statusCode: 500,
        message: 'Invalid registration entries.',
        errors,
      };
    }

    const newUser = new this.model(data);

    const user = await this.model.findOne({ email: data.email });

    if (user) {
      return {
        error: true,
        statusCode: 500,
        message: 'User already exists.',
      };
    }

    newUser.password = await this.hashPassword(newUser.password);

    const savedUser = await this.saveUser(newUser);

    return savedUser;
  }

  async hashPassword(password) {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
          if (err) reject(error);
          resolve(hash);
        });
      });
    });

    return hashedPassword;
  }

  async saveUser(newUser) {
    let user = await newUser.save();

    if (user) {
      return {
        error: false,
        status: 200,
        data: user,
      };
    } else {
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || 'Not able to create user in service',
        errors,
      };
    }
  }
}

module.exports = UserService;
