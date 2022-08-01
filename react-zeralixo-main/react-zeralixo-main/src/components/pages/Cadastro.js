import React from "react";
import Navbar from "../layouts/navbar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Cadastro() {
  return (
    <div>
      <Navbar />
      <form className="form-signin w-50 mt-5  m-auto pt-5 pb-5">
        <h3 className=" mb-3 text-center">Cadastre-se</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Nome completo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="ID do seu condomínio" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Função</Form.Label>
            <Form.Select defaultValue="Escolha...">
              <option>Escolha...</option>
              <option>Regar</option>
              <option>Colher</option>
              <option>Limpar</option>
              <option>Plantar</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Seu andar</Form.Label>
            <Form.Control type="number" placeholder="Escolha seu andar" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nº do apt</Form.Label>
            <Form.Control type="number" placeholder="Número do seu apt" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="CEP" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="Endereço" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="district"
              id="bairro"
              name="bairro"
              placeholder="Bairro"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Cidade" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Escolha">
              <option>Escolha...</option>
              <option>Acre</option>
              <option>Alagoas</option>
              <option>Amapá</option>
              <option>Amazonas</option>
              <option>Bahia</option>
              <option>Ceará</option>
              <option>Espírito Santo</option>
              <option>Goiás</option>
              <option>Maranhão</option>
              <option>Mato Grosso</option>
              <option>Mato Grosso do Sul</option>
              <option>Minas Gerais</option>
              <option>Pará</option>
              <option>Paraiba</option>
              <option>Pernambuco</option>
              <option>Piauí</option>
              <option>Rio de Janeiro</option>
              <option>Rio Grande do Norte</option>
              <option>Rio Grande do Sul</option>
              <option>Rondônia</option>
              <option>Roraima</option>
              <option>Santa Catarina</option>
              <option>São Paulo</option>
              <option>Sergipe</option>
              <option>Tocantins</option>
              <option>Distrito Federal</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-success">
            Cadastrar
          </button>
        </div>
        <p classNameName="forgot-password text-right">
          Já tem cadastro? <a href="/login">Entre aqui</a>
        </p>
      </form>
    </div>
  );
}
export default Cadastro;
