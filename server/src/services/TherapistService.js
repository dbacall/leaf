const Service = require('./service');
const Therapist = require('../models/Therapist');
const fs = require('fs')
const sharp = require('sharp');


class TherapistService extends Service {
  constructor(model) {
    super(model);
    this.getByCategory = this.getByCategory.bind(this)
  }

  async getByCategory(query) {
    try {
      const items = await Therapist.find({
        categories: query.params.category,
      }).populate('user');

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