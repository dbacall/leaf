const Controller = require('./controller');
const SundayLeagueGameweekService = require('../services/sundayLeagueGameweekService');
const SundayLeagueGameweek = require('../models/sundayLeagueGameweek');

const sundayLeagueGameweekService = new SundayLeagueGameweekService(
  SundayLeagueGameweek
);

class SundayLeagueGameweekController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new SundayLeagueGameweekController(
  sundayLeagueGameweekService
);
