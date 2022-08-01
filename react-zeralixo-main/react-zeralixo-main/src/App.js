import React, { element } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/Footer";
// React Router Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import Pages
import Home from "./components/pages/Home";
import Sobrenos from "./components/pages/Sobrenos";
import Contato from "./components/pages/Contato";
import Comofunciona from "./components/pages/Comofunciona";
import Cadcondominio from "./components/pages/Cadcondominio";
import Estag_cad from "./components/pages/Estag_cad";
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";
import Esquecisenha from "./components/pages/Esquecisenha";
import Perfil from "./components/pages/Perfil";
import Tasks from "./components/pages/Tasks";
import Trocapts from "./components/pages/Trocapts";
import Redefinirsenha from "./components/pages/Redefinirsenha";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/comofunciona" element={<Comofunciona />} />
          <Route path="/cadcondominio" element={<Cadcondominio />} />
          <Route path="/estagiodocad" element={<Estag_cad />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/esqueciminhasenha" element={<Esquecisenha />} />
          <Route path="/redefinirsenha" element={<Redefinirsenha />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/trocadepts" element={<Trocapts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
