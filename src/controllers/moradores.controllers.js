const Morador = require("../models/morador.model");

module.exports = {
  index(req, res) {
    const user = Morador.find();
    res.json(user);
  },
  async create(req, res) {
    const {
      nome,
      nascimento,
      cpf,
      email,
      senha_idcond,
      andar,
      n_apt,
      bloco,
      cep,
      endereco,
      n_endereco,
      bairro,
      cidade,
      estado,
      funcao,
    } = req.body;

    let data = {};

    let user = await Morador.findOne({ email });

    if (!user) {
      data = {
        nome,
        nascimento,
        cpf,
        email,
        senha_idcond,
        andar,
        n_apt,
        bloco,
        cep,
        endereco,
        n_endereco,
        bairro,
        cidade,
        estado,
        funcao,
      };

      user = await Morador.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
  details(req, res) {
    const { _id } = req.params;
    const user = Morador.find({ _id: id });
    res.json(user);
  },

  async delete(req, res) {
    const { _id } = req.params;
    const user = await Morador.findByIdAndDelete({ _id });
    return res.json(user);
  },
  async update(req, res) {
    const {
      _id,
      nome,
      nascimento,
      cpf,
      email,
      senha_idcond,
      andar,
      n_apt,
      bloco,
      cep,
      endereco,
      n_endereco,
      bairro,
      cidade,
      estado,
      funcao,
    } = req.body;

    const data = { nome, email, funcao };

    const user = await Morador.findByIdAndUpdate({ _id }, data, { new: true });

    res.json(user);
  },
};
