const Controller = require('./controller');
const UserService = require('../services/userService');
const User = require('../models/User');

const userService = new UserService(User);

class UserController extends Controller {
  constructor(service) {
    super(service);
    this.register = this.register.bind(this);
  }

  async register(req, res) {
    let response = await this.service.register(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
}

module.exports = new UserController(userService);
