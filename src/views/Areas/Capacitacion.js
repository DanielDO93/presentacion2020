import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
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
                  <h2><b>Resultados  2020</b></h2>
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
                          <Nav.Link eventKey="1" className="text-white">Retención en aula  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="2" className="text-white">Retención en piso  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="3" className="text-white"> Certificar al personal </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="4" className="text-white"> Cobertura de HO </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="5" className="text-white"> Registrar a instructores en STPS</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="6" className="text-white"> Registrar a cursos en STPS </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="7" className="text-white"> Participación E-Learning </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="8" className="text-white"> Participación Microlearning </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="9" className="text-white"> Ejecución de encuestas de clima </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="10" className="text-white"> Universidad CCS y retención </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="11" className="text-white"> Registrar a cursos Universidad en STPS </Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="1">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={91} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={86} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={93} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={90} color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={91} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={92} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={94} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={93} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={90} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={86} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={91} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={89} color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={90} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={81} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={95} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={88} color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={33} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={0} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={17} color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={7} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={0} text="Pendiente" color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={4} text="Pendiente" color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="7">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={50} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={28} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={57}  color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={43}  color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="8">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={50} color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={19} color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={43}  color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={31}  color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="9">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} text="SI" color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={100} text="NO" color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={100} text="SI" color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={100} text="N/A" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="10">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={80}  color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={100}  color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={80}  color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={90} t color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="11">
                          <Row>
                            <Col xs="12" sm="6" md="3" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100}  color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2> Real 1er. Semestre</h2>
                              <Progress value={50}  color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2>Real 2do. Semestre</h2>
                              <Progress value={0}  color="red" />
                            </Col>
                            <Col xs="12" sm="6" md="3">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={25} t color="red" />
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
                <h2><b>Objetivos anuales 2021</b></h2>
                  <h2><b className=" top">Cuantitativos: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="uno">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="uno" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="dos" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tres" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cuatro" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="siete" className="text-white">Estratégico </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="ocho" className="text-white">Estratégico </Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="uno">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Retención en aula </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={91} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="dos">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Retención en piso y home office </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={91} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tres">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Certificación del personal </h1>
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
                              <h1>Cobertura de Habilidades Operativas agentes </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Cobertura de Habilidades Operativas staff </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={80} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Certificación staff trimestral con cliente </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={90} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="siete">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>E-Learning </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={80} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ocho">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Microlearning </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={80} color="green" />
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
                <h2><b>Objetivos anuales 2021</b></h2>
                  <h2><b className=" top ">Cualitativos: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="nueve">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="nueve" className="text-white"> De proceso</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="diez" className="text-white">De proceso</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="once" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="doce" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="trece" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="catorce" className="text-white">De proceso</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="quince" className="text-white">De proceso</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="nueve">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Registrar a cursos en STPS </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="diez">
                          <Row>
                            <Col xs="12" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Registrar a instructores en STPS </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="once">
                          <Row>
                            <Col xs="12"  >
                              <h2><b>Objetivo</b></h2>
                              <h1>Programa de gamificación </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="doce">
                          <Row>
                            <Col xs="12"  >
                              <h2><b>Objetivo</b></h2>
                              <h1>Modelo de capacitación con base en fortalezas y competencias </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="trece">
                          <Row>
                            <Col xs="12"  >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de Programa onboarding / inducción staff </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="catorce">
                          <Row>
                            <Col xs="12"  >
                              <h2><b>Objetivo</b></h2>
                              <h1>Continuidad a programa Universidad CCS </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="quince">
                          <Row>
                            <Col xs="12" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Metodología de Capacitación Taxonomía de Bloom </h1>
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
