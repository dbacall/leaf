const Service = require('./service');

class SundayLeagueSeasonService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
    this.getCurrentSeason = this.getCurrentSeason.bind(this);
  }

  async create(data) {
    const response = await super.create(data);
    if (data.number > 1) {
      const filter = {
        number: data.number - 1,
      };
      const update = { currentSeason: false };
      await this.model.findOneAndUpdate(filter, update);
    }
    return response;
  }

  async getCurrentSeason() {
    try {
      const item = await this.model.findOne({
        currentSeason: true,
      });
      return {
        error: false,
        statusCode: 200,
        data: item,
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
