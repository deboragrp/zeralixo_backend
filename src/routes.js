const express = require("express");
const Morador = require("./controllers/moradores.controllers");
const Condominio = require("./controllers/condominios.controllers");
const Prodhorta = require("./controllers/prodshorta.controllers");
const routes = express.Router();

//routes do morador
routes.get("/api/moradores", Morador.index);
routes.get("/api/moradores.details/:_id", Morador.details);
routes.post("/api/moradores", Morador.create);
routes.delete("/api/moradores/:_id", Morador.delete);
routes.put("/api/moradores", Morador.update);

//routes do condominio
routes.get("/api/condominios", Condominio.index);
routes.get("/api/condominios.details/:_id", Condominio.details);
routes.post("/api/condominios", Condominio.create);
routes.delete("/api/condominios/:_id", Condominio.delete);
routes.put("/api/condominios", Condominio.update);

//routes dos produtos da horta
routes.get("/api/prodshorta", Prodhorta.index);
routes.get("/api/prodshorta.details/:_id", Prodhorta.details);
routes.post("/api/prodshorta", Prodhorta.create);
routes.delete("/api/prodshorta/:_id", Prodhorta.delete);
routes.put("/api/prodshorta", Prodhorta.update);

module.exports = routes;
