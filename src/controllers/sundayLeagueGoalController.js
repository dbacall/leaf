const Controller = require('./controller');
const SundayLeagueGoalService = require('../services/sundayLeagueGoalService');
const SundayLeagueGoal = require('../models/sundayLeagueGoal');

const sundayLeagueGoalService = new SundayLeagueGoalService(SundayLeagueGoal);

class SundayLeagueGoalController extends Controller {
  constructor(service) {
    super(service);
  }
}

module.exports = new SundayLeagueGoalController(sundayLeagueGoalService);
