import React from "react";
import Footer from "../components/Footer";
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
        <h3 className="tituloPresCs pt-5">CURSO</h3>
        <hr class="divider" />
        <Fade>
          <h2 className="tituloPresCs2  pt-3">
            TÉCNICAS AVANZADAS DE<strong> ESTÉTICA</strong>{" "}
          </h2>
        </Fade>
        <div className="row csRow">
          <div className="col-md-4 imgPres">
            <img
              src="https://img.freepik.com/foto-gratis/cosmetologia-medico-paciente_624325-1650.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=sph"
              className="img-fluid  imgExp "
              alt="mujer en tratamiento estetico"
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-body cardCs">
              <p className="pt-3">
                El pack formativo que supone una revolución para los
                profesionales de la estética ya que contiene los cursos de los
                servicios más demandados en el sector.+ la formación de
                especialización en biobotox en estética aplicada. conocimientos
                previos no requeridos no necesitas ningún entrenamiento para
                aprender, ¡es súper simple! nuestras diplomas son
                internacionales y acreditados. puedes abrir tu propio negocio o
                trabajar para cual quier salón de belleza o clínica así como el
                logo de la academia
              </p>
              <h2 className="tituloPresCs2 p-3">COMBO</h2>
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
              <div>
                <p className="buttonC">
                  <a href="">
                    <b>Contáctanos por whasapp</b>
                  </a>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, ratione!
                </p>
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
          <h4 className="tituloPresCs2 pb-3">Día uno</h4>
          <div className="row">
            <div className="col">
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
            </div>
            <div className="col">
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
            </div>
            <div className="col">
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container ">
          <h4 className="tituloPresCs2 p-3">Día dos</h4>
          <div className="row">
            <div className="col">
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
            </div>
            <div className="col">
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
            </div>
            <div className="col">
              <ul className="textLi">
                <li>BIOPLASMA CON CRISTALES LIQUIDOS</li>
                <li>MICRONEEDLING CON DERMA PEN</li>
                <li>WONDERLBOTOX CON FRIZ</li>
                <li>HILOS LIQUIDOS TENSORES</li>
                <li>MUÑECA DE PORCELANA</li>
                <li>BB GLOW</li>
                <li>BB BLUSH</li>
                <li>BB LIPS</li>
                <li>HIALURON PEN LABIOS RUSOS</li>
                <li>HIALURON PEN LABIOS HIDRATACION CON LIGUERO AUMENTO</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* gallery------------------------ */}
      <div className="container containerG">
      <Fade>
        <h3 className="tituloPresCs2 pt-5 pb-3">
          INVERSION <strong>DEL CURSO</strong>
        </h3>
        </Fade>
        <hr class="divider" />

        <div className="row p-3">
          <div className=" col-sm-12 col-md-6 csMedia ">
            <img
              className="imgCs"
              src="https://img.freepik.com/foto-gratis/linda-mujer-procedimiento-rejuvenecimiento-piel_7502-7517.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=sph"
              alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
            />
          </div>

          <div className=" col-sm-12 col-md-6 ">
          
            <div class="cardPrice">
              <div class="card-title">
                <h3>Basic</h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
              </div>
              <div class="card-price">
                <h4>
                €
                   12
                  <small>month</small>
                </h4>
              </div>
              <div class="card-description">
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Pellentesque hendrerit</li>
                  <li>Aliquam at orci aliquam</li>
                  <li>Praesent non sapien laoreet</li>
                </ul>
              </div>
              <div class="card-action">
              <p className="buttonC">
                  <a href="">
                    <b>SOLICITAR CUPO</b>
                  </a>
                </p>
              </div>
            </div>
          </div>

      
        </div>
        {/* <div className="container">
            <div className="row">
                <div className="col col-sm-6 col-md-6"> 
             
            <img
              className="colcsImg"
              src="https://img.freepik.com/foto-gratis/cosmetologa-haciendo-tratamiento-facial-aplicando-mascarilla_1303-28042.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
              alt="sunset behind San Francisco city skyline"
            />
        
                </div>
                <div className="col col-sm-6 col-md-6">
               
            <img
              className="colcsImg"
              src="https://img.freepik.com/foto-gratis/bella-mujer-recibiendo-tratamiento-belleza_329181-18790.jpg?size=626&ext=jpg&ga=GA1.1.473773967.1686657261&semt=ais"
              alt="sunset behind San Francisco city skyline"
            />
        
                </div>
            </div>
        </div> */}
      
      </div>
      {/* 
      text end-------------- */}
      <div className=" textEnd mb-3 ">
    

        <div className="row p-5">
          <div className="col-12">
            <div className="card-body cardCs">
              <p className="">
              Es muy importante incorporar a tu centro de estetica estos tratamientos novedosos para así obtener más beneficios y dar más servicios a tus clientes. Siempre es recomendable incorporar servicios muy actualizados para que los clientes vean que tu salón no se queda atrasado.
MÁXIMA CALIDAD ACADÉMICA, PROFESORADO EXPERTO EN LA MATERIA.

Veinte años de experiencia en el sector, como prueba tenemos a más de 3000 alumnos satisfechos con nuestros cursos.

La línea de productos que utilizamos son una gama de fórmulas de alta calidad para satisfacer siempre a nuestro cliente. Cumplimos con todas las normas del Ministerio de Sanidad.
INCLUIDO EN EL CURSO:
Todo el material necesario para realizar el curso.
              </p>

              <div>
             
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, ratione!
                </p>
              </div>
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
        <a
          href="/"
          className=""
          
        >
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{color: "#ffffff",}} /> volver
        </a> 
      </div>
    </>
  );
};

export default CourseStar;
