import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Prj from "./Card";
import ecom_img from "../assets/ecom.jpg";
import gtaxiDriver from "../assets/gtaxiDriver.jpeg";
import gtaxiClient from "../assets/gtaxiClient.jpeg";
import your_iptv from "../assets/your-iptv.jpg";
import { BiLogoFlutter } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import Gtaxi from '../assets/gtaxi.jpg';
import Card from "react-bootstrap/Card";
import WebSc from '../assets/webscrapping.jpg'

export function Projects() {
  let ins = "hello mate";
  const ah = () => {
    return <a href="https://iliass2.github.io">go to link </a>;
  };
  return (
    
    <Container  id="projects" className="projects" fluid="true">
      <h1>Projects</h1>
    
      <Row style={{ justifyContent: "center",padding:"2vh"  }} xs={2} md={4} className="g-4">
        <Col >
          <Prj
            footer={
              <>
                <a href="https://github.com/iliass2/iliass2.github.io">
                  Repository
                </a>{" "}
                <AiFillGithub />
              </>
            }
            title={"YourIpTv"}
            description={"This is a Ecom Web buil with Flutter "}
            image={your_iptv}
          ></Prj>
        </Col>
        <Col >
          <Prj
            footer={
              <>
                <a href="https://github.com/iliass2/iliass2.github.io">
                  Repository
                </a>{" "}
                <AiFillGithub />
              </>
            }
            title={"GTaxi"}
            description={<>This is a Taxi reservation App buil with Flutter <BiLogoFlutter/></>}
            image={Gtaxi}
          ></Prj>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center",padding:"2vh" }} xs={2} md={4} className="g-4">
        <Col >
          <Prj
            footer={
              <>
                <a href="https://github.com/iliass2/iliass2.github.io">
                  Repository
                </a>{" "}
                <AiFillGithub />
              </>
            }
            title={"Iptv"}
            description={"This is a Ecom App buil with Flutter "}
            image={ecom_img}
          ></Prj>
        </Col>
        <Col >
          <Prj
            footer={
              <>
                <a href="https://github.com/iliass2/iliass2.github.io">
                  Repository
                </a>{" "}
                <AiFillGithub />
              </>
            }
            title={"C# App"}
            description={<>web scraping and voice assistant app build with C# </>}
            image={WebSc}
          ></Prj>
        </Col>
      </Row>
    </Container>
  );
}
