import React from "react";
import "../css/courses.scss";
import tratamientoReductor from "../assets/tratamientoReductor.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const SectionCourses = () => {
  return (
    <>
      {/* banner academy----------------- */}
      <div class="container text-center containerCoursesBanner p-2 ">
        <div class="row p-4">
          <div class="  tituloPC">
            <h3>
              <strong>ACADEMIA DE FORMACIÓN PROFESIONAL</strong>
            </h3>
            <h4 className="subtCap">Convierte tu pasión en profesión</h4>
          </div>
        </div>
      </div>

      {/* academy---------------------- */}
      <div class="container text-center containerCourses">
        {/* Title clinic------------ */}
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3 tituloPC1">
            <Fade>
              <h2>
                CAPACÍTATE EN <strong>VIVA GLOW</strong>{" "}
              </h2>
            </Fade>
          </div>
        </div>
        <hr class="divider " />
        <div class="row pt-3">
          <div class="col-md-6 offset-md-3 ancore">
            <p>
              Nuestra academia es el lugar donde la pasión por la estética se
              combina con la excelencia educativa.
            </p>
            <p>
              Nuestros programas de formación, cuidadosamente diseñados, te
              sumergirán en el fascinante mundo de la estética, proporcionándote
              una base sólida de competencias técnicas y teóricas. Nuestro
              equipo de instructores altamente calificados y apasionados te
              guiará en cada paso de tu viaje educativo, compartiendo su
              experiencia y conocimiento para que puedas alcanzar tu máximo
              potencial.
            </p>
            <p>
              En <strong className="vivaCourses">Viva Glow</strong>, no solo te
              preparamos para el éxito en la industria de la belleza, sino que
              también fomentamos la creatividad, la innovación y la confianza en
              nuestros estudiantes. Creemos que cada estudiante tiene un
              potencial único, y nuestro objetivo es ayudarte a desarrollarlo y
              brillar en tu carrera de esteticista.
            </p>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3 tituloPC1">
            <Fade>
              <h3>
                NUESTROS <strong>CURSOS</strong>{" "}
              </h3>
            </Fade>
            <hr class="divider" />
          </div>
        </div>
      </div>
      {/* CARD1 course advanced----------------------------- */}
      <div class="blog-card">
        <div class="meta">
          <div class="photo">
            <img
            className="foto"
              src={tratamientoReductor}
              alt="silueta de mujer con una cinta de centimetro rodeándola"
            />
          </div>
       
        </div>
        <div class="descriptionCs">
          <h3 className="titleCs">TÉCNICAS AVANZADAS DE ESTÉTICA</h3>
         
          <p>Este paquete formativo es la clave para desbloquear las puertas del éxito en la estética. </p>
          <p>Sin conocimientos previos necesarios, nuestro curso es súper simple y te proporcionará el diploma que te abrirá las puertas a ingresos inmediatos.</p>
      
          <div className="row ancore">
            <p className="pSlider2">
              <a href="/curso-tecnicas-avanzadas-estetica">
                <b>ver contenido</b>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 offset-md-3 tituloPC1 pt-5">
            <Fade>
              <h4>
               CURSOS <strong>ESPECIALIZADOS</strong>{" "}
              </h4>
            </Fade>
            <hr class="divider" />
          </div>

      {/* CARDS ---------------- */}

      <div class="wrapperC">
        <div class="card cardCuorses">
          <input type="checkbox" id="card1" class="more" />
          <div class="content">
            <div class="front front1">
              <div class="inner">
                <h2> MICRO PIGMENTACIÓN</h2>

                <label for="card1" class="button" aria-hidden="true">
                  Ver más
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <div class="description">
                  <p>
                    Descubre el poder de la MICRO PIGMENTACIÓN en nuestro curso
                    especializado. Aprende a crear transformaciones asombrosas y
                    asegura tu éxito económico en la industria de la belleza.
                  </p>
                  <p>
                    Convierte tu pasión en una carrera lucrativa y toma el
                    control de tu futuro financiero.
                  </p>
                </div>
                {/* <div class="location">MICRO PIGMENTACIÓN</div> */}
                {/* <div class="price">42€ / day</div> */}
                <label for="card1" class="button return" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="card cardCuorses">
          <input type="checkbox" id="card2" class="more" />
          <div class="content">
            <div class="front front2">
              <div class="inner">
                <h2>MADEROTERAPIA</h2>

                <label for="card2" class="button" aria-hidden="true">
                  Ver más
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <div class="description">
                  <p>
                    Conviértete en un experto de la MADEROTERAPIA y descubre
                    cómo aumentar tus ingresos en la industria de la estética.
                    Nuestro curso te enseñará las técnicas más avanzadas con
                    herramientas de madera, permitiéndote ofrecer tratamientos
                    únicos y altamente demandados.
                  </p>
                  <p>
                    ¡Eleva tus habilidades y tu potencial económico con la
                    maderoterapia!
                  </p>
                </div>
                {/* <div class="location">MADEROTERAPIA</div> */}

                <label for="card2" class="button return" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="card cardCuorses">
          <input type="checkbox" id="card3" class="more" />
          <div class="content">
            <div class="front front3">
              <div class="inner">
                <h2>PEELING QUÍMICO</h2>

                <label for="card3" class="button" aria-hidden="true">
                  Ver más
                </label>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <div class="description">
                  <p>
                    Potencia tu carrera en la estética con nuestro curso de
                    PEELING QUÍMICO. Aprende las técnicas más efectivas para
                    renovar la piel y ofrecer tratamientos que los clientes
                    adoran.
                  </p>
                  <p>
                    Aumenta tus ingresos al ofrecer servicios de alto valor.
                    ¡Invierte en tu futuro económico y destaca en la industria
                    de la belleza con nuestro curso de peeling químico.
                  </p>
                </div>
                {/* <div class="location ">PEELING QUÍMICO</div> */}
                {/* <div class="price">60€ / day</div> */}
                <label for="card3" class="button return" aria-hidden="true">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ color: "#7e634e" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ancore">
        <p className="pSlider2">
          <a
            href=" https://api.whatsapp.com/send?phone=34689818115"
            target="_blank"
          >
            <b>Quiero más info por whatsapp</b>
          </a>
        </p>
      </div>
      {/* academy---------------------- */}
    </>
  );
};

export default SectionCourses;
