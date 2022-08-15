const express = require("express");
const Morador = require("./controllers/moradores.controllers");
const Condominio = require("./controllers/condominios.controllers");
const Prodhorta = require("./controllers/prodshorta.controllers");
const Task = require("./controllers/tasks.controllers");
const ListMoradores = require("./controllers/listmoradores.controllers");
const jwt = require("jsonwebtoken");
const routes = express.Router();

function checkToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado!" });
  }

  try {
    const secret = process.env.SECRET;
    jwt.verify(token, secret, (error, decode) => {
      if (error) {
        return res.status(400).json({ msg: "Token Inválido" });
      } else {
        req.id = decode.id;
        next();
      }
    });
  } catch (err) {
    res.status(400).json({ msg: "Token inválido!" });
  }
}

//routes do morador
routes.get("/api/moradores", Morador.index);
routes.get("/api/moradores.details/:_id", checkToken, Morador.details);
routes.post("/api/moradores", Morador.create);
routes.delete("/api/moradores/:_id", checkToken, Morador.delete);
routes.put("/api/moradores", checkToken, Morador.update);
routes.post("/api/auth/login", Morador.login);
routes.get("/api/perfil/:_id", checkToken, Morador.perfil);

//routes do condominio
routes.get("/api/condominios", Condominio.index);
routes.get("/api/condominios.details/:_id", Condominio.details);
routes.post("/api/condominios", Condominio.create);
routes.delete("/api/condominios/:_id", Condominio.delete);
routes.put("/api/condominios", Condominio.update);
routes.post("/api/auth/logincond", Condominio.login);

//routes dos produtos da horta
routes.get("/api/prodshorta", Prodhorta.index);
routes.get("/api/prodshorta.details/:_id", Prodhorta.details);
routes.post("/api/prodshorta", Prodhorta.create);
routes.delete("/api/prodshorta/:_id", Prodhorta.delete);
routes.put("/api/prodshorta", Prodhorta.update);

//routes tasks
routes.get("/api/tasks", Task.index);
routes.post("/api/tasks/create", Task.create);
routes.get("/api/tasks", Task.taskByID);
routes.delete("/api/tasks/delete/:_id", Task.deleteTask);

//routes lista de moradores
routes.post("/api/listademoradores", ListMoradores.create);
routes.get(
  "/api/listademoradores/:_id_cond",
  checkToken,
  ListMoradores.mostrarConexoesCond
);

module.exports = routes;
