const Morador = require("../models/morador.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async index(req, res) {
    const user = await Morador.find();
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
      seg,
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
        seg,
      };

      user = await Morador.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
  async details(req, res) {
    const { _id } = req.params;
    const user = await Morador.findOne({ _id });
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
  async login(req, res) {
    //login
    const { email, senha_idcond } = req.body;

    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }

    if (!senha_idcond) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
    //check if user exists
    const user = await Morador.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    //check if password match
    const checkPassword = await bcrypt.compare(senha_idcond, user.senha_idcond);

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
  async perfil(req, res) {
    const _id = req.params._id;

    //check if user exists
    const user = await Morador.findById(_id, "-senha_idcond");

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    res.status(200).json({ user });
  },
};
