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
            <h1 className="title2">Operación</h1>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Adherencia a dimensionamiento</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={98} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={73}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-25} color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Retención</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={90} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={85}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-5} color="green" />
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
                  <Progress value={93}  color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Cobertura de Horas</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={100} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={100}  color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Retención de Supervisores</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={90} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={77}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-13} color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Programa superivsores VIP</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={8} text="8" color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={2} text="2" color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-6} text="-6" color="red" />
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
                  <h2><b className="border border-right-0   border-darck">Cobertura de Horas</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={10} text="10" color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={6} text="6"  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-4} text="-4" color="red" />
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
                  <h2><b className="border border-right-0   border-darck">Conexión de agentes VIP</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={95} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={94}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-1}  color="red" />
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
                  <h2><b className="border border-right-0   border-darck">Crecimiento de 20% en 80% de campañas</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={80} color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={14}  color="red" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-66.36}  color="red" />
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
                cursor:"pointer",
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
