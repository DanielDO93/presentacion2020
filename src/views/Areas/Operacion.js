import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col, Container } from 'reactstrap';

class Operacion extends Component {
  render() {
    return (
      <div className="section">
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
                          <Nav.Link eventKey="uno" className="text-white">De resultado  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="dos" className="text-white">Estratégico  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tres" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cuatro" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="siete" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="ocho" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="nueve" className="text-white">Estratégico </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="uno">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Adherencia a dimensionamiento </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={98} color="green" />
                            </Col>
                           

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="dos">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Cobertura de Horas </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={100} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tres">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Retención de Supervisores</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={90} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cuatro">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Programa superivsores VIP</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={8} text="8" color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Cobertura de Horas VIP</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={10} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Conexión de agentes VIP</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="siete">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Programación y adherencia de agentes VIP</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ocho">
                          <Row>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Certificación staff mensual</h1>
                            </Col>
                            <Col xs="12" sm="6" md="4">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={90} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Comentarios</b></h2>
                              <h1>90% del personal apruebe con 90% de calificación </h1>
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="nueve">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Penalizaciones por contato</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

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
                  <h2><b className=" top ">Cualitativos: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="cuatro">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="cuatro" className="text-white"> De proceso</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">De proceso</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">De proceso</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="cuatro">
                          <Row>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Capacitación para supervisores </h1>
                            </Col>
                            <Col xs="12" sm="6" md="4">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={12} text="12" color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Comentarios</b></h2>
                              <h1>12 cursos anuales </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Capacitación para coordinadores </h1>
                            </Col>
                            <Col xs="12" sm="6" md="4">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={6} text="6" color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Comentarios</b></h2>
                              <h1>6 cursos anuales </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Validación de Plantilla actualizada </h1>
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

export default Operacion;
