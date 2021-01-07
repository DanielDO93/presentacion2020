import React, { Component } from "react";
import "../../index.css";
import Progress from "../Components/Progress";
import home from "../../assets/img/home.png";
import { Row, Col, Container } from 'reactstrap';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'

class Calidad extends Component {
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
                          <Nav.Link eventKey="1" className="text-white">Días en meta  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="2" className="text-white">Monitoreos en tiempo  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="3" className="text-white"> Cobertura de monitoreo </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="4" className="text-white"> Retroalimentaciones en tiempo </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="5" className="text-white"> Nota de Calidad global</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="6" className="text-white"> Resultado de calibración </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="7" className="text-white"> Cumplimiento de Clínica de Calidad en plantilla </Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="1">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={80} color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={79} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={95} color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={98} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={99} color="red" />
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
                              <Progress value={95} color="green" />
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
                              <Progress value={93.5} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="6">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={10} text="¨+-10¨" color="green" />
                            </Col>
                            
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={8} text="¨+-8¨" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="7">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={100} color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={48} color="red" />
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
                        <Nav.Link eventKey="dos" className="text-white">De resultado  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tres" className="text-white"> Estratégico </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="cuatro" className="text-white"> Estratégico </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="cinco" className="text-white">De resultado </Nav.Link>
                      </Nav.Item>

                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="uno">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Días en meta </h1>
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
                            <h1>Cobertura de monitoreos </h1>
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
                            <h1>Retroalimentaciones en tiempo (FeedForward)</h1>
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
                            <h1>Retroalimentaciones en tiempo (FeedQuestioning)</h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>
                            <Progress value={90} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="cinco">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Nota de Calidad global</h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>
                            <Progress value={94} color="green" />
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
                          <Nav.Link eventKey="diez" className="text-white"> Estratégico</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="once" className="text-white"> Estratégico</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="diez">
                          <Row>
                            <Col xs="12" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de metodología Sprint </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="once">
                          <Row>
                            <Col xs="12"  >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de metología CX </h1>
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
            {/*<h1 className="title2" onClick={() => (window.location.href = "/#Indice")}> Gracias</h1>*/}
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

export default Calidad;
