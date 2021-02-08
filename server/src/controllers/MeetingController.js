const Controller = require('./controller');
const MeetingService = require('../services/MeetingService');
const Meeting = require('../models/Meeting');

const meetingService = new MeetingService(Meeting);

class MeetingController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new MeetingController(meetingService);
