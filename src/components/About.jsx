import React from "react";
import "../css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";
import aboutW from "../assets/aboutW.jpg"

const About = () => {
  return (
    <section class="about-section">
      <div class="container containerAbout">
        <div class="row clearfix">
          <div class="content-column col-md-6 col-sm-12 col-xs-12">
            <div class="inner-column">
              <div class="sec-title">
                <div class="title titleAB">Conócenos</div>
                <Fade>
                <h2>
                  ALCANZAMOS <br /> <span className="version">TU MEJOR VERSIÓN</span>
                </h2>
                </Fade>
                <hr class="divider" />
              </div>
              <div class="text textA">
                <p>
                  {" "}
                  En <strong className="strongT">Clínica Viva Glow</strong> estamos orgullosos de ser
                  el punto de referencia en <strong>Valencia</strong> para quienes buscan mejorar
                  su apariencia y bienestar a través de <strong>tratamientos estéticos</strong>
                  seguros y eficaces.
                </p>
                <p>
                  Con una ubicación privilegiada en la hermosa ciudad de
                  Valencia, te esperamoscon con nuestro equipo de especialistas
                  altamente capacitados, comprometidos en proporcionar a
                  nuestros pacientes una atención de calidad y resultados
                  excepcionales. Valoramos la individualidad de cada cliente y
                  trabajamos de manera personalizada para diseñar planes de
                  tratamiento que se adapten a sus necesidades y objetivos
                  únicos.
                </p>
                <p>
                  Nuestra misión es ayudarte a sentirte más seguro y confiado en
                  tu propia piel, y estamos comprometidos en brindarte una
                  experiencia que sea cómoda, acogedora y transformadora.
                </p>
                <p>
                  Te invitamos a descubrir cómo podemos ayudarte a alcanzar tus
                  metas estéticas de manera segura y efectiva. Estamos aquí para apoyarte en cada paso del camino.
                </p>
              </div>
              <div class="email">
                <p> Encuentranos aquí: </p>
              </div>
              <a href="https://www.facebook.com/vivaglowsp/"    target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  style={{ color: "#7e634e" }}
                  size="xl"
                  className="whatB mx-2"

                />
              </a>

              <a href="https://instagram.com/vivaglowsp"    target="_blank">
                {" "}
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  style={{ color: "#7e634e" }}
                  size="xl"
                  className="whatB mx-2"
                />
              </a>
            </div>
          </div>

          <div class="image-column col-md-6 col-sm-12 col-xs-12">
            <div
              class="inner-column "
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div class="image">
                <img
                  src={aboutW}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
