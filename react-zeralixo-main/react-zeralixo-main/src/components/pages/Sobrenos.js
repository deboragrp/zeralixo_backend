import React from "react";
import Navbar from "../layouts/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Deboraimg from "../../images/deboraimg.png";
import Hugoimg from "../../images/hugoimg.png";
import Giullyimg from "../../images/giullyimg.png";
import Deyseimg from "../../images/deyseimg.png";
import Img1 from "../../images/img1.png";
import Img3 from "../../images/img3.png";
import Img4 from "../../images/img4.png";

function Sobrenos() {
  return (
    <div>
      <Navbar />

      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">Features do ZeraLixo</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use href=""></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Moradores</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use href=""></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Tasks da Horta</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use href="#calendar3"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Sistema de Troca de pontos</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use href="#home"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Condomínios</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use href="#speedometer2"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Horta Vertical</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <svg
              class="bi text-muted flex-shrink-0 me-3"
              width="1.75em"
              height="1.75em"
            >
              <use href="#toggles2"></use>
            </svg>
            <div>
              <h4 class="fw-bold mb-0">Composteiras</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobrenos;
