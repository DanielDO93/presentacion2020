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
                  <h2><b className="top">KPI´s: </b></h2>
                </Col>
              </Row>
            
                <Tab.Container id="left-tabs-example" defaultActiveKey="1" >
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)", width:"100%", }}>
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
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)",width:"100%" }}>
                        <Tab.Pane eventKey="1" style={{width:"100%"}}>
                          <Row style={{border:"solid 1px"}}>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={90} color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={80} color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={450} text="450" color="green" />
                            </Col>
                          
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={43} text="43" color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={420} text="420" color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={39} text="39" color="red" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Objetivo  </h2>
                              <Progress value={240} text="240" color="green" />
                            </Col>
                           
                            <Col xs="12" sm="6" md="6">
                              <h2 style={{ paddingTop: "23px", paddingBottom: "23px" }}>Real Anual</h2>
                              <Progress value={23} text="23" color="red" />
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
             
                <Tab.Container id="left-tabs-example" defaultActiveKey="dos">
                  <Row>
                    <Col sm={12}>
                      <Nav variant="pills" className="" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                       
                        <Nav.Item>
                          <Nav.Link eventKey="dos" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="cinco" className="text-white">Estratégico</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="uno" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="seis" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="siete" className="text-white">De resultado</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={12}>
                      <Tab.Content style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
                        <Tab.Pane eventKey="uno">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Contratos firmados en tiempo y forma </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={80} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="dos">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Actualización de precios y condiciones comerciales </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={80} color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                      
                       
                        <Tab.Pane eventKey="cinco">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Estaciones nuevas </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={407} text="407" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seis">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Leads globales </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={420} text="420" color="green" />
                            </Col>
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="siete">
                          <Row>
                            <Col xs="12" sm="6" md="6" >
                              <h2><b>Objetivo</b></h2>
                              <h1>Leads Perfilados </h1>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                              <h2> <b>Objetivo</b></h2>

                              <Progress value={440} text="440" color="green" />
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
                              <h2 style={{textAlign:"left",}}><b>Objetivos</b></h2>
                              <ul style={{textAlign:"left"}}>
                                <li style={{fontSize:"2.5rem"}}>Estrategia de marketing digital global (interna / clientes) </li>
                                <li style={{fontSize:"2.5rem"}}>Rediseño de página CCS y presentación comercial </li>
                              </ul>
                              
                            </Col>
                            <Col xs="12" className="text-left" >
                              
                            </Col>
                          </Row>
                        </Tab.Pane>
                       
                      
                        <Tab.Pane eventKey="trece">
                          <Row>
                            <Col xs="12"  >
                            <h2 style={{textAlign:"left"}}><b>Objetivos</b></h2>
                              <ul style={{textAlign:"left"}}>
                                <li style={{fontSize:"2.5rem"}}>Red comercial y alianzas</li>
                              </ul>
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
