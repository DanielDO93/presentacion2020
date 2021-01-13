import React, { Component } from "react";
import "../../index.css";
import "react-circular-progressbar/dist/styles.css";
// import check from "../../assets/img/check.gif";
import Progress from "../Components/Progress";
//import { BarChart } from "../Components/Graphics";
import home from "../../assets/img/home.png";
import {
  Col, Container, Row,
} from 'reactstrap';

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
                  <h2><b className="top">KPI´s: </b></h2>
                </Col>
              </Row>

              <Tab.Container id="left-tabs-example" defaultActiveKey="1" >
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)", width: "100%", }}>
                      <Nav.Item>
                        <Nav.Link eventKey="1" className="text-white">Contratos  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2" className="text-white">Estaciones nuevas  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3" className="text-white"> Leads globales </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4" className="text-white"> Leads perfilados </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)", width: "100%" }}>
                      <Tab.Pane eventKey="1" style={{ width: "100%" }}>
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
                                    <Progress value={90} color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={80} color="red" />
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
                                    <Progress value={450} text="450" color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={0.43} text="43" color="red" />
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
                                    <Progress value={420} text="420" color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={0.41} text="41" color="red" />
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
                                    <Progress value={240} text="240" color="green" />
                                  </div>
                                ) : (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                      <Progress value={0.24} text="24" color="red" />
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
                        <Nav.Link eventKey="uno" className="text-white">Estratégico</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="dos" className="text-white">De resultado</Nav.Link>
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
                            <h1 className="pl-3 ">Actualización de precios y condiciones comerciales </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={80} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Estaciones nuevas</h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={407} text="407" color="green" />
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
                            <h1 className="pl-3 ">Contratos firmados en tiempo y forma </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={80} color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Leads globales </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={420} text="420" color="green" />
                            </div>
                          </Col>
                        </Row>
                        <Row className="pb-3">
                          <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                            <h1 className="pl-3 ">Leads Perfilados </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6" className="centrado-fila">
                            <div style={{ width: "90px" }}>
                              <Progress value={440} text="440" color="green" />
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
              <Tab.Container id="left-tabs-example" defaultActiveKey="nueve">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="nueve" className="text-white">Estratégico</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="trece" className="text-white">De resultado</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="nueve">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Estrategia de marketing digital global (interna / clientes) </h1>
                            <h1>Rediseño de página CCS y presentación comercial</h1>
                          </Col>
                        </Row>
                      </Tab.Pane>


                      <Tab.Pane eventKey="trece">
                      <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Red comercial y alianzas</h1>
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
                cursor: "pointer",
                width: "200px",
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
