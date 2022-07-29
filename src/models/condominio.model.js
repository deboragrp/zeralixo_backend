const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nome: String,
    email: String,
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
  if (!this.isModified("email")) {
    return next();
  }
  next();
});

const condominios = mongoose.model("Condominios", DataSchema);
module.exports = condominios;
