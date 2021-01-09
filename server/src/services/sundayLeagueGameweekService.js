const Service = require('./service');

class SundayLeagueGameweekService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
    this.getCurrent = this.getCurrent.bind(this);
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

  async getCurrent() {
    try {
      const item = await this.model
        .findOne({
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
}

module.exports = SundayLeagueGameweekService;
