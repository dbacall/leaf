const Service = require('./service');
const Therapist = require('../models/Therapist');

class TherapistService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
    this.getByCategory = this.getByCategory.bind(this)
  }

  async create(data) {
    var updatedData = data
    if (data.photo) {
      console.log('here');
      fs.access('../uploads', (err) => {
        if (err) {
          fs.mkdirSync('../uploads/');
        }
      });
      const fileName = new Date().toISOString() + req.file.originalname;
      sharp(req.file.buffer)
        .resize({ width: 280, height: 280, fit: 'cover' })
        .toFile('../uploads/' + fileName)

      updatedData = {
        ...data,
        photo: fileName
      }
    }

    const newItem = new Therapist(updatedData);

    try {
      let item = await newItem.save();
      if (item)
        return {
          error: false,
          status: 200,
          data: item,
        };
    } catch (error) {
      console.log('error', error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || 'Not able to create item in service',
        errors: error.errors,
      };
    }
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