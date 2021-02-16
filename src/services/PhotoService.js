const Service = require('./service');
const Photo = require('../models/Photo');
const fs = require('fs');
const sharp = require('sharp');

class PhotoService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
  }

  async create(data) {
    var updatedData = data;
    fs.access('./uploads', (err) => {
      if (err) {
        fs.mkdirSync('./uploads/');
      }
    });
    const fileName = new Date().toISOString() + data.file.originalname;
    sharp(data.file.buffer)
      .resize({ width: 280, height: 280, fit: 'cover' })
      .toFile('./uploads/' + fileName);

    updatedData = {
      therapistId: data.body.therapist,
      photo: fileName,
    };

    console.log(updatedData);
    const newItem = new Photo(updatedData);

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
}

module.exports = PhotoService;
