import "../App.css";
import BasicExample from "../components/navbar.jsx";
import { useRef } from "react";
import githubIcon from "../assets/github.png";
import LinkedinIcon from "../assets/linkedin.png";
import { Button } from "react-bootstrap";
function  open(url){
  window.open(
    url
  );
}
const githube_url="https://github.com/iliass2/"
const linkedin_url="https://www.linkedin.com/in/ilyass-acharki-2b700a79/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
function centro() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="who_am_i">
          <div className="social_buttons" style={{ padding: 5 }}>
            <Button onClick={()=>open(githube_url)} variant="outline-secondary" style={{ margin: 10,backgroundColor:"white",opacity:0.7 }}>
              <img src={githubIcon} style={{ width: 30, height: 30 }}></img>{" "}
            </Button>
            <Button onClick={()=>open(linkedin_url)} variant="outline-secondary" style={{ margin: 10,backgroundColor:"white",opacity:0.7}}>
              <img src={LinkedinIcon} style={{ width: 30, height: 30 }}></img>{" "}
            </Button>
          </div>
          <h1 className="who_text"> Who am i ?</h1>
          <p className="description">
            Hi, I'm Acharki Ilyass, a passionate and versatile full-stack
            developer with a strong background in web and software development.
            With a deep love for coding and a commitment to staying updated with
            the latest technologies, I thrive in creating efficient,
            user-friendly, and visually appealing web applications.
          </p>
        </div>
      </header>
      <div></div>
    </div>
  );
}
export default centro;
