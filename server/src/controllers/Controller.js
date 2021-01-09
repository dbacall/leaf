class Controller {
  constructor(service) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getAllById = this.getAllById.bind(this);
    this.getCurrent = this.getCurrent.bind(this);
  }

  async getAll(req, res) {
    return res.status(200).send(await this.service.getAll(req.query));
  }

  async getAllById(req, res) {
    let response = await this.service.getAllById(req);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response.data);
  }

  async getCurrent(req, res) {
    let response = await this.service.getCurrent(req.params);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response.data);
  }

  async create(req, res) {
    let response = await this.service.create(req.body);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }

  async update(req, res) {
    const { id } = req.params;

    let response = await this.service.update(id, req.body);

    return res.status(response.statusCode).send(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    let response = await this.service.delete(id);

    return res.status(response.statusCode).send(response);
  }
}

module.exports = Controller;
