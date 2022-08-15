const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    nome: String,
    email: String,
    senha: String,
    cep: String,
    endereco: String,
    n_endereco: String,
    bairro: String,
    cidade: String,
    estado: String,
  },
  {
    timestamps: true,
  }
);
DataSchema.pre("save", function (next) {
  if (!this.isModified("senha")) {
    return next();
  }
  this.senha = bcrypt.hashSync(this.senha, 10);
  next();
});

const condominios = mongoose.model("Condominios", DataSchema);
module.exports = condominios;
