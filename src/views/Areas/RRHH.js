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
              <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Row>
                  <Col sm={12}>
                    <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Nav.Item>
                        <Nav.Link eventKey="1" className="text-white">Reclutamiento QA  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2" className="text-white">Reclutamiento Cobertura  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3" className="text-white"> Personal mayor &#62; 40 </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4" className="text-white"> Retención </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="5" className="text-white"> Pre-sentismo </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="6" className="text-white"> Sistema de evaluación </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="7" className="text-white"> Adherencia a la solicitud </Nav.Link>
                      </Nav.Item>

                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="1">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={100} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={100} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={90} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={95} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="3">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={20} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={12} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="4">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={90} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={88} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="5">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={90} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={93} color="green" />
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
                            <Progress value={0} text="Pendiente" color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="7">
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
                          <Nav.Link eventKey="uno" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="dos" className="text-white">Estratégico </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="tres" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="siete" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="uno">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Reclutamiento QA </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="dos">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Cobertura de vacantes </h1>
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
                              <h1>Adherencia de vacantes </h1>
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
                              <h1>Retención </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={90} color="green" />
                            </Col>

                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Presentismo </h1>
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
                              <h1>Sistema de evaluación </h1>
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
              
                <Tab.Container id="left-tabs-example" defaultActiveKey="diez">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                        <Nav.Item>
                          <Nav.Link eventKey="diez" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                        <Tab.Pane eventKey="diez">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de metodología 9Box Grid </h1>
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
