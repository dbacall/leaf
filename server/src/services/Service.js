const mongoose = require('mongoose');

class Service {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getAllById = this.getAllById.bind(this);
  }

  async getAll(query) {
    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        console.log('not able to generate mongoose id with content', query._id);
      }
    }

    try {
      let items = await this.model.find(query);

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

  async getAllById(query) {
    try {
      const items = await this.model.find({
        [query.params.idType]: query.params.id,
      });
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

  async create(data) {
    const newItem = new this.model(data);
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

  async update(id, data) {
    try {
      let item = await this.model.findByIdAndUpdate(id, data, { new: true });
      return {
        error: false,
        statusCode: 202,
        data: item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error,
      };
    }
  }

  async delete(id) {
    try {
      let item = await this.model.findByIdAndDelete(id);
      if (!item)
        return {
          error: true,
          statusCode: 404,
          message: 'item not found',
        };

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        data: item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 500,
        error,
      };
    }
  }
}

module.exports = Service;
