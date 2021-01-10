const Service = require('./service');
const SundayLeagueFixture = require('../models/sundayLeagueFixture');

class SundayLeagueGoalService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
  }

  async create(data) {
    const response = await super.create(data);

    const fixture = await SundayLeagueFixture.findOne({ _id: data.fixture });

    const update =
      fixture.homeTeam == data.team
        ? { homeTeamGoals: fixture.homeTeamGoals + 1 }
        : { awayTeamGoals: fixture.awayTeamGoals + 1 };
    const filter = { _id: data.fixture };
    await SundayLeagueFixture.findOneAndUpdate(filter, update);

    return response;
  }
}

module.exports = SundayLeagueGoalService;
