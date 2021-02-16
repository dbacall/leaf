const Controller = require('./controller');
const TherapistService = require('../services/TherapistService');
const Therapist = require('../models/Therapist');

const therapistService = new TherapistService(Therapist);

class TherapistController extends Controller {
  constructor(service) {
    super(service);
    this.getByCategory = this.getByCategory.bind(this);
  }

  async getByCategory(req, res) {
    let response = await this.service.getByCategory(req);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response.data);
  }
}

module.exports = new TherapistController(therapistService);
