import React from "react";

import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";

function Login() {
  return (
    <div>
      <Navbar />
      <form className="form-signin w-25 mt-5  m-auto pt-5 ">
        <h3 className=" mb-3 text-center">Login</h3>
        <div className="mb-3">
          <label>Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="ID do seu condomínio"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox ">
            <input
              type="checkbox"
              className="custom-control-input me-2"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Lembrar de mim
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Entrar
          </button>
        </div>
        <p className="forgot-password text-right">
          Esqueceu a <a href="/esqueciminhasenha">senha?</a>
        </p>
      </form>
    </div>
  );
}
export default Login;
