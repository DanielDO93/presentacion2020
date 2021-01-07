import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
import { Row, Col, Container } from 'reactstrap';

import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

// quitar binarios(), quitar De proceso, y comentarios.

class TI extends Component {
  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b>Resultados  2020</b></h2>
                  <h2><b>1er. Semestre vs. 2do. Semestre</b></h2>
                  <h2><b className=" top">KPI´s: </b></h2>
                </Col>
              </Row>
              <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="1" className="text-white">Cierre de tickets dentro de SLA Desarrollo  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2" className="text-white">Reportes plataforma CCS  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3" className="text-white"> Desarrollos con reporte estándar </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4" className="text-white"> % de cierre de tickets SLA Soporte </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="5" className="text-white"> Aplicativo CCS 2.0</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="6" className="text-white"> Alertas en Aplicación *en espera por migración </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="7" className="text-white"> Módulo E-Learning </Nav.Link>
                      </Nav.Item>

                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="1">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={90} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={86} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={100} color="green" />
                          </Col>
                        
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={53} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="3">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={50} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={66} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="4">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={95} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={96} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="5">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={100} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={81} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="6">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={100} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={0} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="7">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={50} color="green" />
                          </Col>
                        
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={84} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>


                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

            </Container>
          </div>
        </div>

        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b>Objetivos anuales 2021</b></h2>
                  <h2><b className=" top">Cuantitativos: </b></h2>
                </Col>
              </Row>

              <Tab.Container id="left-tabs-example" defaultActiveKey="uno">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="uno" className="text-white">De resultado  </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="tres" className="text-white">De resultado </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="cuatro" className="text-white">Estratégico </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="cinco" className="text-white">Estratégico </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="uno">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Cierre de tickets dentro de SLA Desarrollo </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>

                            <Progress value={90} color="green" />
                          </Col>


                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="tres">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>% de cierre de tickets SLA Soporte</h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>

                            <Progress value={95} color="green" />
                          </Col>

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="cuatro">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>API Dashboards real time</h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>

                            <Progress value={100} color="green" />
                          </Col>

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="cinco">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Reactivación de app CCS</h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>

                            <Progress value={100} color="green" />
                          </Col>

                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

            </Container>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b>Objetivos anuales 2021</b></h2>
                  <h2><b className=" top ">Cualitativos: </b></h2>
                </Col>
              </Row>
              <Tab.Container id="left-tabs-example" defaultActiveKey="seis">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="seis" className="text-white"> Estratégico</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="diez" className="text-white">De resultado</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="once" className="text-white">De resultado</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="trece" className="text-white">Estratégico</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="seis">
                        <Row>
                          <Col xs="12" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Autogestión en plataforma omnicanal </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>



                      <Tab.Pane eventKey="diez">
                        <Row>
                          <Col xs="12" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Revisión de Bitácora de fallas y niveles de servicio Convertía </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="once">
                        <Row>
                          <Col xs="12" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Revisión de Bitácora de fallas y niveles de servicio TKM </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="trece">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Capacitación y cursos de nuevas tecnologías </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

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

export default TI;
