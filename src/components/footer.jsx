import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <Row style={{ backgroundColor: "#424242", color: "white" }}>
      <Col  style={{paddingTop:"8px", justifyContent: "center", alignItems:"center",textAlign: "center" }}>
        <p>
          Copyright 2023-{year} by Acharki Ilyass. All Rights Reserved. this
          portafolio is Powered by FTR IT.
        </p>
      </Col>
    </Row>
  );
}

export default Footer;
