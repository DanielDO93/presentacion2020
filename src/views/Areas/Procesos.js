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
                        <Nav.Link eventKey="1" className="text-white">Implementación de NOM35  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2" className="text-white">Implementación de PCI  </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="3" className="text-white"> Auditoría de revisión ISO9001 </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="4" className="text-white"> Auditoría de revisión ISO27001 </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="5" className="text-white"> Auditorías Internas</Nav.Link>
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
                            <Progress value={10} color="red" />
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
                            <Progress value={0} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="3">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={0} color="green" />
                          </Col>
                         
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={100} color="green" />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="4">
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
                      <Tab.Pane eventKey="5">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                            <Progress value={2} color="green" />
                          </Col>
                        
                          <Col xs="12" sm="6" md="6">
                            <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                            <Progress value={0} color="green" />
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
                        <Nav.Link eventKey="cuatro" className="text-white"> Estratégico </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      <Tab.Pane eventKey="uno">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>SLA mapeo de procesos </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>

                            <Progress value={24} text="&#60; 24 hrs" color="red" />
                          </Col>

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="dos">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>SLA de actualización vs. control de cambios </h1>
                          </Col>
                          <Col xs="12" sm="6" md="6">
                            <h2> <b>Objetivo</b></h2>
                            <Progress value={24} text="&#60; 24 hrs" color="red" />
                          </Col>

                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="cuatro">
                        <Row>
                          <Col xs="12" sm="6" md="6" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Propuestas de valor a las campañas</h1>
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
                        <Nav.Link eventKey="siete" className="text-white"> De resultado</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="ocho" className="text-white"> De resultado</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="diez" className="text-white"> De resultado</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="doce" className="text-white"> De resultado</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="trece" className="text-white"> Estratégico</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>

                      <Tab.Pane eventKey="seis">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Implementación de PCI </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="siete">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Auditoría de revisión ISO9001 </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="ocho">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Auditoría de revisión ISO27001 </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="diez">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Auditar proceso de comunicación organizacional </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="doce">
                        <Row>
                          <Col xs="12"  >
                            <h2><b>Objetivo</b></h2>
                            <h1>Auditorías Internas de control de cambios </h1>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="trece">
                        <Row>
                          <Col xs="12" >
                            <h2><b>Objetivo</b></h2>
                            <h1>Auditorías Internas para ISO </h1>
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
