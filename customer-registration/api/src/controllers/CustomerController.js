require("../db/mongoose");
const Customer = require("../model/Customer");

module.exports = {
  async create(req, res) {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).send(customer);
    } catch (e) {
      res.status(500).send();
    }
  }
};