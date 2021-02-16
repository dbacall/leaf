const Service = require('./service');
const Therapist = require('../models/Therapist');

class TherapistService extends Service {
  constructor(model) {
    super(model);
    this.getById = this.getById.bind(this);
    this.getByCategory = this.getByCategory.bind(this);
  }

  async getById(query) {
    try {
      const items = await Therapist.findById(query.params.id).populate([
        {
          path: 'user',
          model: 'users',
          // select: "street zipCode",
        },
        {
          path: 'photo',
          model: 'Photo',
          // select: "age",
        },
      ]);

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

  async getByCategory(query) {
    try {
      const items = await Therapist.find({
        categories: query.params.category,
      }).populate([
        {
          path: 'user',
          model: 'users',
          // select: "street zipCode",
        },
        {
          path: 'photo',
          model: 'Photo',
          // select: "age",
        },
      ]);

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

module.exports = TherapistService;
