import React from "react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "../../images/condimage.png";

function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <div className=" mt-5 pt-5">
              <h1
                className="banner-title "
                style={{
                  fontWeight: "bold",
                  fontSize: "45px",
                }}
              >
                Transforme o seu lixo orgânico em vida!
              </h1>
              <p className="banner-description">
                O lixo orgânico que você produz contribui para um menor tempo
                <br /> de vida na terra. Mas o seu condomínio pode fazer
                diferente.
              </p>
              <Button className="buttonCond" variant="success">
                Quero no meu condominio
              </Button>
            </div>
          </Col>
          <Col>
            <div className=" mt-4 pt-4">
              <img src={Image} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
