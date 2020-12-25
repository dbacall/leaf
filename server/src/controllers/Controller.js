class Controller {
  constructor(service) {
    this.service = service;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    return res.status(200).send(await this.service.getAll(req.query));
  }

  async create(req, res) {
    let response = await this.service.create(req.body);
    // .then((item) => {
    //   res.status(200).json({ success: true, item });
    // })
    // .catch(() => {
    //   res.status(400).json({
    //     success: false,
    //     error: 'Could not be saved to database.',
    //   });
    // });
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
