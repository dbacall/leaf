const Service = require('./service');
const SundayLeagueFixture = require('../models/sundayLeagueFixture')

class SundayLeagueSeasonService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  async create(data) {
    const response = await super.create(data);
    if (data.number > 1) {
      const filter = {
        number: data.number - 1,
      };
      const update = { current: false };
      await this.model.findOneAndUpdate(filter, update);
    }
    return response;
  }

  async getResults(teams) {
    try {
      let seasonResults = []
      for (const team of teams) {
        const fixtures = await SundayLeagueFixture.find({ $or: [{ homeTeam: team.id }, { awayTeam: team.id }] })
        let teamResults = {
          name: team.name,
          id: team.id,
          won: 0,
          lost: 0,
          drawn: 0,
          points: 0,
        }
        teamResults.name = team.name
        teamResults.id = team.id
        for (const fixture of fixtures) {
          if (fixture.winner == team.id) {
            teamResults.won += 1
            teamResults.points += 3
          } else if (fixture.draw) {
            teamResults.drawn += 1
            teamResults.points += 1
          } else teamResults.lost += 1
        }
        seasonResults.push(teamResults)
      }
      return {
        error: false,
        statusCode: 200,
        data: seasonResults,
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }
}

module.exports = SundayLeagueSeasonService;
