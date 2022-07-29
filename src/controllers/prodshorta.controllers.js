const Prodhorta = require("../models/prodhorta.model");

module.exports = {
  async index(req, res) {
    const product = await Prodhorta.find();
    res.json(product);
  },
  async create(req, res) {
    const { nome_prod, descricao_prod, pontos_prod, qtd_prod } = req.body;

    let data = {};

    let product = await Prodhorta.findOne({ nome_prod });

    if (!product) {
      data = { nome_prod, descricao_prod, pontos_prod, qtd_prod };

      product = await Prodhorta.create(data);

      return res.status(200).json(product);
    } else {
      return res.status(500).json(product);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const product = await Prodhorta.findOne({ _id });
    res.json(product);
  },
  async delete(req, res) {
    const { _id } = req.params;
    const product = await Prodhorta.findByIdAndDelete({ _id });
    return res.json(product);
  },
  async update(req, res) {
    const { _id, nome_prod, descricao_prod, pontos_prod, qtd_prod } = req.body;

    const data = { descricao_prod, pontos_prod, qtd_prod };

    const product = await Prodhorta.findByIdAndUpdate({ _id }, data, {
      new: true,
    });

    res.json(product);
  },
};
