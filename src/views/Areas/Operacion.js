import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col, Container } from 'reactstrap';

class Operacion extends Component {
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
                        <Nav.Link eventKey="1" className="text-white">Adherencia a dimensionamiento  </Nav.Link>
                      </Nav.Item>
                     
                    
                      <Nav.Item>
                        <Nav.Link eventKey="4" className="text-white"> Cobertura de Horas </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="5" className="text-white"> Retención de Supervisores</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="6" className="text-white"> Programa supervisores VIP </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="7" className="text-white"> Cobertura de Horas VIP </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="8" className="text-white"> Conexión de agentes VIP </Nav.Link>
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
                                    <Progress value={98} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={74} color="red" />
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
                                    <Progress value={100} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={99} color="red" />
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
                                    <Progress value={90} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={87} color="red" />
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
                                    <Progress value={80} text="8" color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={30} text="3" color="red" />
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
                                    <Progress value={10} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={6} color="red" />
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
                                    <Progress value={95} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={94} color="red" />
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
                        <Nav.Link eventKey="uno" className="text-white">Estratégico </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="dos" className="text-white">De resultado  </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="uno">
                        <Row className="pb-3">
                          <Col xs="6" className="text-left">
                            <h2 ><b></b></h2>
                          </Col>
                          <Col xs="6" className="">
                            <h2 ><b>Objetivo</b></h2>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Cobertura de Horas </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={100} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Penalizaciones por contrato </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={0} color="green" />
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="dos">
                        <Row className="pb-3">
                          <Col xs="6" className="text-left">
                            <h2 ><b></b></h2>
                          </Col>
                          <Col xs="6" className="">
                            <h1 ><b>Objetivo</b></h1>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Adherencia a dimensionamiento </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "75px" }}>
                              <Progress value={98} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Retención de Supervisores </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "75px" }}>
                              <Progress value={90} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Cobertura de Horas VIP </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "75px" }}>
                              <Progress value={10} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Conexión de agentes VIP </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "75px" }}>
                              <Progress value={95} color="green" />
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
        {/* <div className="slide">
          <div className="content">
            <Container>
              <Row>
                <Col xs="12">
                  <h2><b>Objetivos anuales 2021</b></h2>
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
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Capacitación para supervisores </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={12} text="12" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Capacitación para coordinadores </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={6} text="6" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Validación de Plantilla actualizada </h1>
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
 */}


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

export default Operacion;
