const Controller = require('./controller');
const PhotoService = require('../services/PhotoService');
const Photo = require('../models/Photo');

const photoService = new PhotoService(Photo);

class PhotoController extends Controller {
  constructor(service) {
    super(service);
    this.create = this.create.bind(this);
  }

  async create(req, res) {
    let response = await this.service.create(req);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }

}

module.exports = new PhotoController(photoService);