import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import mujer from "../assets/mujer.jpg";
import treatment from "../assets/treatment.jpg";
import { Fade } from "react-awesome-reveal";

import "../css/slider.css";

function Slider() {
  return (
    <Carousel fade className="ConteinerC">
      <Carousel.Item>
        <img className="Carousel" src={mujer} alt="women" />
        {/* imagen de <a href="https://www.freepik.es/foto-gratis/encantadora-mujer-joven-relajada-suave-haciendo-procedimiento-cosmetologico-aplicando-crema-facial-cara-dedos-sonriendo-ampliamente-sintiendose-perfecta-cuidando-piel_10153435.htm#query=belleza&position=8&from_view=search&track=sph">Imagen de cookie_studio</a> en Freepik */}

        <Carousel.Caption className=" BtnText ">
          <Fade>
            <h3 className="text titleSlider">
              <b>
                TRATAMIENTOS
                <br /> ESTÉTICOS EN VALENCIA
              </b>
            </h3>
          </Fade>
          <Fade>
            <Button className="buttom ">
              {" "}
              <a href="#Contact">Contáctanos</a>
            </Button>{" "}
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Carousel" src={treatment} alt="treatment" />
        {/* img from <a href="https://www.freepik.es/foto-gratis/masaje-cara_5403044.htm#query=belleza&position=38&from_view=search&track=sph">Imagen de pressfoto</a> en Freepik */}

        <Carousel.Caption className=" BtnText">
          <Fade>
            <h3 className="text titleSlider">
              <b>
                ACADEMIA <br /> DE FORMACIÓN PROFESIONAL
              </b>
            </h3>
          </Fade>

          <Fade>
            <Button variant="secondary" className="buttom">
              <a href="#Courses">Quiero saber más</a>
            </Button>{" "}
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
