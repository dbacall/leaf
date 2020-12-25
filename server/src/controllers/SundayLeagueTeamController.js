const Controller = require('./Controller');
const SundayLeagueTeamService = require('../services/SundayLeagueTeamService');
const SundayLeagueTeam = require('../models/SundayLeagueTeam');

const sundayLeagueTeamService = new SundayLeagueTeamService(SundayLeagueTeam);

class SundayLeagueTeamController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new SundayLeagueTeamController(sundayLeagueTeamService);
