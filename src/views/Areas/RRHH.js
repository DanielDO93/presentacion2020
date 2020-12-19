import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
import { Row, Col, Container } from 'reactstrap';

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <h1 className="title2">RRHH</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Reclutamiento QA</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={100} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={100} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={100} color="green" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Reclutamiento Cobertura</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={90} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={97} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={7} color="red" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Personal mayor &gt; 40</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={20} color="red" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={13} color="red" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-7.5} color="red" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Pre-sentismo</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={90} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={93} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={3} color="green" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Sistema de evaluación</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={100} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={50} color="red" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={50} color="red" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Adherencia a la solicitud</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={95} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={0} color="red" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={0} color="red" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <img
              onClick={() => (window.location.href = "/#Indice")}
              src={home}
              alt=""
              style={{
                width: "15%",
                cursor: "pointer",
                filter:
                  "invert(100%) sepia(0%) saturate(7500%) hue-rotate(12deg) brightness(104%) contrast(103%) opacity(65%)"
              }}
              className="zoom"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Comercial;
