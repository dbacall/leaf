const Service = require('./service');

class SundayLeagueGameweekService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
    this.getCurrent = this.getCurrent.bind(this);
    this.getSpecificGameweek = this.getSpecificGameweek.bind(this);
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

  async getCurrent(data) {
    try {
      const item = await this.model
        .findOne({
          season: data.id,
          current: true,
        })
        .populate('fixtures');
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

  async getSpecificGameweek(data) {
    try {
      const item = await this.model
        .findOne({
          number: data.number,
          season: data.id,
        })
        .populate('fixtures');
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

module.exports = SundayLeagueGameweekService;
