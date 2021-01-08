const Service = require('./service');

class SundayLeagueGameweekService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
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
}

module.exports = SundayLeagueGameweekService;
