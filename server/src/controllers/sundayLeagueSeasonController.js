const Controller = require('./controller');
const SundayLeagueSeasonService = require('../services/sundayLeagueSeasonService');
const SundayLeagueSeason = require('../models/sundayLeagueSeason');

const sundayLeagueSeasonService = new SundayLeagueSeasonService(
  SundayLeagueSeason
);

class SundayLeagueSeasonController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new SundayLeagueSeasonController(sundayLeagueSeasonService);
