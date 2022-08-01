import React from "react";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 " href="#">
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/"
              >
                Home <i class="fa-solid fa-house"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/sobrenos"
              >
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/comofunciona"
              >
                Como Funciona
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/contato"
              >
                Contato
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline-light me-1"
            onClick={() => navigate("/cadastro")}
            aria-current="page"
          >
            Cadastre-se
          </button>
          <button
            className="btn btn-success me-5"
            onClick={() => navigate("/login")}
            aria-current="page"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
