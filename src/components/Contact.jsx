import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Fade } from "react-awesome-reveal";

// npm i @emailjs/browser

const Result = () => {
  return <p>Mensaje enviado</p>;
};
function ContactComponent(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8u41qbz",
        "template_4flrfks",
        e.target,
        "CEW7CYQtis4Zr1wnl"
      )
      .then(
        (result) => {
          console.log(result.text);
          //alert("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 3000);
  return (
    <>
      <div className="bodyContact pt-3 containerContact">
        <div class="row pt-5">
          <div class="col-md-6 offset-md-3 titleCO">
          <Fade>
            <h2>Contáctanos</h2>
            </Fade>
          </div>
        </div>
        <hr class="divider" />
        <p class="col-md-6 offset-md-3">
          No dudes en ponerte en contacto con nosotros a través de los medios de
          comunicación que prefieras. Ya sea que desees programar una consulta,
          obtener información adicional sobre nuestros servicios, nuestra academia o cualquier
          otra consulta, nuestro equipo en <strong className="strongCont">Viva Glow</strong> está
          listo para atenderte.
        </p>
        <p> ¡Contáctanos hoy mismo y da el primer paso hacia una transformación de belleza y confianza!</p>
        <div class="container pt-4">
          <div class="innerwrap">
            <section class="section1 clearfix pb-4">
              <div class="textcenter">
                <a href=" https://api.whatsapp.com/send?phone=34689818115"  target='_blank'>
                  {" "}
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#2ea41e" }}
                    size="xl"
                    className="whatB pb-2"
                  
                  />
                </a>
                <p>Directo a nuestro Whatsapp</p>
              </div>
            </section>

            <section class="section2 clearfix">
              <div class="col2 column1 first">
              <iframe  id="map_canvas"
                  className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.0361550864523!2d-0.37908392347444697!3d39.46851191280385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4b1061bdf9%3A0x909a23b5c71d02de!2sC%2F%20del%20Convent%20de%20Sta.%20Clara%2C%2012%2C%2046002%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1698160922546!5m2!1ses!2ses" width="200" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
              <div className="pt-2"> <span>Calle Convento Santa Clara 12 B, piso 2, puerta 4 - Valencia</span></div>
              </div>

              <div class="col2 column2 last">
                <div class="sec2innercont"></div>
                <div class="sec2contactform titleCO1">
                  <h3 class="">¡Déjanos tu consulta!</h3>
                  <hr class="divider" />
                  {/* -------------------FORM----------------- */}
                  <form action="" onSubmit={sendEmail} className="form">
                    <div class="clearfix">
                      <input
                        class="col first"
                        type="text"
                        placeholder="Nombre y apellido"
                        name="user_name"
                        className="effect-1 "
                        id="username"
                        required
                        pattern="^(?! )[A-Za-z\s]*$"
                        minLength="2"
                        maxLength="40"
                      />
                    </div>
                    <div class="clearfix">
                      <input
                        class="col2 first"
                        type="email"
                        name="email"
                        className="effect-1"
                        placeholder="Correo electrónico"
                        pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                        maxLength="30"
                        required
                      />
                    </div>
                    <div class="clearfix pb-3">
                      <textarea
                        id=""
                        cols="30"
                        rows="7"
                        name="message"
                        className="effect-1 "
                        placeholder="Mensaje"
                        required
                        maxLength="500"
                        minLength="2"
                      />
                    </div>

                    <div>
                      <input
                        class=" bWh whatCont"
                        aria-hidden="true"
                        type="submit"
                        value="Enviar"
                      />
                    </div>

                    <div>{result ? <Result /> : null}</div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
