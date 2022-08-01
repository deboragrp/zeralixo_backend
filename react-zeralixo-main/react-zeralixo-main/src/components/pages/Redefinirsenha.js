import React from "react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function Redefinirsenha() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <form className="form-signin w-25 mt-5  m-auto pt-5 ">
        <h3 className=" mb-4 text-center">Redefinição de senha</h3>
        <>
          {["success"].map((variant) => (
            <Alert className="text-center" key={variant} variant={variant}>
              Um email com sua senha
              <br />
              foi enviado para o email informado!
            </Alert>
          ))}
        </>

        <h6 className=" mb-4 text-center">
          Por favor, insira no campo abaixo a senha que você recebeu por e-mail
          e redefina a senha.
        </h6>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Insira senha recebida"
          />
        </div>
        <div className="d-grid mb-3">
          <button
            type="submit"
            className="btn btn-success"
            onClick={() => navigate("/redefinirsenha")}
          >
            Redefinir
          </button>
        </div>
      </form>
    </div>
  );
}
export default Redefinirsenha;
