const express = require("express");
const Morador = require("./controllers/moradores.controllers");
const Condominio = require("./controllers/condominios.controllers");
const routes = express.Router();

//routes do morador
routes.get("/api/moradores", Morador.index);
routes.get("/api/moradores.details", Morador.details);
routes.post("/api/moradores", Morador.create);
routes.delete("/api/moradores/:_id", Morador.delete);
routes.put("/api/moradores", Morador.update);

//routes do condominio
routes.post("/api/condominios", Condominio.create);
routes.delete("/api/condominios/:_id", Condominio.delete);

routes.put("/api/condominios", Condominio.update);

module.exports = routes;
