const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    nome: String,
    nascimento: String,
    cpf: String,
    email: String,
    senha_idcond: String,
    andar: Number,
    n_apt: String,
    bloco: String,
    cep: String,
    endereco: String,
    n_endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
    funcao: String,
  },
  {
    timestamps: true,
  }
);

DataSchema.pre("save", function (next) {
  if (!this.isModified("senha_idcond")) {
    return next();
  }
  this.senha_idcond = bcrypt.hashSync(this.senha_idcond, 10);
  next();
});

const moradores = mongoose.model("Moradores", DataSchema);
module.exports = moradores;
