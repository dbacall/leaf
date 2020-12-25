const Controller = require('./Controller');
const SundayLeagueService = require('../services/SundayLeagueService');
const SundayLeague = require('../models/SundayLeague');

const sundayLeagueService = new SundayLeagueService(SundayLeague);

class SundayLeagueController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new SundayLeagueController(sundayLeagueService);
