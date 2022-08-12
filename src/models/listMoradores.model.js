const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema(
  {
    _id_morador: String,
    _id_cond: String,
    nome_morador: String,
    email_morador: String,
  },
  {
    timestamps: true,
  }
);

const listMoradores = mongoose.model("ListMoradores", DataSchema);
module.exports = listMoradores;
