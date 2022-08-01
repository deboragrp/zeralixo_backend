import React from "react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";

function Esquecisenha() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <form className="form-signin w-25 mt-5  m-auto pt-5 ">
        <h3 className=" mb-4 text-center">Redefinição de senha</h3>
        <h6 className=" mb-3 text-center">
          Digite seu e-mail no campo abaixo e lhe enviaremos uma nova senha.
        </h6>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => navigate("/redefinirsenha")}
          >
            Entrar
          </button>
        </div>
        <p className="forgot-password text-right">
          Já tem cadastro? <a href="/login">Entre aqui</a>
        </p>
      </form>
    </div>
  );
}
export default Esquecisenha;
