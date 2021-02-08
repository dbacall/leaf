const Controller = require('./controller');
const MeetingService = require('../services/MeetingService');
const Meeting = require('../models/Meeting');

const meetingService = new MeetingService(Meeting);

class MeetingController extends Controller {
  constructor(service) {
    super(service);
    this.getByCategory = this.getByCategory.bind(this)
  }

  async getByCategory(req, res) {
    let response = await this.service.getByCategory(req);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response.data);
  }
}

module.exports = new MeetingController(meetingService);
