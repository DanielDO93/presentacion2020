import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
import { Row, Col, Container } from 'reactstrap';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

class Comercial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress1: true,
      progress2: true,
      progress3: true,
      progress4: true,
      progress5: true,
      progress6: true,
      progress7: true,
      progress8: true,
      progress9: true,
      progress10: true,
      progress11: true,
    };
  }

  render() {
    return (
      <div className="section">
        <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b>Resultados  2020</b></h2>
                  <h2><b className=" top">KPI´s: </b></h2>
                </Col>
              </Row>

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
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress1: false })}
                              onMouseLeave={() => this.setState({ progress1: true })}>
                              {
                                this.state.progress1 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={91} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={93} color="green" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress2: false })}
                              onMouseLeave={() => this.setState({ progress2: true })}>
                              {
                                this.state.progress2 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={91} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={94} color="green" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="3">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress3: false })}
                              onMouseLeave={() => this.setState({ progress3: true })}>
                              {
                                this.state.progress3 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={90} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={91} color="green" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="4">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress4: false })}
                              onMouseLeave={() => this.setState({ progress4: true })}>
                              {
                                this.state.progress4 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={90} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={95} color="red" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="5">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress5: false })}
                              onMouseLeave={() => this.setState({ progress5: true })}>
                              {
                                this.state.progress5 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={100} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={33} color="red" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="6">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress6: false })}
                              onMouseLeave={() => this.setState({ progress6: true })}>
                              {
                                this.state.progress6 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={100} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={7} color="red" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="7">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress7: false })}
                              onMouseLeave={() => this.setState({ progress7: true })}>
                              {
                                this.state.progress7 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={50} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={57} color="green" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="8">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress8: false })}
                              onMouseLeave={() => this.setState({ progress8: true })}>
                              {
                                this.state.progress8 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={50} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={43} color="red" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="9">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress9: false })}
                              onMouseLeave={() => this.setState({ progress9: true })}>
                              {
                                this.state.progress9 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={100} text="Si" color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={100} text="Si" color="green" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="10">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress10: false })}
                              onMouseLeave={() => this.setState({ progress10: true })}>
                              {
                                this.state.progress10 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={80} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={80} color="green" />
                                    </div>
                                  )
                              }
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="11">
                        <Row >
                          <Col xs="12" className="centrado-fila" >
                            <div
                              className=""
                              style={{ cursor: "pointer", width: "200px" }}
                              onMouseEnter={() => this.setState({ progress11: false })}
                              onMouseLeave={() => this.setState({ progress11: true })}>
                              {
                                this.state.progress11 ? (
                                  <div className="text-white" >
                                    <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                    <Progress value={100} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={50} color="red" />
                                    </div>
                                  )
                              }
                            </div>
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
                        <Nav.Link eventKey="uno" className="text-white">De resultado </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="dos" className="text-white">Estratégico </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="uno">
                        <Row className="pb-3">
                          <Col xs="6" className="text-left">
                            <h2 ><b>Objetivo</b></h2>
                          </Col>
                          <Col xs="6" className="">
                            <h2 ><b>Objetivo</b></h2>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">E-Learning  </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={80} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Microlearning  </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={80} color="green" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="dos">
                        <Row className="pb-3">
                          <Col xs="6" className="text-left">
                            <h2 ><b>Objetivo</b></h2>
                          </Col>
                          <Col xs="6" className="">
                            <h2 ><b>Objetivo</b></h2>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Retención en aula  </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={91} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Retención en piso y home office  </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={91} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Cobertura de Habilidades Operativas agentes  </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={95} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Cobertura de Habilidades Operativas staff   </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={80} color="green" />
                            </div>
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

              <Tab.Container id="left-tabs-example" defaultActiveKey="once">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                      <Nav.Item>
                        <Nav.Link eventKey="once" className="text-white">Estratégico</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                      <Tab.Pane eventKey="once">
                        
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Programa de gamificación </h1>
                            <h1>Modelo de capacitación con base en fortalezas y competencias </h1>
                            <h1>Implementación de Programa onboarding / inducción staff </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="doce">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                           
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="trece">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            
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

export default Comercial;
