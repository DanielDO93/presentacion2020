import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
// import check from "../../assets/img/check.gif";
//import grafica from "../../assets/img/brand/grafica.png";
import home from "../../assets/img/home.png";
import { Row, Col, Container } from 'reactstrap';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

class Comercial extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                <h2><b>Objetivos anuales 2020</b></h2>
                  <h2><b>1er. Semestre vs. 2do. Semestre</b></h2>
                  <h2><b className=" top">KPI´s: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="1" className="text-white">Implementación en tiempo y forma  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="2" className="text-white">Seguimiento a la implementación  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="3" className="text-white"> Proceso de control de cambios </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="4" className="text-white"> Rediseño de ficha de implementación </Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="1">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={95} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={87} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={86} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={86.5} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={90} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={77} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={92} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={85} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={0} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={100} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={50} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={0} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={0} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={0} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                       
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Row>
            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className=" top">Cuantitativos: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="uno">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="uno" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="dos" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tres" className="text-white">De proceso</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cuatro" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="uno">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de proyectos en tiempo y forma </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={90} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="dos">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Seguimiento a implementación de proyectos </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tres">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Actualización y uso de aplicativo de implementación </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={100} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cuatro">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Medición de proceso de control de cambios </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de propuestas de valor agregado </h1>
                            </Col>
                            <Col xs="12" sm="6" md="4">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={90} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Comentarios</b></h2>
                              <h1>De las que apruebe el cliente </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Row>
            </Container>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b className=" top ">Cualitativos: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="seis">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white"> De proceso</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="siete" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Análisis de Dossier </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={0} text="binario" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="siete">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Metodología agile Scrum </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={0} text="binario" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>

                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
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
