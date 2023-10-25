import Container from "react-bootstrap/Container";
import "../css/navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoDorado1 from "../assets/LogoDorado1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

function NavBar() {
  const [color, setColor] = useState(false);
  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <Navbar expand="lg" className={color ? "Navbar Navbar-bg" : "Navbar"}>
      <Container fluid>
        <Navbar.Brand className="Navbar-brand2 d-lg-none " href="#Slider">
          <a href="#Slider">
            <img className="logoNavbar" src={LogoDorado1} alt="" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="navlink" href="#Clinic">
              <b>Tratamientos</b>
            </Nav.Link>
            <Nav.Link className="navlink" href="#Courses">
              <b>Academia</b>
            </Nav.Link>
            <Navbar.Brand className="Navbar-brand d-none d-lg-block" href="#">
              <a href="">
                <img className="logoNavbar" src={LogoDorado1} alt="" />
              </a>
            </Navbar.Brand>

            <Nav.Link className="navlink" href="#About">
             <b>Conócenos</b> 
            </Nav.Link>
            <Nav.Link className="navlink" href="#Contact">
             <b>Contáctanos</b> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
