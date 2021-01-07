const Controller = require('./controller');
const SundayLeagueSeasonService = require('../services/sundayLeagueSeasonService');
const SundayLeagueSeason = require('../models/sundayLeagueSeason');

const sundayLeagueSeasonService = new SundayLeagueSeasonService(
  SundayLeagueSeason
);

class SundayLeagueSeasonController extends Controller {
  constructor(service) {
    super(service);
    this.getCurrentSeason = this.getCurrentSeason.bind(this);
  }

  async getCurrentSeason(req, res) {
    let response = await this.service.getCurrentSeason();
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response.data);
  }
}

module.exports = new SundayLeagueSeasonController(sundayLeagueSeasonService);
