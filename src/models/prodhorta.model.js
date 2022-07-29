const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nome_prod: String,
    descricao_prod: String,
    pontos_prod: Number,
    qtd_prod: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const prodshorta = mongoose.model("Prodshorta", DataSchema);
module.exports = prodshorta;
