const ListMoradores = require("../models/listMoradores.model");

module.exports = {
  async create(req, res) {
    const { _id_cond, _id_morador, nome_morador, email_morador } = req.body;
    let data = {};
    let list = await ListMoradores.findOne({ _id_morador });

    if (!list) {
      data = { _id_cond, _id_morador, nome_morador, email_morador };

      list = await ListMoradores.create(data);

      return res.status(201).json(list);
    } else {
      return res.status(500).json(list);
    }
  },
  async mostrarConexoesCond(req, res) {
    const { _id_cond } = req.params;

    const user = await ListMoradores.find({ _id_cond });
    if (user == null) {
      return res.status(404);
    } else {
      return res.status(200).json(user);
    }
  },
};
