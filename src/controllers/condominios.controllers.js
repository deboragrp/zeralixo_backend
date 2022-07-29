const Condominio = require("../models/condominio.model");
const { update } = require("./moradores.controllers");

module.exports = {
  async index(req, res) {
    const user = await Condominio.find();
    res.json(user);
  },
  async create(req, res) {
    const { nome, email, cep, endereco, n_endereco, bairro, cidade, estado } =
      req.body;

    let data = {};

    let user = await Condominio.findOne({ email });

    if (!user) {
      data = { nome, email, cep, endereco, n_endereco, bairro, cidade, estado };

      user = await Condominio.create(data);

      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await Condominio.findOne({ _id });
    res.json(user);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const user = await Condominio.findByIdAndDelete({ _id });
    return res.json(user);
  },
  async update(req, res) {
    const {
      _id,
      nome,
      email,
      cep,
      endereco,
      n_endereco,
      bairro,
      cidade,
      estado,
    } = req.body;

    const data = { email };

    const user = await Condominio.findByIdAndUpdate({ _id }, data, {
      new: true,
    });

    res.json(user);
  },
};
