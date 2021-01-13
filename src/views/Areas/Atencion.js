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


class Atencion extends Component {
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
                  <h2><b className=" top">KPI´s: </b></h2>
                </Col>
              </Row>
              <Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="1" className="text-white">Satisfacción del cliente  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="2" className="text-white">Células de trabajo  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="3" className="text-white"> Solución Multicanal </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="4" className="text-white"> Cobranza temprana </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="5" className="text-white"> Quejas de cliente </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="6" className="text-white"> Crecimiento de cuentas </Nav.Link>
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
                                      <Progress value={90} color="green" />
                                    </div>
                                  ) : (
                                      <div className="text-white" >
                                        <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                        <Progress value={60}  color="red" />
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
                                      <Progress value={100} color="green" />
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
                                      <Progress value={100}  color="green" />
                                    </div>
                                  ) : (
                                      <div className="text-white" >
                                        <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                        <Progress value={83}  color="red" />
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
                                        <Progress value={62} color="red" />
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
                                onMouseEnter={() => this.setState({ progress4: false })}
                                onMouseLeave={() => this.setState({ progress4: true })}>
                                {
                                  this.state.progress4 ? (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                      <Progress value={0}  color="red" />
                                    </div>
                                  ) : (
                                      <div className="text-white" >
                                        <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                        <Progress value={0} text=" " color="red" />
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
                                onMouseEnter={() => this.setState({ progress4: false })}
                                onMouseLeave={() => this.setState({ progress4: true })}>
                                {
                                  this.state.progress4 ? (
                                    <div className="text-white" >
                                      <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                                      <Progress value={50} color="green" />
                                    </div>
                                  ) : (
                                      <div className="text-white" >
                                        <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                                        <Progress value={15} color="red" />
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
              <Tab.Container id="left-tabs-example" defaultActiveKey="uno">

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
                          <h1 className="pl-3 ">Retención de clientes </h1>
                        </Col>
                        <Col xs="12" sm="6" md="6" className="centrado-fila">
                          <div style={{ width: "90px" }}>
                            <Progress value={100} color="green" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center">
                          {/* <h2><b>Objetivo</b></h2> */}
                          <h1 className="pl-3">Crecimiento de las cuentas </h1>
                        </Col>
                        <Col xs="12" sm="6" md="6" className="  centrado-fila" >
                          {/* <h2> <b>Objetivo</b></h2> */}
                          <div style={{ width: "90px" }}>
                            <Progress value={80} color="green" />
                          </div>

                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center" >
                          {/* <h2><b>Objetivo</b></h2> */}
                          <h1 className="pl-3"> Satisfacción del cliente </h1>
                        </Col>
                        <Col xs="12" sm="6" md="6" className="pt-3 pb-3 centrado-fila">
                          {/* <h2> <b>Objetivo</b></h2> */}
                          <div style={{ width: "90px" }}>
                            <Progress value={90} color="green" />
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
                      <Row>
                        <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center" >
                          {/* <h2><b>Objetivo</b></h2> */}
                          <h1 className="pl-3">Presentar Propuestas de valor agregado </h1>
                        </Col>
                        <Col xs="12" sm="6" md="6" className="pt-3 pb-3 centrado-fila">
                          {/* <h2> <b>Objetivo</b></h2> */}
                          <div style={{ width: "90px" }}>
                            <Progress value={100} color="green" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" sm="6" md="6" className="text-left d-flex align-items-center" >
                          {/* <h2><b>Objetivo</b></h2> */}
                          <h1 className="pl-3">Cobranza temprana </h1>
                        </Col>
                        <Col xs="12" sm="6" md="6" className="pt-3 pb-3 centrado-fila">
                          {/* <h2> <b>Objetivo</b></h2> */}
                          <div style={{ width: "90px" }}>
                            <Progress value={90} color="green" />
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
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
              <Tab.Container id="left-tabs-example" defaultActiveKey="siete">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                      <Nav.Item>
                        <Nav.Link eventKey="siete" className="text-white">De resultado</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ocho" className="text-white">Estratégico</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                      <Tab.Pane eventKey="siete">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Participación en premio IMT </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="ocho">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Creación de metodología CX (Customer Experience) </h1>
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

export default Atencion;
