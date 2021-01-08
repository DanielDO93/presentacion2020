import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import ReactFitText from "react-fittext";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
} from "reactstrap";
import "../index.css";
import logo from "../assets/img/brand/logo.png";

import Comercial from "./Areas/Comercial";
import Atencion from "./Areas/Atencion";
import Implementacion from "./Areas/Implementacion";
import RRHH from "./Areas/RRHH";
import Capacitacion from "./Areas/Capacitacion";
import Comunicacion from "./Areas/Comunicacion";
import Operacion from "./Areas/Operacion";
import TI from "./Areas/TI";
import CommandCenter from "./Areas/CommandCenter";
import Calidad from "./Areas/Calidad";
import Procesos from "./Areas/Procesos";
import 'animate.css'


class Index extends Component {
  render() {
    return (
      <div id="slideshare_root">
        <div id="bg"></div>
        <div id="bgnoise"></div>

        <ReactFullpage
          licenseKey={"FF3E03E0-2607429E-8207D2C5-8D8301B1"}
          scrollingSpeed={500} /* Options here */
          anchors={[
            "Inicio",
            "Indice",
            "Comercial",
            "Atencion",
            "Implementacion",
            "RRHH",
            "Capacitacion",
            "Comunicacion",
            "Operacion",
            "TI",
            "CommandCenter",
            "Calidad",
            "Procesos"
          ]}
          verticalCentered={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div
                  // style={{
                  //   padding: "3%",
                  //   textAlign: "center",
                  //   backgroundColor: "rgba(0,0,0,0.3)",
                  //   width: "50vw"
                  // }}
                  >
                    <img
                      src={logo}
                      onClick={() =>
                        document.getElementById("root").requestFullscreen
                          ? document.getElementById("root").requestFullscreen()
                          : null
                      }
                      width={400}
                      alt="logo"
                      className="img-fluid animated  animate__backInDown"
                      style={{
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))"
                      }}
                    />
                    <ReactFitText compressor={1.5}>
                      <h1 className="transparent animated  animate__backInLeft delay-1s">Presentación Anual</h1>
                    </ReactFitText>
                    <ReactFitText>
                      <h1 className="transparent animated animate__backInRight delay-2s">2020-2021</h1>
                      
                    </ReactFitText>
                   
                    
                   
                  </div>
                </div>

                <div className="section">
                  <Container>
                    <Row>
                      <Col className="fluid">
                        <Card
                          style={{ backgroundColor: "rgba(0,0,0,0.0)", }}
                          onClick={() => fullpageApi.moveTo("Comercial")}

                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"

                          >
                            <h3
                              style={{ paddingTop: "18px" }}
                            >Comercial</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                          onClick={() => fullpageApi.moveTo("Atencion")}

                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"

                          >
                            <h3
                              style={{ paddingTop: "5px" }}
                            >Atención a Clientes</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Implementacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Implementación</h3>
                          </CardHeader>

                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("RRHH")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>RRHH</h3>
                          </CardHeader>

                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Capacitacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >

                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Capacitación</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Comunicacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Comunicación</h3>
                          </CardHeader>
                        </Card>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Operacion")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Operación</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("TI")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>TI</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("CommandCenter")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Command Center</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Calidad")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Calidad</h3>
                          </CardHeader>
                        </Card>
                      </Col>

                      <Col className="fluid">
                        <Card
                          onClick={() => fullpageApi.moveTo("Procesos")}
                          style={{ backgroundColor: "rgba(0,0,0,0.0)" }}
                        >
                          <CardHeader
                            style={{ backgroundColor: "rgba(0,0,0,0.0)", cursor: "pointer", height: "82px" }}
                            className="zoom"
                          >
                            <h3 style={{ paddingTop: "18px" }}>Procesos</h3>
                          </CardHeader>

                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>

                {/*############################################################# AREAS #############################################################*/}

                <Comercial />
                <Atencion />
                <Implementacion />
                <RRHH />
                <Capacitacion />
                <Comunicacion />
                <Operacion />
                <TI />
                <CommandCenter />
                <Calidad />
                <Procesos />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default Index;
