import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
     
        <div class="contact-container">
          <div class="social-media">
            <h2>Síguenos en nuestras redes</h2>
            <div class="links ">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="xl"
                style={{ color: "#ffffff" }}
                className="linkRedes"
              />
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="xl"
                style={{ color: "#fcfcfc" }}
                className="linkRedes"
              />
            </div>
          </div>
        </div>
      </footer>
      <div class="copyright">
        <a href="#Slider">
          <svg
            class="svg-up"
            width="192"
            height="61"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 160.7 61.5"
            enable-background="new 0 0 160.7 61.5"
            xml:space="preserve"
          >
            <path
              fill="#A8876C"
              d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
            ></path>{" "}
            <FontAwesomeIcon icon={faAngleUp} style={{ color: "#ffffff" }} />
          </svg>
        </a>

        <ul class="info">
          <br />
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#7e634e" }}
              size="xl"
            />{" "}
            Calle Convento de Santa Clara 12 B - piso 2 - puerta 4 - Valencia
          </li>
          <br />
          <br />
          <li>
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#7e634e" }}
              size="xl"
            />{" "}
            +34 689 818 115
          </li>
          <br />
          <br />
          <li>
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#7e634e" }}
              size="xl"
            />{" "}
            rrrrrrrrrrrr@gmail.com
          </li>
          <br />
          <br />
          <li>Horarios de atención: Lunes a Viernes / 10:00am - 20:00pm</li>
        </ul>
        <ul class="CTA">
          <li>&copy; Viva Glow</li>
          <br />
          <li>Todos los derechos reservados</li>
          <br />
          <li>
            Desarrollado por <a href="">Pixela</a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;