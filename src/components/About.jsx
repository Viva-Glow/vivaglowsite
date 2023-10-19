import React from "react";
import "../css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <section class="about-section">
      <div class="container containerAbout">
        <div class="row clearfix">
          <div class="content-column col-md-6 col-sm-12 col-xs-12">
            <div class="inner-column">
              <div class="sec-title">
                <div class="title titleAB">Conócenos</div>

                <h2>
                  Alcanzamos <br /> Tu Mejor Versión
                </h2>
                <hr class="divider" />
              </div>
              <div class="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </div>
              <div class="email">
                <p> Encuentranos aquí: </p>
               
              </div>
              <a href=" https://api.whatsapp.com/send?phone=34663531305">
                {" "}
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  style={{ color: "#7e634e" }}
                  size="xl"
                  className="whatB mx-2"
                />
              </a>

              <a href=" https://api.whatsapp.com/send?phone=34663531305">
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
                  src="https://img.freepik.com/foto-gratis/hermoso-rostro-sano-joven-mujer-bonita-blanca-piel-fresca-aislada-blanco_186202-7236.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=sph"
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
