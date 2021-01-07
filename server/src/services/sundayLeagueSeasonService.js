const Service = require('./service');

class SundayLeagueSeasonService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
  }

  async create(data) {
    const response = await super.create(data);
    console.log(response);
    return response;
  }
}

module.exports = SundayLeagueSeasonService;
