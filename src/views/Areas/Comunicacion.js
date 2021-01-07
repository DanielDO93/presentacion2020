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
                          <Nav.Link eventKey="1" className="text-white">Cumplimiento Plan de trabajo</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="2" className="text-white">Retención</Nav.Link>
                        </Nav.Item>

                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="1">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={5} color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={100} text="N/A" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={5} color="green" />
                            </Col>
                          
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={100} text="N/A" color="green" />
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
              
                <Tab.Container id="left-tabs-example" defaultActiveKey="tres">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                       
                        <Nav.Item>
                          <Nav.Link eventKey="tres" className="text-white">Estratégico </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                      
                        <Tab.Pane eventKey="tres">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Presentaciones corporativas y de clientes &#60; 48 hrs. </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={95} color="green" />
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
                <Tab.Container id="left-tabs-example" defaultActiveKey="cuatro">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Nav.Item>
                          <Nav.Link eventKey="cuatro" className="text-white"> De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="cuatro">
                          <Row>
                            <Col xs="12"  >
                              <h2><b>Objetivo</b></h2>
                              <h1>Cumplimiento Plan de trabajo organizacional </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12">
                              <h2><b>Objetivo</b></h2>
                              <h1>Cumplimiento Plan de trabajo corporativo </h1>
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Propuestas de mejora organizacional </h1>
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
