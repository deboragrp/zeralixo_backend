const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.json());

app.use(routes);

mongoose
  .connect(
    "mongodb+srv://admin:admin@zeralixodb.wjwm1.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MongoDB CONECTADO com sucesso!");
  })
  .catch((error) => {
    console.log("ERRO ao conectar com o MongoDB!");
    console.log(error);
  });

app.listen(8080, () => {
  try {
    console.log("conectada");
  } catch (erro) {
    console.log("erro: ", erro);
  }
});
