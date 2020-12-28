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
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="siete" className="text-white">De proceso </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="ocho" className="text-white">De resultado </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="nueve" className="text-white">De proceso </Nav.Link>
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
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Resultados de calibración</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>
                              <Progress value={10} text="¨+-10¨" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="siete">
                          <Row>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Certificación staff mensual</h1>
                            </Col>
                            <Col xs="12" sm="6" md="4">
                              <h2> <b>Objetivo</b></h2>
                              <Progress value={90}  color="green" />
                            </Col>
                            <Col xs="12" sm="6" md="4" >
                              <h2><b>Comentarios</b></h2>
                              <h1>90% del personal apruebe con 90% de calificación </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ocho">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Nivel de servicio con base en tickets</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>
                              <Progress value={90} text="=&#62;95%" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="nueve">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Encuesta de calibración con cliente</h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>
                              <Progress value={90}  color="green" />
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
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de metodología Sprint </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={0} text="Binario" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="once">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Implementación de metología CX </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={0} text="Binario" color="green" />
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
            {/*<h1 className="title2" onClick={() => (window.location.href = "/#Indice")}> Gracias</h1>*/}
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

export default Calidad;
