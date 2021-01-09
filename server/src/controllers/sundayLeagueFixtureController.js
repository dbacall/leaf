const Controller = require('./controller');
const SundayLeagueFixtureService = require('../services/sundayLeagueFixtureService');
const SundayLeagueFixture = require('../models/sundayLeagueFixture');

const sundayLeagueFixtureService = new SundayLeagueFixtureService(
  SundayLeagueFixture
);

class SundayLeagueFixtureController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new SundayLeagueFixtureController(sundayLeagueFixtureService);
