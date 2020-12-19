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
            <h1 className="title2">Calidad</h1>
          </div>
        </div>
        
        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className="border border-right-0   border-darck">Días en meta</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={80}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={80}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-0.17} color="red" />
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
                  <h2><b className="border border-right-0   border-darck">Monitoreos en tiempo</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={95}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={98}  color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Cobertura de monitoreo</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={100}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={98}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-2} color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Retroalimentaciones en tiempo</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={95}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={97}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-1.60} color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Nota de Calidad global</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={90}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={94}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={-3.86} color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Resultado de calibración</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={3} text="+3"  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={0}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={0} color="green" />
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
                  <h2><b className="border border-right-0   border-darck">Cumplimiento de Clínica de Calidad en plantilla</b></h2>
                </Col>
                <Col xs="12" sm="6" md="4" >
                  <h2>Objetivo  </h2>
                  <Progress value={100}   color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2> Real</h2>
                  <Progress value={0}  color="green" />
                </Col>
                <Col xs="12" sm="6" md="4">
                  <h2>% Alcance</h2>
                  <Progress value={0} color="green" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      
        <div className="slide">
          <div className="content">
            {/*<h1 className="title2" onClick={() => (window.location.href = "/#Indice")}> Gracias</h1>*/}
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
