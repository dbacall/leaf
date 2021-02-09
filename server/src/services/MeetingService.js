const Service = require('./service');
const Meeting = require('../models/Meeting')

class MeetingService extends Service {
  constructor(model) {
    super(model);
    this.getByCategory = this.getByCategory.bind(this)
    this.getByTherapist = this.getByTherapist.bind(this)
  }

  async getByCategory(query) {
    const { therapistId, category } = query.params
    try {
      const items = await Meeting.find({
        therapistId,
        category,
      }).sort({ time: 'asc' })

      return {
        error: false,
        statusCode: 200,
        data: items,
      };
    } catch (errors) {
      return {
        error: true,
        statusCode: 500,
        errors,
      };
    }
  }

  async getByTherapist(query) {
    const { therapistId } = query.params
    try {
      const items = await Meeting.find({
        therapistId,
      }).sort({ time: 'asc' })

      return {
        error: false,
        statusCode: 200,
        data: items,
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

module.exports = MeetingService;
