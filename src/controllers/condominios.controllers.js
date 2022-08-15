const Condominio = require("../models/condominio.model");
const { update } = require("./moradores.controllers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async index(req, res) {
    const user = await Condominio.find();
    res.json(user);
  },
  async create(req, res) {
    const {
      nome,
      email,
      senha,
      cep,
      endereco,
      n_endereco,
      bairro,
      cidade,
      estado,
    } = req.body;

    let data = {};

    let user = await Condominio.findOne({ email });

    if (!user) {
      data = {
        nome,
        email,
        senha,
        cep,
        endereco,
        n_endereco,
        bairro,
        cidade,
        estado,
      };

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

  async login(req, res) {
    //login
    const { email, senha } = req.body;
    console.log(senha);
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }

    if (!senha) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
    //check if user exists
    const user = await Condominio.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    //check if password match
    const checkPassword = await bcrypt.compare(senha, user.senha);

    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida!" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      res
        .status(200)
        .json({ msg: "Autenticação realizada com sucesso!", token });
    } catch (err) {
      console.log(err);

      res.status(500).json({
        msg: "Aconteceu um erro no servidor, tente novamente mais tarde!",
      });
    }
  },
};
