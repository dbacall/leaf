const Service = require('./Service');

class SundayLeagueService extends Service {
  constructor(model) {
    super(model);
    this.getOwnedLeagues = this.getOwnedLeagues.bind(this);
  }

  async getOwnedLeagues(query) {
    try {
      const leagues = await this.model.find({ owner: query.params.id });
      return {
        error: false,
        statusCode: 200,
        data: leagues,
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

module.exports = SundayLeagueService;
