import Swiperhere from "./swiper";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { Compo } from "./teste";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import foto1 from "../assets/img1.png";
import foto2 from "../assets/ecom.jpg";
import icon1 from "../assets/html (2).png";
import icon2 from "../assets/js (1).png";

import icon3 from "../assets/java (1) (1).png";
import icon4 from "../assets/css-3 (1) (1).png";
import icon5 from "../assets/flutter.207x256 (1).png";

function About() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  let svg_w = 100;
  let svg_h = 100;
  const is_phone = windowSize.current[0] < windowSize.current[1];
  if (is_phone) {
    svg_w = 48;
    svg_h = 48;
    const right_div = document.getElementsByClassName("right_about");
  }
  const icons = [icon1, icon2, icon4, icon3, icon5, icon1, icon1];

  const images = [
    foto2,
    foto1,
    "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1156&q=80",
    "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1156&q=80",
  ];
  if (!is_phone) {
    return (
      <Container className="about" fluid>
        <Row>
          <Col>
            <Row>
              <h1>About me</h1>
              <br></br>
              <p style={{marginTop:"10vh"}}>
                23 years old, of Moroccan nationality, ability to speak English,
                Spanish, Arabic and French. I obtained my bachelor's degree in
                2018 in which I was able to get the best grade in the province,
                then a two-year diploma in information systems development in
                which I also got the best grade and a bachelor's degree in
                information systems and software genius in 2022
              </p>
            </Row>
            <Row style={{}}>
              <Col style={{textAlign:"center"}}>
              <Button
                variant="outline-primary"
                size="lg"
                style={{
                  width: "25vw",
                  marginTop:"10vh",
                  
                }}
                onClick={() => {
                  window.location.replace(
                    "https://drive.google.com/file/d/1jLzZC-h-7r7Sj3v9eeSXSXa7WkxetGss/view?usp=drive_link"
                  );
                }}
              >
                Download CV{" "}
              </Button>{" "}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Row>
                <h1>Archievements</h1>
              </Row>
              <Row
                style={{ width: windowSize.current[0] / 2, marginTop: "10%" }}
              >
                <Swiperhere class_img={"images"} images={images} how_much={1} />
              </Row>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h1 style={{ paddingLeft: "5vw" }}>Skills</h1>
            </Row>
            <Row style={{ width: "100vw", height: "20vh" }}>
              <Swiperhere class_img="icons" how_much={5} images={icons} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="about" fluid>
        <Row>
          <Col>
            <h1>About me</h1>
            <br></br>
            <p>
              23 years old, of Moroccan nationality, ability to speak English,
              Spanish, Arabic and French. I obtained my bachelor's degree in
              2018 in which I was able to get the best grade in the province,
              then a two-year diploma in information systems development in
              which I also got the best grade and a bachelor's degree in
              information systems and software genius in 2022
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="outline-primary"
              size="sm"
              style={{
                width: "100px",
                textAlign: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                window.location.replace(
                  "https://drive.google.com/file/d/1jLzZC-h-7r7Sj3v9eeSXSXa7WkxetGss/view?usp=drive_link"
                );
              }}
            >
              Download CV{" "}
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Row>
                <h1>Archievements</h1>
              </Row>
              <Row
                style={{
                  width: windowSize.current[0],
                  marginTop: "10%",
                  paddingLeft: "10%",
                }}
              >
                <Swiperhere class_img={"images"} images={images} how_much={1} />
              </Row>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <h1 style={{ paddingLeft: "5vw" }}>Skills</h1>
            </Row>
            <Row style={{ width: "100vw", height: "20vh" }}>
              <Swiperhere class_img="icons" how_much={5} images={icons} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
