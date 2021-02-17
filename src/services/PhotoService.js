const Service = require('./service');
const Photo = require('../models/Photo');
const sharp = require('sharp');
const AWS = require('aws-sdk');

class PhotoService extends Service {
  constructor(model) {
    super(model);
    this.create = this.create.bind(this);
  }

  async create(data) {
    var updatedData = data;
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'eu-west-2',
    });

    const s3Bucket = new AWS.S3({
      params: { Bucket: process.env.AWS_S3_BUCKET_NAME },
    });

    const fileName = new Date().toISOString() + data.file.originalname;

    sharp(data.file.buffer)
      .resize({
        width: 280,
        height: 280,
        fit: 'cover',
      })
      .toBuffer()
      .then(async (buffer) => {
        const s3Data = {
          Key: fileName,
          Body: buffer,
          ContentType: 'image/jpeg',
          ACL: 'public-read',
          Bucket: process.env.AWS_S3_BUCKET_NAME,
        };

        await s3Bucket.putObject(s3Data, (err, data) => {
          if (err) {
            console.error(err);
          } else {
            console.log(data);
          }
        });
      });

    updatedData = {
      therapistId: data.body.therapist,
      photo: fileName,
    };

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
