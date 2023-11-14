import React from "react";
import Footer from "../components/Footer";
import hyaluron from "../assets/hyaluron.jpg";
import womanface from "../assets/womanface.jpg";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/courseStar.css";
import "../css/courses.scss";

const CourseStar = () => {
  return (
    <>
      <div className="cardPr cardCsback mb-3 " id="Slider">
        <Fade>
          <h2 className="tituloPresCs1 pt-5">
            BIENVENIDO A 
          </h2>
          <h2 className="tituloPresCs1"><strong>ACADEMIA VIVA GLOW</strong></h2>
          <h3 className="tituloPresCs pt-5">CURSO</h3>
        </Fade>
        <hr class="divider" />
        <Fade>
          <h2 className="tituloPresCs2  ">
            TÉCNICAS AVANZADAS DE<strong> ESTÉTICA</strong>{" "}
          </h2>
        </Fade>
        <h4 className="cardCs pt-3">Ilumina tu Carrera Profesional</h4>
        <p className="pt-3 cardCs">
          Descubre y domina las técnicas más utilizadas y rentables en el
          fascinante mundo de la estética.
        </p>
        <div className="row csRow">
          <div className="col-md-4 imgPres">
            <img
              src={hyaluron}
              className="img-fluid  imgExp "
              alt="mujer en tratamiento estetico"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-body cardCs">
              <h4 className="pt-3">Sumérgete en la Maestría Estética con Nosotros</h4>
              <p className="pt-3">
                Experimenta la aplicación PRÁCTICA de técnicas avanzadas en
                nuestro curso. Nuestros profesionales lideran demostraciones en
                maniquíes y modelos reales, brindándote una inmersión total en
                el aprendizaje.
              </p>
            
              <ul className="textLi">
                <li>
                  <b>Supervisión por Expertos:</b> Profesores altamente
                  capacitados ofrecen orientación constante y feedback para un
                  aprendizaje efectivo.
                </li>
                <li>
                  <b>Intensivo y Realista:</b> Aunque el enfoque es práctico,
                  cada sesión es educativa e intensiva, preparándote para el
                  mundo real.
                </li>
                <li>
                  <b>Confianza Garantizada:</b> Practica en maniquíes con
                  seguridad y confianza bajo supervisión, listo para destacar en
                  tu carrera.
                </li>
                <li>
                  <b>Enfoque Práctico:</b> Más allá de la teoría, te llevamos a
                  la práctica real en <strong>ACADEMIA VIVA GLOW</strong>, donde
                  observar y realizar es clave para la maestría en estética.
                </li>
              </ul>

              <div>
                <p className="buttonC ">
                  <a href="https://api.whatsapp.com/send?phone=34689818115">
                   <b>Contáctanos por whatsapp</b> 
                  </a>
                </p>
                <h4 className="pt-4">
                  ¡Una Revolución Formativa para Profesionales de la Estética!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* table----------- */}
      <div className=" containerTable cardCs">
        <div className="container ">
          <Fade>
            <h3 className="tituloPresCs2">
              CONTENIDO <strong>DEL CURSO</strong>
            </h3>
          </Fade>
          <hr class="divider" />

          <div className="row pt-3">
            <div className="col">
              <ul className="textLi">
                <li>Bienvenida</li>
                <li>Introducción al Dermapen</li>
                <li>Tecnología de Microagujas </li>
                <li>Características Principales</li>
                <li>Indicaciones de uso </li>
                <li>Procedimiento</li>
                <li>Profundidad de Trabajo con Dermapen</li>
                <li>Beneficios del Dermapen </li>
                <li>Contraindicaciones y consideraciones </li>
                <li>Teoría del Acné</li>
                <li>Evaluación y Diagnóstico</li>
               
              </ul>
            </div>
            <div className="col">
              <ul className="textLi">
              <li>Protocolo de Tratamiento del Acné</li>
                <li>Eliminación de Cicatrices de Acné</li>
                <li>Cuidados Posteriores y Prevención</li>
                <li>BB Glow: Teoría y Técnicas Avanzadas de Aplicación</li>
                <li>BB Blush</li>
                <li>BB Lips</li>
                <li>Pigmentación y Colorimetría</li>
                <li>Técnicas Avanzadas de Aplicación</li>
                <li>Cuidados Posteriores y Mantenimiento</li>
                <li>Introducción a los Hilos Tensores Reabsorbibles</li>
                <li>Anatomía Facial Relacionada</li>
              </ul>
            </div>
            <div className="col">
              <ul className="textLi">
                <li>Tipos de Hilos Tensores Reabsorbibles</li>
                <li>Indicaciones y Contraindicaciones</li>
                <li>Procedimiento de Aplicación</li>
                <li>Seguridad y Consideraciones Éticas</li>
                <li>Resultados Esperados y Duración</li>
                <li>Manejo de Complicaciones</li>
                <li>Actualizaciones y Tendencias</li>
                <li>
                  Biobotox en Estética Aplicada: Indicaciones y
                  Contraindicaciones
                </li>
                <li>Consentimiento Informado para Biobotox Estético</li>
                <li>Conclusiones y Evaluación</li>
              </ul>
            </div>
            <h4 className=" pb-3 pt-5">
              FECHAS DEL CURSO: Sábado 25 y Domingo 26 de Noviembre, de 10 a
              14:30 y de 15:30 a 18
            </h4>
          </div>
        </div>
      </div>

      {/* gallery------------------------ */}
      <div className="container containerG">
        <Fade>
          <h3 className="tituloPresCs2 pt-5 pb-3">
            INVERSION EN TU<strong> FUTURO PROFESIONAL</strong>
          </h3>
        </Fade>
        <hr class="divider" />

        <div className="row p-3 ">
          <div className=" col-sm-12 col-md-6 csMedia ">
            <img
              className="imgCs "
              src={womanface}
              alt="rostro de mujer"
            />
          </div>

          <div className=" col-sm-12 col-md-6 pt-3">
            <div class="cardPrice cardCs">
            <div class="card-title pb-2">
                <h3>Coste del Curso</h3>
              </div>

              <div className="bodyExtra black1">
                
              <div class="black  ">
              
                <span >B</span>
                <span>L</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
                <br />
                <span>F</span>
                <span>R</span>
                <span>I</span>
                <span>D</span>
                <span>A</span>
                <span>Y</span>
                <p className="pExtra">SALE € 599</p>
              </div>
              </div>


             
              <div class="card-price">
                <h4 class="card-price1">€ 1590</h4>
                <p>
                  <b>Duración:</b> 2 días intensivos
                </p>
                <p>
                  <b>Reserva:</b> €100 (se descontará del precio del curso)
                </p>
              </div>

              <div class="card-action">
                <p className="buttonC">
                  <a href="https://api.whatsapp.com/send?phone=34689818115">
                    <b>SOLICITAR PLAZA</b>
                  </a>
                </p>
              </div>
            </div>
     
          </div>
        </div>
      
      </div>
      {/* 
      text end-------------- */}
      <div className=" textEnd mb-3 ">
        <div className="row p-5">
          <div className="col-12">
            <div className="card-body cardCs">
              <div class="card-description">
                <h4>
                  <b>¿Por qué elegir ACADEMIA VIVA GLOW?</b>
                </h4>
                <ul>
                  <li>Más de diez años de experiencia en el sector</li>
                  <li>Profesorado experto en la materia</li>
                  <li>
                    Cientos de alumnos satisfechos en el apasionante mundo de la
                    estética
                  </li>
                  <li>Máxima calidad académica</li>
                </ul>
              </div>
              <p>
                {" "}
                <b>¡Incorpórate a la Vanguardia Estética!</b>
              </p>
              <p className="">
                Es esencial integrar estos tratamientos innovadores a tus
                habilidades profesionales o a tu centro de estética para estar
                actualizado y ofrecer servicios de alta calidad a tus clientes.
              </p>
              <p>
                Te proporcionamos todo el material necesario para realizar el
                curso y, al finalizar, obtendrás tu Diploma Acreditativo.
              </p>
              <p className="pt-3"><b>CONDICIONES PARA LA RESERVA</b></p>
              <p>La plaza queda reservada una vez realizada la reserva de €100</p>
              <ul className="textLi">
              <p>Medios de pago:</p>
                <li>Tarjetas de Crédito, Bizum y Transferencia Bancaria. Contactar al teléfono 689 818 115</li>
                <li>La reserva se descontará del precio final y no puede ser reembolsada por ningún motivo. <p>En caso de ausencia por fuerza mayor, buscaremos una nueva fecha para que tomes el curso.</p> </li>
                </ul>

              <p><b>¡No pierdas la oportunidad de brillar con nosotros en ACADEMIA VIVA GLOW!</b></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="wh">
        <a
          href=" https://api.whatsapp.com/send?phone=34689818115"
          className="whatsapp"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="xl"
            style={{ color: "#ffffff" }}
          />
        </a>
      </div>
      <div className="goBack">
        <a href="/" className="">
          {" "}
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#ffffff" }}
          />{" "}
          volver
        </a>
      </div>
    </>
  );
};

export default CourseStar;
